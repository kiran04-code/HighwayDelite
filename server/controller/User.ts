import { NextFunction, Request, Response } from "express"
import Users from "../model/User"
import { SendMailToUser } from "../utils/Email"
import { CerateToken } from "../auth/UserAuth"
export const SignUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, name, DateOfBirth } = req.body
        const finUser = await Users.findOne({ email })
        if (!finUser) {
            const Otp = Math.floor(Math.random() * 1000000)
            await SendMailToUser(email, Otp)

            await Users.create({
                email,
                name,
                DateOfBirth,
                otp: Otp
            })
            res.json({
                success: true,
                message: "Otp Send Sucessfull!"
            })
        } else {
            res.json({
                succces: false,
                message: "User is Aready Exist!"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            succes: false,
            message: "Server Errror"
        })
    }
}
export const VerifiedOtp = async (req: Request, res: Response) => {
    try {
        const { from, otp } = req.body
        const email = from.email
        const finduser = await Users.findOne({ email })
        const otps = finduser.otp
        if (otps === otp) {
            finduser.otp = undefined
            const token = CerateToken(finduser)
            res.cookie("UserToken", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none"
            }).json({
                success: true,
                message: "Create Account SucessFull"
            })
        } else {
            res.json({
                success: false,
                message: "Invalid OTP"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: "Server Side Error"
        })

    }
}
export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user
        if (user) {
            const findUsser = await Users.findById(user.id)
            return res.json({
                success: true,
                UserData: findUsser
            })
        } else {
            return next()
        }
    } catch (error) {
        res.json({
            success: false,
            message: "StatusCode 401 User is AuthOtheried"
        })
    }
}


export const Logout = async (req: Request, res: Response) => {
    try {
        return res.clearCookie("UserToken").json({
            success: true,
            message: "Logout successFull!"
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Server Error"
        })
    }
}

// login 

export const login = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        const finUser = await Users.findOne({ email })
        if (!finUser) {
            return res.json({
                success: false,
                message: "User Not Exist"
            })
        }
        const id = finUser._id;
        const Otps = Math.floor(Math.random() * 1000000)
        await SendMailToUser(email, Otps)
        const data = await Users.findByIdAndUpdate(id, { otp: Otps })
        res.json({
            success: true,
            message: "Otp Send SucessFull"
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: "Server Error"
        })
    }
}

export const LoginOtp = async (req: Request, res: Response) => {
    try {
        const { email, otp } = req.body
        const finduser = await Users.findOne({ email })
        const otps = finduser.otp
        if (otps === Number(otp)) {
            finduser.otp = undefined
            const token = CerateToken(finduser)
            res.cookie("UserToken", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none"
            }).json({
                success: true,
                message: "Login SucessFull"
            })
        } else {
            res.json({
                success: false,
                message: "Invalid OTP"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: "Server Side Error"
        })

    }
}