import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/AsideNav";
import NavBarAdmin from "./components/NavBarAdmin";
import DishesPage from "./pages/admin/dishes";

function AuthAppAdmin() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;

  const Section = styled.section`
    position: relative;
    height: 100%;
    padding: 2rem 1.5rem;
  `;

  return (
    <div style={{display: "flex"}}>
      <AsideNav />
      <Container>
        <NavBarAdmin />
        <Section>
          <Routes>
            <Route index path="/" element={<h1>Hola desde admin</h1>} />
            <Route path="/platillos" element={<DishesPage />} />
          </Routes>
        </Section>
      </Container>
    </div>
  );
}

export default AuthAppAdmin;
