/** @jsxImportSource @emotion/react */
import { Container, IconStyle, Item, NavItem } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { IoRestaurantSharp } from "react-icons/io5"
import { FaUserSecret } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <NavItem
        onClick={() => navigate("/")}
        path="/"
        location={location.pathname}
      >
        <AiFillHome
          css={IconStyle}
        />
        <Item>Inicio</Item>
      </NavItem>
      <NavItem
        onClick={() => navigate("/carta")}
        path="/carta"
        location={location.pathname}
      >
        <IoRestaurantSharp
          css={IconStyle}
        />
        <Item>Carta</Item>
      </NavItem>
      <NavItem
        onClick={() => navigate("/login")}
        path="/login"
        location={location.pathname}
      >
        <FaUserSecret
          css={IconStyle}
        />
        <Item>Acceder</Item>
      </NavItem>
    </Container>
  );
}

export default Navbar;
