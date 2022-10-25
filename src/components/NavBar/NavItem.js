import { Item as Container} from "./styles";

function NavItem({ navigate, to, name, Icon }) {
  return (
    <Container
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
