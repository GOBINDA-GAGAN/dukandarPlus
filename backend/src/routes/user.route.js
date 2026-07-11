// src/routes/user/user.route.js

import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = Router();

router.get("/users",authenticate, roleMiddleware("SUPER_ADMIN", "SHOP_OWNER"), userController.getAllUsers);

export default router;