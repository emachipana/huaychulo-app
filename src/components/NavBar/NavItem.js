import { Item as Container} from "./styles";

function NavItem({ location, navigate, to, name, Icon }) {
  return (
    <Container
      active={location === to}
      onClick={() => navigate(to)}
    >
      <Icon
        style={{position: "relative", top: "-2px"}}
        size="24px"
      />
      {" "}
      {name}
    </Container>
  );
}

export default NavItem;
