import { Table } from "reactstrap";
import { Container, Flag, Name, Photo, Section, Text } from "./styles";

function UsersInfo({ users }) {
  return (
    <Container>
      <Table
        responsive
        hover
      >
        <thead>
          <tr>
            <th></th>
            <th>Usuario</th>
            <th>Documento</th>
            <th>Consumo</th>
            <th>Actividad</th>
            <th>País</th>
          </tr>
        </thead>
        <tbody>
          {
            users.filter(user => user.user_type !== "admin").map(user => {
              const registered = new Date(user.created_at);
              const last_login = new Date(user.updated_at);

              return (
                <tr
                  key={user.id}
                >
                  <td>
                    <Photo 
                      src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Generic_1.png"
                      alt="user-photo"
                    />
                  </td>
                  <td>
                    <Section>
                      <Name>{ user.name.split(" ")[0].toLowerCase() }</Name>
                      <Text>Registro: { registered.toDateString().split(" ").slice(-3).join(" ") }</Text>
                    </Section>
                  </td>
                  <td>
                    <Text>{ user.document }</Text>
                  </td>
                  <td>
                    <Text>S/. { user.intake }.00</Text>
                  </td>
                  <td>
                    <Text>Login: { last_login.toTimeString().split(" ")[0] }</Text>
                  </td>
                  <td>
                    <Flag 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/2560px-Flag_of_Peru.svg.png"
                      alt="flag-photo"
                    />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default UsersInfo;
