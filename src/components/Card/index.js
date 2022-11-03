import { useNavigate } from "react-router-dom";
import { Container, FlexRow, Name, Num } from "./styles";

function Card({ color, num, Icon, name, to }) {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(to)}
      color={color}
    >
      <FlexRow>
        <Num>{ num }</Num>
        <Icon 
          style={{position: "relative", top: "-4px"}}
          size="40px"
        />
      </FlexRow>
      <FlexRow
        style={{justifyContent: "end"}}
      >
        <Name>{ name }</Name>
      </FlexRow>
    </Container>
  );
}

export default Card;
