import { Button } from "reactstrap";
import { Title } from "../../pages/admin/styles";
import { Container, FlexRow, Item, Items, Name, Photo } from "./styles";

function OrderComplete({ isSuccess, items, total, setSelectableMode }) {
  const handleBack = () => {
    setSelectableMode("dishes");
  } 
  
  return (
    <Container>
      {
        isSuccess
        ?
          <>
            <Title>La orden se completó</Title>
            <Items>
              {
                items.map(item => (
                  <Item
                    key={item.dish_id}
                  >
                    <FlexRow>
                      <Photo
                        alt="dish-photo"
                        src={item.image}
                      />
                      <Name>{ item.name }</Name>
                    </FlexRow>
                    <Name>S/. { item.price }.00</Name>
                  </Item>
                ))
              }
            </Items>
            <Title
              style={{fontSize: "25px"}}
            >
              Por un total de S/. {total}.00
            </Title>
          </>
        :
          <>
            <Title>Algo salió mal vuelve a intentarlo</Title>
            <Button
              onClick={() => handleBack()}
              color="danger"
            >
              Volver a intentar
            </Button>
          </>
      }
    </Container>
  );
}

export default OrderComplete;
