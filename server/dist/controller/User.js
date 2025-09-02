"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginOtp = exports.login = exports.Logout = exports.Auth = exports.VerifiedOtp = exports.SignUp = void 0;
const User_1 = __importDefault(require("../model/User"));
const Email_1 = require("../utils/Email");
const UserAuth_1 = require("../auth/UserAuth");
const SignUp = async (req, res) => {
    try {
        const { email, name, DateOfBirth } = req.body;
        const finUser = await User_1.default.findOne({ email });
        if (!finUser) {
            const Otp = Math.floor(Math.random() * 1000000);
            await (0, Email_1.SendMailToUser)(email, Otp);
            await User_1.default.create({
                email,
                name,
                DateOfBirth,
                otp: Otp
            });
            res.json({
                success: true,
                message: "Otp Send Sucessfull!"
            });
        }
        else {
            res.json({
                succces: false,
                message: "User is Aready Exist!"
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            succes: false,
            message: "Server Errror"
        });
    }
};
exports.SignUp = SignUp;
const VerifiedOtp = async (req, res) => {
    try {
        const { from, otp } = req.body;
        const email = from.email;
        const finduser = await User_1.default.findOne({ email });
        const otps = finduser.otp;
        if (otps === otp) {
            finduser.otp = undefined;
            const token = (0, UserAuth_1.CerateToken)(finduser);
            res.cookie("UserToken", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none"
            }).json({
                success: true,
                message: "Create Account SucessFull"
            });
        }
        else {
            res.json({
                success: false,
                message: "Invalid OTP"
            });
        }
    }
    catch (error) {
        res.json({
            success: false,
            message: "Server Side Error"
        });
    }
};
exports.VerifiedOtp = VerifiedOtp;
const Auth = async (req, res, next) => {
    try {
        const user = req.user;
        if (user) {
            const findUsser = await User_1.default.findById(user.id);
            return res.json({
                success: true,
                UserData: findUsser
            });
        }
        else {
            return next();
        }
    }
    catch (error) {
        res.json({
            success: false,
            message: "StatusCode 401 User is AuthOtheried"
        });
    }
};
exports.Auth = Auth;
const Logout = async (req, res) => {
    try {
        return res.clearCookie("UserToken").json({
            success: true,
            message: "Logout successFull!"
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: "Server Error"
        });
    }
};
exports.Logout = Logout;
// login 
const login = async (req, res) => {
    try {
        const { email } = req.body;
        const finUser = await User_1.default.findOne({ email });
        if (!finUser) {
            return res.json({
                success: false,
                message: "User Not Exist"
            });
        }
        const id = finUser._id;
        const Otps = Math.floor(Math.random() * 1000000);
        await (0, Email_1.SendMailToUser)(email, Otps);
        const data = await User_1.default.findByIdAndUpdate(id, { otp: Otps });
        res.json({
            success: true,
            message: "Otp Send SucessFull"
        });
    }
    catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: "Server Error"
        });
    }
};
exports.login = login;
const LoginOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const finduser = await User_1.default.findOne({ email });
        const otps = finduser.otp;
        if (otps === Number(otp)) {
            finduser.otp = undefined;
            const token = (0, UserAuth_1.CerateToken)(finduser);
            res.cookie("UserToken", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none"
            }).json({
                success: true,
                message: "Login SucessFull"
            });
        }
        else {
            res.json({
                success: false,
                message: "Invalid OTP"
            });
        }
    }
    catch (error) {
        res.json({
            success: false,
            message: "Server Side Error"
        });
    }
};
exports.LoginOtp = LoginOtp;
