/** @jsxImportSource @emotion/react */
import { NavSection, NavItem as Container, IconStyle } from "./styles";

function NavItem({ Icon, name, navigate, to, logout, setIsOpen }) {
  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
    if(logout) return logout();
    navigate(to);
  }

  return (
    <Container
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
