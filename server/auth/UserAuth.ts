import JSONTOKEN  from "jsonwebtoken"
import { IUser } from "../model/User"
const Secret = process.env.JSON_SECRET || "kiran@9090"

export const CerateToken = (user:IUser)=>{
  const payload = {
    id:user._id,
    name:user.name,
    email:user.email,
  }

  const token = JSONTOKEN.sign(payload,Secret)
  return token;
}

export  const ValidUser  = (token:string)=>{
 const paylod = JSONTOKEN.verify(token,Secret)
 return paylod
}