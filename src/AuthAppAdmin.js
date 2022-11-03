import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/AsideNav";
import NavBarAdmin from "./components/NavBarAdmin";
import DishesPage from "./pages/admin/dishes";
import HomePage from "./pages/admin/home";
import ProfilePage from "./pages/admin/profile";
import TablesPage from "./pages/admin/tables";

export const Section = styled.section`
  position: relative;
  height: 100%;
  padding: 2rem 1.5rem;
`;

function AuthAppAdmin() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  `;


  return (
    <div style={{display: "flex"}}>
      <AsideNav />
      <Container>
        <NavBarAdmin />
        <Section>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/platillos" element={<DishesPage /> } />
            <Route path="/mesas" element={<TablesPage /> } />
            <Route path="/perfil" element={<ProfilePage />} />
          </Routes>
        </Section>
      </Container>
    </div>
  );
}

export default AuthAppAdmin;
