import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/AsideNav";
import NavBarAdmin from "./components/NavBarAdmin";

function AuthAppAdmin() {
  return (
    <div style={{display: "flex"}}>
      <AsideNav />
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}>
        <NavBarAdmin 
          orders={["s"]}
        />
        <Routes>
          <Route index path="/" element={<h1>Hola desde admin</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default AuthAppAdmin;
