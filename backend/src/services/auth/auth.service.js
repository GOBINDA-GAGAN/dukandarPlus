import User from "../../model/user.model.js";
import Shop from "../../model/shop.modal.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt.js";
import RefreshToken from "../../model/refreshToken.model.js";


export const register = async (payload) => {
    const { name, email, password, phone, role } = payload;

    const existUser = await User.findOne({ email });

    if (existUser) {
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        phone,
        role,
    });

    if (user.role === "SHOP_OWNER") {
        const shop = await Shop.create({
            name: `${user.name}'s Shop`,
            ownerId: user._id,
        });

        user.shopId = shop._id;
        await user.save();
    }

    return user;
};

export const login = async (body) => {
    const { email, password } = body;

    try {
        const user = await User.findOne({
            email,
        }).select("+password");

        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user);
        await RefreshToken.create({
            user: user._id,
            token: refreshToken.token,
            expiresAt: refreshToken.expireAt,
        });



        return {
            user: user.omitPassword(),
            accessToken: accessToken.token,
            refreshToken: refreshToken.token,
        };
    } catch (error) {
        console.error("Error while logging in", error);
        throw error;
    }
};

export const getMe = async (user) => {
    console.log(user);

    console.log(user.userId);

    const findUser = await User.findById(user.userId).select("-password");

    if (!findUser) {
        throw new Error("User not found");
    }

    return findUser;
};



export const logout = async ({userId}) => {

    await RefreshToken.deleteMany({
        user: userId,
    });
    return {
        success: true,
        message: "Logout successful.",
    };
};



export const refreshToken = async (payload) => {
    throw new Error("refreshToken() not implemented");
};

export const forgotPassword = async (payload) => {
    throw new Error("forgotPassword() not implemented");
};

export const resetPassword = async (payload) => {
    throw new Error("resetPassword() not implemented");
};

;


export const changePassword = async (user, payload) => {
    throw new Error("changePassword() not implemented");
};