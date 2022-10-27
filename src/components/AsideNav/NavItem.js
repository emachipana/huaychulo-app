/** @jsxImportSource @emotion/react */
import { useLocation } from "react-router-dom";
import { NavSection, NavItem as Container, IconStyle } from "./styles";

function NavItem({ Icon, name, navigate, to, logout, setIsOpen }) {
  const location = useLocation();

  const handleClick = () => {
    setIsOpen(false);
    if(logout) return logout();
    navigate(to);
  }

  return (
    <Container
      current={to === location.pathname}
      onClick={handleClick}
    >
      <NavSection>
        <Icon 
          css={IconStyle}
        />
        { name }
      </NavSection>
    </Container>
  );
}

export default NavItem;
