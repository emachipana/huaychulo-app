import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/client/home";

function UnauthenticatedApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default UnauthenticatedApp;
