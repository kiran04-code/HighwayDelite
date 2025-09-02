"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const monoose_1 = __importDefault(require("./config/monoose"));
const User_1 = __importDefault(require("./routes/User"));
const User_2 = require("./middleware/User");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// All Middleware 
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, User_2.Auth)("UserToken"));
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true, // if you're sending cookies or auth headers
}));
// Mongose Coonection
(0, monoose_1.default)(process.env.MONGODB_URI).then(() => {
    console.log("MONGODB IS Connected");
}).catch((error) => {
    console.log("Error ", error);
});
// Routes 
app.get("/", (req, res) => {
    res.send("Hello from Node + TypeScript!");
});
app.get("/auth", (req, res) => {
    const user = req.user;
    res.json({ user });
});
app.use("/api", User_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
