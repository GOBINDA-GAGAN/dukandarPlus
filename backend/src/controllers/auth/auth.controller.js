import * as authService from "../../services/auth/auth.service.js";
import HTTP_STATUS from "../../utils/httpStatus.js";

export const register = async (req, res, next) => {
    try {
        const result = await authService.register(req.body);

        return res.status(HTTP_STATUS.CREATED).json({
            success: true,
            message: "User registered successfully.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Login successful.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const getMe = async (req, res, next) => {
    try {
        const user = await authService.getMe(req.user);

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            data: user,
        });
    } catch (error) {
        next(error);
    }
};

export const logout = async (req, res, next) => {
    try {
        await authService.logout(req.user);

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Logout successful.",
        });
    } catch (error) {
        next(error);
    }
}








export const refreshToken = async (req, res, next) => {
    try {
        const result = await authService.refreshToken(req.body);

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Token refreshed successfully.",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

export const forgotPassword = async (req, res, next) => {
    try {
        await authService.forgotPassword(req.body);

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Password reset link sent successfully.",
        });
    } catch (error) {
        next(error);
    }
};

export const resetPassword = async (req, res, next) => {
    try {
        await authService.resetPassword(req.body);

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Password reset successfully.",
        });
    } catch (error) {
        next(error);
    }
};





export const changePassword = async (req, res, next) => {
    try {
        await authService.changePassword(req.user, req.body);

        return res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Password changed successfully.",
        });
    } catch (error) {
        next(error);
    }
};