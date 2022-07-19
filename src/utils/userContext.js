import { createContext } from "react";
import { useAuth, login, register } from "../hooks/useAuth";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const user = useAuth();
  return (
    <UserContext.Provider value={{ user, login, register }}>
      {children}
    </UserContext.Provider>
  );
}
