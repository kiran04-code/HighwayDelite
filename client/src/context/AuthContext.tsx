import { useEffect, useState, type ReactNode } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
export type IUser  = {
     _id?:string;
    name:string,
    email:string,
    otp?:number,
    DateOfBirth:string
}
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const Backend_Url = import.meta.env.VITE_SERVER_URL;
  console.log(Backend_Url)
  const axiosInstance = axios.create({
    baseURL: Backend_Url,
    withCredentials: true,
  });

  const [count, setCount] = useState<number | null>(null);
  const [ User , setUser] = useState<IUser  | null>(null);
  const UserAuth = async():Promise<void>=>{
    const {data} = await axiosInstance.get("/Auth")
    setUser(data.UserData)
  }
 useEffect(()=>{
    UserAuth()
 },[])
  return (
    <AuthContext.Provider value={{ count, setCount, axiosInstance,setUser,User }}>
      {children}
    </AuthContext.Provider>
  );
};
