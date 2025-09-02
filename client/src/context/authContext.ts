import { createContext, useContext } from "react";
import type { AxiosInstance } from "axios";

import type { IUser } from "./AuthContext";

export interface AuthContextType {
  count: number | null;
  setCount: React.Dispatch<React.SetStateAction<number | null>>;
  axiosInstance: AxiosInstance;
   User:IUser | null
  setUser:React.Dispatch<React.SetStateAction<IUser | null>>
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
