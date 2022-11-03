import { useNavigate } from "react-router-dom";
import Logo from "../NavBar/Logo";
import { Backdrop, Container, Hr, Title } from "./styles";
import { colors } from "../../styles";
import { AiFillHome } from "react-icons/ai";
import { RiRestaurantLine, RiReservedFill } from "react-icons/ri";
import { IoClose, IoFastFoodSharp } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { FaUserAstronaut } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import NavItem from "./NavItem";
import { useAuth } from "../../context/auth";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function AsideNav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  
  return (
    <>
    
      <Container
        isOpen={isOpen}
      >
        <div 
          className="handle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {
            isOpen
            ?
              <IoClose
                size="34px"
                color={colors.white}
              />
            :
              <HiMenuAlt3
                size="34px"
                color={colors.white}
              />
          }
        </div>
        <Logo
          className="handle-logo"
          color={colors.white}
          navigate={navigate}
        />
        <Hr />
        <NavItem
          setIsOpen={setIsOpen}
          Icon={AiFillHome}
          name="Inicio"
          navigate={navigate}
          to="/"
        />
        <Hr />
        <Title>Actividad</Title>
        <NavItem
          setIsOpen={setIsOpen} 
          Icon={RiRestaurantLine}
          name="Ordenes"
          navigate={navigate}
          to="/ordenes"
        />
        <NavItem
          setIsOpen={setIsOpen} 
          Icon={GoCalendar}
          name="Reservas"
          navigate={navigate}
          to="/reservas"
        />
        <Hr />
        <Title>Gestionar</Title>
        <NavItem
          setIsOpen={setIsOpen} 
          Icon={IoFastFoodSharp}
          name="Platillos"
          navigate={navigate}
          to="/platillos"
        />
        <NavItem
          setIsOpen={setIsOpen} 
          Icon={RiReservedFill}
          name="Mesas"
          navigate={navigate}
          to="/mesas"
        />
        <Hr />
        <Title>Usuario</Title>
        <NavItem
          setIsOpen={setIsOpen} 
          Icon={FaUserAstronaut}
          name="Perfil"
          navigate={navigate}
          to="/perfil"
        />
        <NavItem
          setIsOpen={setIsOpen}
          logout={logout}
          Icon={BiLogOut}
          name="Salir"
          navigate={navigate}
        />
      </Container>
      <Backdrop
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />
    </>
  );
}

export default AsideNav;
