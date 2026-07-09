import jwt from "jsonwebtoken";
import env from "../config/env.js";
import HTTP_STATUS from "../utils/httpStatus.js";



export const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                success: false,
                message: "Access token is required",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token,env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};