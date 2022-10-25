import AuthAppAdmin from "./AuthAppAdmin";
import { useAuth } from "./context/auth";
import Navbar from "./components/NavBar";
import HomePage from "./pages/client/home";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  const { user, isLoading } = useAuth();

  return (
    isLoading
    ?
      <Loader />
    :
      user?.user_type === "admin" ?
        <AuthAppAdmin />
      :
        <>
          <Navbar />
          <Routes>
            <Route index path="/" element={<HomePage />} />
          </Routes>
        </>  
  );
}

export default App;
