import express, { Request, Response } from "express";
import dotenv from "dotenv"
import cors from "cors"
import DBConnection from "./config/monoose";
import UserRoutes from "./routes/User";
import { Auth } from "./middleware/User";
import cookieParser from "cookie-parser";


dotenv.config()

const app = express();
// All Middleware 
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())
app.use(Auth("UserToken"))
app.use(
    cors({
        origin: [
            "http://localhost:5173", 
            "https://highwaydelite-1-xdcl.onrender.com"
        ],
        credentials: true, 
    })
);

// Mongose Coonection
DBConnection(process.env.MONGODB_URI).then(() => {
    console.log("MONGODB IS Connected")
}).catch((error) => {
    console.log("Error ", error)
})
// Routes 
app.get("/", (req, res) => {
    res.send("Hello from Node + TypeScript!");
});
app.get("/auth", (req: Request, res: Response) => {
    const user = (req as any).user;
    res.json({ user });
});

app.use("/api", UserRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
