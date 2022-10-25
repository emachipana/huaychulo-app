import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../services";
import * as session from "../services/sessions";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      try {
        const {_token, ...user} = await get("profile");
        setUser(user);
        setIsLoading(false);
      }catch {
        setIsLoading(false);
      }
    }

    fetch();
  }, []);

  async function login(credentials) {
    try {
      const response = await session.login(credentials);
      setUser(response);
      navigate("/");
    }catch(e) {
      setError(e.message);
    }
  }

  async function signup(data) {
    try{
      const response = await session.signup(data);
      setUser(response);
      navigate("/");
    }catch(e) {
      setError(e.message);
    }
  }

  async function logout() {
    await session.logout();
    setUser(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        login,
        signup,
        logout
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
