// src/controllers/user.controller.js

import * as userService from "../services/user.service.js";
import HTTP_STATUS from "../utils/httpStatus.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();

        res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Users fetched successfully.",
            data: users,
        });
    } catch (error) {
        next(error);
    }
};