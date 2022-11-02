import { Badge, Button, Spinner } from "reactstrap";
import { Container, FlexRow, Photo, Section, Text, Title } from "./styles";
import { TiCancel } from "react-icons/ti";
import { update } from "../../services";
import { useAuth } from "../../context/auth";
import { useState } from "react";

function OrderCard({ id, date, items, total, table_id, status, cancelOrder }) {
  const [isLoading, setIsLoading] = useState(false);
  const parseDate = new Date(date);
  const { user, setUser } = useAuth();

  const cancel = async () => {
    setIsLoading(true);
    await update("orders", { status: 2 }, id);
    await update("tables", { available: true }, table_id);
    const intake = user.intake - total;
    await update("profile", { intake: intake });
    setUser({...user, intake: intake});
    cancelOrder(id);
    setIsLoading(false);
  }

  return (
    <Container
      id="section"
    >
      <Section>
        <Text>{ parseDate.toDateString() }</Text>
        <Badge
          color={status === "pending" ? "warning" : (status === "cancelled" ? "danger" : "success")}
        >
          { status === "pending" ? "PENDIENTE" : (status === "cancelled" ? "CANCELADO" : "ENTREGADO") }
        </Badge>
      </Section>
      <Section>
        <Text>{ items.length } items</Text>
        <Text
          total
        >
          S/. { total }.00
        </Text>
      </Section>
      <Title>Orden</Title>
      {
        items.map(item => (
          <Section
            key={item.id}
          >
            <FlexRow>
              <Photo 
                src={item.dish.image}
                alt="dish-photo"
              />
              <Text>{ item.dish.name }</Text>
            </FlexRow>
            <Text>S/. { item.dish.price }.00</Text>
          </Section>
        ))
      }
      <hr style={{width: "100%"}}/>
      <Button
        disabled={status === "delivered" || status === "cancelled" || isLoading}
        onClick={() => cancel()}
        color="danger"
        size="sm"
        style={{fontWeight: 600, alignSelf: "end"}}
      >
        {
          isLoading
          ?
          <>
            <Spinner 
              size="sm"
            />
            {" "}
            Cancelando...
          </>
          :
          <>
            <TiCancel
              size="18px"
              style={{position: "relative", top: "-1px"}}
            />
            {" "}
            {status === "cancelled" ? "Cancelado" : (status === "delivered" ? "Entregado" : "Cancelar")}
          </>
        }
      </Button>
    </Container>
  );
}

export default OrderCard; 
