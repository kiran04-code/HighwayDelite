"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const UserAuth_1 = require("../auth/UserAuth");
const Auth = (cookieName) => {
    return (req, res, next) => {
        const token = req.cookies[cookieName];
        if (!token) {
            req.user = null;
            return next();
        }
        try {
            const payload = (0, UserAuth_1.ValidUser)(token);
            req.user = payload;
        }
        catch (error) {
            req.user = null;
        }
        next();
    };
};
exports.Auth = Auth;
