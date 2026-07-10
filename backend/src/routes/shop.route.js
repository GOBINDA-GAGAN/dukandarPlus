import { Router } from "express";


import { createShop, getAllShop } from "../controllers/shop.controller.js";
const router = Router();

router.post("/", createShop);
router.get("/", getAllShop);

export default router;