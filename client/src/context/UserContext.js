import { useContext, createContext } from "react";
import { useGetUser } from "../services/api";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const userData = useGetUser();

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
