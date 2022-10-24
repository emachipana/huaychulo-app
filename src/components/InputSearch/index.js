import { Container, FlexRow, Form, Input } from "./styles";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Button } from "../NavBar/styles";

function InputSearch() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!query) return alert("TIenes que ingresar algun parametro");
    alert(`Tu buscaste: ${query}`);
  }

  return (
    <Container
      htmlFor="search"
    >
      <Form
        onSubmit={handleSubmit}
      >
        <FlexRow>
          <BsSearch />
          <Input
            id="search"
            placeholder="Nombre del platillo"
            value={query}
            onChange={handleChange}
          />
        </FlexRow>
        <Button>
          Buscar
        </Button>
      </Form>
    </Container>
  )
}

export default InputSearch;
