/** @jsxImportSource @emotion/react */
import { Container, IconStyle, Item, NavItem } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { IoRestaurantSharp } from "react-icons/io5"
import { FaUserSecret } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMove, setIsMove] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickMove = () => {
    if(window.scrollY >= 80) return setIsMove(true);
    setIsMove(false);
  }

  window.addEventListener("scroll", handleClickMove);

  return (
    <Container
      isMove={isMove}
    >
      <NavItem
        isMove={isMove}
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
        isMove={isMove}
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
        isMove={isMove}
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
