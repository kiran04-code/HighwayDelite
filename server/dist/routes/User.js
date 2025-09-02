"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../controller/User");
const Notes_1 = require("../controller/Notes");
const UserRoutes = express_1.default.Router();
UserRoutes.post("/Signup", User_1.SignUp);
UserRoutes.post("/VerifiedOtp", User_1.VerifiedOtp);
UserRoutes.get("/Auth", User_1.Auth);
UserRoutes.get("/Logout", User_1.Logout);
UserRoutes.post("/login", User_1.login);
UserRoutes.post("/LoginOtp", User_1.LoginOtp);
UserRoutes.post("/create", Notes_1.CreateNotes);
UserRoutes.get("/finAllNotes", Notes_1.finAllNotes);
UserRoutes.post("/Hnadledelted", Notes_1.Hnadledelted);
exports.default = UserRoutes;
