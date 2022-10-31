/** @jsxImportSource @emotion/react */
import { Button, Container, FlexRow, IconStyle, Name, PopoverSection } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { HiMenuAlt3, HiOutlineHome } from "react-icons/hi";
import { IoClose, IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiHistory, BiLogOut } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import SessionModal from "../SessionModal";
import Logo from "./Logo";
import { ProfilePhoto } from "../NavBarAdmin/styles";
import { PopoverBody, UncontrolledPopover } from "reactstrap";

function NavBar({ modal, setModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
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
          location={location.pathname}
          navigate={handleOpen}
          to={"/"}
          name="Inicio"
          Icon={HiOutlineHome}
        />
        <NavItem
          location={location.pathname}
          navigate={handleOpen}
          to={"/carta"}
          name="Carta"
          Icon={IoRestaurantOutline}
        />
        {
          user
          ?
            <>
              <NavItem
                location={location.pathname}
                navigate={handleOpen}
                to={"/historial"}
                name="Historial"
                Icon={BiHistory}
              />
              <ProfilePhoto
                type="button"
                id="profilePopover"
                style={{cursor: "pointer"}}
                src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Generic_1.png"
                alt="profile-photo"
              />
              <UncontrolledPopover
                placement="bottom"
                target="profilePopover"
              >
                <PopoverBody>
                  <Name>
                    {
                      user.document_type === "ruc"
                      ?
                        user.name.toLowerCase()
                      :
                        user.name.split(" ")[0].toLowerCase() + " " + user.last_name.split(" ")[0].toLowerCase()
                    }
                  </Name>
                  <PopoverSection>
                    <FlexRow
                      onClick={() => navigate("/perfil")}
                    >
                      <FaUserAstronaut
                        size="20px"
                      />
                      Perfil
                    </FlexRow>
                    <FlexRow
                      onClick={() => logout()}
                    >
                      <BiLogOut
                        size="20px"
                      />
                      Salir
                    </FlexRow>
                  </PopoverSection>
                </PopoverBody>
              </UncontrolledPopover>
            </>
          :
            <>
              <NavItem
                location={location.pathname}
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
            </>
        }
      </nav>
      <SessionModal 
        isOpen={modal}
        onClose={() => setModal(!modal)}
      />
    </Container>
  );
}

export default NavBar;
