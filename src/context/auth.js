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
        setTimeout(() => setIsLoading(false), 1000);
      }catch {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }

    fetch();
  }, []);

  async function login(credentials) {
    try {
      const response = await session.login(credentials);
      setUser(response);
      return response;
    }catch(e) {
      setError(e.message);
    }
  }

  async function signup(data) {
    try{
      const response = await session.signup(data);
      setUser(response);
      return response;
    }catch(e) {
      setError(e.message);
    }
  }

  async function logout() {
    setIsLoading(true);
    await session.logout();
    setUser(null);
    navigate("/");
    setTimeout(() => setIsLoading(false), 500);
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
