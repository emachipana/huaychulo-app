import { Route, Routes } from "react-router-dom";
import { useAuth } from "./context/auth";

function AuthenticatedApp() {
  const { user } = useAuth();
  
  return (
    <Routes>
      {
        user.user_type === "admin"
        ?
        <Route index path="/" element={<h1>Home desde admin</h1>} />
        :
        <Route index path="/" element={<h1>Home desde client</h1>} />
      }
    </Routes>
  );
}

export default AuthenticatedApp;
