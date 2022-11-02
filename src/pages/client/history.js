import { useEffect, useState } from "react";
import { Section } from "../../AuthAppAdmin";
import OrderCard from "../../components/OrderCard";
import { useAuth } from "../../context/auth";
import { get } from "../../services";
import Loader from "../admin/Loader";
import { Dishes, Title } from "../admin/styles";

function HistoryPage() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const response = await get("orders");

      setOrders(response.filter(order => order.user_id === user.id));
      setTimeout(() => setIsLoading(false), 500);
    }

    fetch();
  }, [user]);

  const cancelOrder = (id) => {
    const newOrders = orders.map(orders => orders);
    const position = orders.findIndex(order => order.id === id);
    let order = orders.find(order => order.id === id);
    order.status = "cancelled";
    newOrders[position] = order;
    setOrders(newOrders);
  }

  return (
    <Section
      style={{minHeight: "100vh"}}
    >
      <Title>Historial</Title>
      {
        isLoading
        ?
          <Loader />
        :
          <Dishes>
            {
              orders.map(order => (
                <OrderCard
                  cancelOrder={cancelOrder}
                  key={order.id}
                  id={order.id}
                  table_id={order.table_id}
                  date={order.created_at}
                  items={order.items}
                  status={order.status}
                  total={order.total}
                />
              ))
            }
          </Dishes>
      }
    </Section>
  );
}

export default HistoryPage;
