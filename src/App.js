import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();

  return (
    user ? <AuthenticatedApp /> : <UnauthenticatedApp />
  );
}

export default App;
