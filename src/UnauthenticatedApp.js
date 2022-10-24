import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";

function UnauthenticatedApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<h1>Huaychulo</h1>} />
      </Routes>
    </>
  )
}

export default UnauthenticatedApp;
