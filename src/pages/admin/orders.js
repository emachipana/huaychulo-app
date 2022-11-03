import { useEffect, useState } from "react";
import { Badge, Button, Spinner, Table } from "reactstrap";
import { Orders, Text, Title } from "./styles";
import { get, update } from "../../services";
import Loader from "./Loader";
import { Photo } from "../../components/UsersInfo/styles";

function OrdersPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [currentLoading, setCurrentLoading] = useState("");

  useEffect(() => {
    async function fetch() {
      const response = await get("orders");
      setOrders(response);
      setTimeout(() => setIsLoading(false), 500);
    }

    fetch();
  }, []);

  const deliver = async (id, table_id) => {
    setBtnLoading(true);
    setCurrentLoading(id);
    await update("orders", { status: 1 }, id);
    await update("tables", { available: true }, table_id);
    const position = orders.findIndex(order => order.id === id);
    const order = orders.find(order => order.id === id);
    const newOrders = orders.map(order => order);
    order.status = "delivered";
    newOrders[position] = order;
    setOrders(newOrders);
    setBtnLoading(false);
  } 

  return (
    <>
      {
        isLoading
        ?
          <Loader />
        :
          <>
            <Title>Ordenes</Title>
            <Orders>
              <Table
                responsive
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    orders.map((order, index) => {
                      const date = new Date(order.created_at);

                      return (
                        <>
                        
                          <tr
                            key={order.id}
                          >
                            <th>
                              <Text
                                style={{fontWeight: 600}}
                              >
                                { index + 1 }
                              </Text>
                            </th>
                            <th>
                              <Text
                                style={{fontWeight: 600}}
                              >
                                { order.items.length }
                              </Text>
                            </th>
                            <th>
                              <Text
                                style={{fontWeight: 600}}
                              >
                                S/. { order.total }.00
                              </Text>
                            </th>
                            <th>
                              <Text
                                style={{fontWeight: 600}}
                              >
                                { date.toDateString() }
                              </Text>
                            </th>
                            <th>
                              <Badge
                                color={order.status === "pending" ? "warning" : ( order.status === "delivered" ? "success" : "danger" )}
                              >
                                {
                                  order.status === "pending"
                                  ?
                                    "PENDIENTE"
                                  : 
                                    (
                                      order.status === "delivered"
                                      ?
                                        "ENTREGADO"
                                      :
                                        "CANCELADO"
                                    )
                                }
                              </Badge>
                            </th>
                            <th>
                              <Button
                                onClick={() => deliver(order.id, order.table_id)}
                                disabled={order.status !== "pending" || btnLoading}
                                color="primary"
                                size="sm"
                                style={{fontWeight: 600}}
                              >
                                {
                                  btnLoading && currentLoading === order.id
                                  ?
                                    <>
                                      <Spinner 
                                        size="sm"
                                      />
                                      {" "}
                                      Entregando...
                                    </>
                                  :
                                    order.status !== "pending"
                                    ?
                                      "Finalizado"
                                    :
                                      "¿Entregado?"
                                }
                              </Button>
                            </th>
                          </tr>
                          {
                            order.items.map(item => (
                              <tr
                                key={item.id}
                              >
                                <th></th>
                                <th>
                                  <Photo 
                                    src={item.dish.image}
                                    alt="photo-dish"
                                  />
                                </th>
                                <th>
                                  <Text>{ item.dish.name }</Text>
                                </th>
                                <th>
                                  <Text>S/. { item.dish.price }.00</Text>
                                </th>
                              </tr>
                            ))
                          }
                        </>
                      );
                    })
                  }
                </tbody>
              </Table>
            </Orders>
          </>
      }
    </>
  );
}

export default OrdersPage;
