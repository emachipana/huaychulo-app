import { FaHotel } from "react-icons/fa";
import { Img, Logo as Container } from "./styles";

function Logo({ navigate, color, ...other }) {
  return (
    <Container
      {...other}
      color={color}
      onClick={() => navigate("/")}
    >
      <Img>
        <FaHotel 
          color={color}
        />
      </Img>
      Huaychulo
    </Container>
  );
}

export default Logo;
