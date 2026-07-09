import env from "../config/env.js"
import jwt from "jsonwebtoken"

export const generateAccessToken = (user) => {
    const token = jwt.sign(
        {
            userId: user._id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: env.JWT_EXPIRES_IN }
    );

    return {
        token,
        expireAt: Date.now() + 24 * 60 * 60 * 1000,
    };
};
export const generateRefreshToken = (user) => {
    const token = jwt.sign(
        {
            userId: user._id,
            role: user.role,
        },
        env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: env.REFRESH_TOKEN_EXPIRES_IN,
        }
    );

    return {
        token,
        expireAt: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
        ),
    };
};