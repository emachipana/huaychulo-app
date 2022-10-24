/** @jsxImportSource @emotion/react */
import { Button, Container, IconStyle, Img, Logo } from "./styles";
import { FaHotel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import NavItem from "./nav-items";
import { HiMenuAlt3, HiOutlineHome } from "react-icons/hi";
import { IoClose, IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = (to) => {
    navigate(to);
    window.scrollTo(0, 0);
    if(!isOpen) return;
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <Logo
        onClick={() => navigate("/")}
      >
        <Img>
          <FaHotel />
        </Img>
        Huaychulo
      </Logo>
      <section className="handle" onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen
          ?
            <IoClose 
              css={IconStyle}
            />
          :
            <HiMenuAlt3 
            css={IconStyle}
            />
        }
      </section>
      <nav className={isOpen ? "nav active": "nav"}>
        <NavItem
          navigate={handleOpen}
          to={"/"}
          name="Inicio"
          Icon={HiOutlineHome}
        />
        <NavItem
          navigate={handleOpen}
          to={"/carta"}
          name="Carta"
          Icon={IoRestaurantOutline}
        />
        <NavItem
          navigate={handleOpen}
          to={"/conocenos"}
          name="Conócenos"
          Icon={AiOutlineExclamationCircle}
        />
        <Button
          onClick={() => handleOpen("/login")}
        >
          Iniciar sesión
        </Button>
      </nav>
    </Container>
  );
}

export default NavBar;
