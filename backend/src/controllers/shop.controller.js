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

export const getshopById = async (req, res, next) => {
    try {
        const { shopId } = req.params;
        console.log(shopId);


        const shop = await shopService.getshopById(shopId);
        res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Shops",
            data: shop,
        });
    } catch (error) {
        next(error);
    }
};

export const updateShopById = async (req, res, next) => {
    try {
        const { shopId } = req.params;

        const updateShop = await shopService.updateShopById(shopId,req.body);
        res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Shop updated successfully",
            data: updateShop,
        });
    } catch (error) {
        next(error);
    }
}
export const deleteShopById = async (req, res, next) => {
    try {
        const { shopId } = req.params;

        const updateShop = await shopService.deleteShopById(shopId,req.body);
        res.status(HTTP_STATUS.OK).json({
            success: true,
            message: "Shop delete successfully",
            data: updateShop,
        });
    } catch (error) {
        next(error);
    }
}

