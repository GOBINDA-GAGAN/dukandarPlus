import Shop from "../model/shop.modal.js";


export const createShop = async (user, payload) => {

    const {
        shopName,
        ownerName,
        mobileNumber,
        address,
        gstNumber,
    } = payload;

    const newShop = await Shop.create({
        shopName: shopName,
        ownerId: user.userId,
        address,
        gstNumber,
    })

    return newShop;
};

export const getAllShop = async () => {

    const allShopList = await Shop.find();

    return allShopList;

}