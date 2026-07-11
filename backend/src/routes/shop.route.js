import { Router } from "express";


import { createShop, deleteShopById, getAllShop, getshopById, updateShopById } from "../controllers/shop.controller.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";
const router = Router();

router.post("/", authenticate, roleMiddleware("SUPER_ADMIN", "SHOP_OWNER"), createShop);
router.get("/", authenticate, roleMiddleware("SUPER_ADMIN", "SHOP_OWNER"), getAllShop);
router.get("/:shopId", authenticate, roleMiddleware("SUPER_ADMIN", "SHOP_OWNER"), getshopById);
router.patch("/:shopId", authenticate, roleMiddleware("SUPER_ADMIN", "SHOP_OWNER"), updateShopById);
router.delete("/:shopId", authenticate, roleMiddleware("SHOP_OWNER"), deleteShopById);

export default router;