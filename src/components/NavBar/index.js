/** @jsxImportSource @emotion/react */
import { Container, IconStyle, Item, NavItem } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { IoRestaurantSharp } from "react-icons/io5"
import { FaUserSecret } from "react-icons/fa";

function Navbar() {
  return (
    <Container>
      <NavItem>
        <AiFillHome
          css={IconStyle}
        />
        <Item>Inicio</Item>
      </NavItem>
      <NavItem>
        <IoRestaurantSharp
          css={IconStyle}
        />
        <Item>Carta</Item>
      </NavItem>
      <NavItem>
        <FaUserSecret
          css={IconStyle}
        />
        <Item>Acceder</Item>
      </NavItem>
    </Container>
  );
}

export default Navbar;
