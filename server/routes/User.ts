import express from "express";
import { Auth, login, LoginOtp, Logout, SignUp, VerifiedOtp } from "../controller/User";
import { CreateNotes, finAllNotes, Hnadledelted } from "../controller/Notes";

const  UserRoutes = express.Router()
UserRoutes.post("/Signup",SignUp)
UserRoutes.post("/VerifiedOtp",VerifiedOtp)
UserRoutes.get("/Auth",Auth)
UserRoutes.get("/Logout",Logout)
UserRoutes.post("/login",login)
UserRoutes.post("/LoginOtp",LoginOtp)
UserRoutes.post("/create",CreateNotes)
UserRoutes.get("/finAllNotes",finAllNotes)
UserRoutes.post("/Hnadledelted",Hnadledelted)
export default UserRoutes