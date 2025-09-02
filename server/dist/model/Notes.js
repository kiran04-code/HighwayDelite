"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Nootesscehma = new mongoose_1.default.Schema({
    notes: {
        type: String,
        required: true
    },
    cerateUser: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        require: true
    }
});
const Notes = mongoose_1.default.models.Nootes || mongoose_1.default.model("Noote", Nootesscehma);
exports.default = Notes;
