// src/routes/user/user.route.js

import { Router } from "express";
import * as userController from "../../controllers/user/user.controller.js";

const router = Router();

router.get("/users", userController.getAllUsers);

export default router;