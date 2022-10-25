/** @jsxImportSource @emotion/react */
import { Button, Container, IconStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { HiMenuAlt3, HiOutlineHome } from "react-icons/hi";
import { IoClose, IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useState } from "react";
import SessionModal from "../SessionModal";
import Logo from "./Logo";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
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
        navigate={navigate}
      />
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
          onClick={() => {
            setModal(!modal);
            setIsOpen(!isOpen);
          }}
        >
          Iniciar sesión
        </Button>
      </nav>
      <SessionModal 
        isOpen={modal}
        onClose={() => setModal(!modal)}
      />
    </Container>
  );
}

export default NavBar;
