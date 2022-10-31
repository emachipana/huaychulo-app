import AuthAppAdmin from "./AuthAppAdmin";
import { useAuth } from "./context/auth";
import Navbar from "./components/NavBar";
import HomePage from "./pages/client/home";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import MenuPage from "./pages/client/menu";
import { useState } from "react";

function App() {
  const { user, isLoading } = useAuth();
  const [modal, setModal] = useState(false);

  return (
    isLoading
    ?
      <Loader />
    :
      user?.user_type === "admin" ?
        <AuthAppAdmin />
      :
        <>
          <Navbar 
            modal={modal}
            setModal={setModal}
          />
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/carta" element={<MenuPage setModal={setModal} />} />
          </Routes>
          <Footer />
        </>  
  );
}

export default App;
