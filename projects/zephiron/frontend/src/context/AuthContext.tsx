import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  name: string;
  email: string;
  iat: number;
  exp: number;
}

interface AuthContextType {
  token: string | null;
  user: JWTPayload | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<JWTPayload | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("zephiron_token");
    if (storedToken) {
      try {
        const decoded = jwtDecode<JWTPayload>(storedToken);
        setToken(storedToken);
        setUser(decoded);
      } catch (err) {
        console.error("Failed to decode token:", err);
        logout();
      }
    }
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem("zephiron_token", newToken);
    setToken(newToken);
    try {
      const decoded = jwtDecode<JWTPayload>(newToken);
      setUser(decoded);
    } catch (err) {
      console.error("Invalid token during login");
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("zephiron_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
