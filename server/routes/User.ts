import express from "express";
import { Auth, SignUp, VerifiedOtp } from "../controller/User";

const  UserRoutes = express.Router()
UserRoutes.post("/Signup",SignUp)
UserRoutes.post("/VerifiedOtp",VerifiedOtp)
UserRoutes.get("/Auth",Auth)
export default UserRoutes