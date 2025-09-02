"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hnadledelted = exports.finAllNotes = exports.CreateNotes = void 0;
const Notes_1 = __importDefault(require("../model/Notes"));
const CreateNotes = async (req, res) => {
    const { text } = req.body;
    const users = req.user;
    try {
        await Notes_1.default.create({
            notes: text.text,
            cerateUser: users.id
        });
        res.json({
            success: true,
            message: "Notes Created"
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Notes Created"
        });
    }
};
exports.CreateNotes = CreateNotes;
const finAllNotes = async (req, res) => {
    try {
        const users = req.user;
        if (!!users.id) {
            const data = await Notes_1.default.find({ cerateUser: users.id }).populate("cerateUser");
            res.json({
                success: true,
                message: "Notes Created",
                NotesData: data
            });
            if (!users) {
                res.json({
                    success: false,
                    message: "User Not Autherised"
                });
            }
        }
        else {
            return;
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            suceess: false,
            message: "Notes Created"
        });
    }
};
exports.finAllNotes = finAllNotes;
const Hnadledelted = async (req, res) => {
    try {
        const { id } = req.body;
        await Notes_1.default.findByIdAndDelete(id);
        return res.json({
            success: true,
            message: "Delete SuccessFull"
        });
    }
    catch (error) {
        return res.json({
            success: false,
            message: "Error To Deleted Notes"
        });
    }
};
exports.Hnadledelted = Hnadledelted;
