import { useEffect, useState, type ReactNode } from "react";
import axios from "axios";
import { AuthContext } from "./contextAuth";


export type IUser = {
  _id?: string;
  name: string;
  email: string;
  otp?: number;
  DateOfBirth: string;
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const Backend_Url = import.meta.env.VITE_SERVER_URL;
  const axiosInstance = axios.create({
    baseURL: Backend_Url,
    withCredentials: true,
  });

  const [count, setCount] = useState<number | null>(null);
 const [User, setUser] = useState<IUser | null>(null);
 const [loading, setLoading] = useState(true);
  const UserAuth = async (): Promise<void> => {
    try {
      const { data } = await axiosInstance.get("/auth");
      setUser(data.UserData);
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  useEffect(() => {
    UserAuth();
  });

  return (
    <AuthContext.Provider
      value={{
        count,
        setCount,
        axiosInstance,
        setUser,
        User,
        setLoading,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
