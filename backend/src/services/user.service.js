

import User from "../model/user.model.js";

export const getAllUsers = async () => {
    const users = await User.find()
        .select("-password")
        .populate("shop");

    return users;
};