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

export const getshopById = async (shopId) => {

    const existShop = await Shop.findById(shopId);

    if (!existShop) {
        throw new Error("Shop not found");
    }
    return existShop;



}


export const updateShopById = async (shopId, payload) => {

    const updateShop = await Shop.findByIdAndUpdate(shopId, payload, {new: true, runValidators: true});

    if (!updateShop) {
        throw new Error("Shop not found");
    }
    return updateShop;



}
export const  deleteShopById = async (shopId) => {

    const updateShop = await Shop.findByIdAndDelete(shopId);

    if (!updateShop) {
        throw new Error("Shop not found");
    }
    return updateShop;



}
