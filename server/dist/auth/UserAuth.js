"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidUser = exports.CerateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Secret = process.env.JSON_SECRET || "kiran@9090";
const CerateToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
    };
    const token = jsonwebtoken_1.default.sign(payload, Secret);
    return token;
};
exports.CerateToken = CerateToken;
const ValidUser = (token) => {
    const paylod = jsonwebtoken_1.default.verify(token, Secret);
    return paylod;
};
exports.ValidUser = ValidUser;
