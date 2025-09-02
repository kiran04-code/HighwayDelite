"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    otp: {
        type: Number,
    },
    DateOfBirth: {
        type: String,
        require: true
    },
});
const Users = mongoose_1.default.models.Userss || mongoose_1.default.model("MyUser", UserSchema);
exports.default = Users;
