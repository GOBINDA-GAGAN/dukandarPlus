import * as shopService from "../services/shop.service.js";


import HTTP_STATUS from "../utils/httpStatus.js";

export const createShop = async (req, res, next) => {
    try {

        const shop = await shopService.createShop(req.user, req.body);
        res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Shop created successfully.",
            data: shop,
        });
    } catch (error) {
        next(error);
    }
};
export const getAllShop = async (req, res, next) => {
    try {

        const AllShops = await shopService.getAllShop();
        res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "All Shops List",
            data: AllShops,
        });
    } catch (error) {
        next(error);
    }
};


