import { Router } from "express";
import * as authController from "../../controllers/auth/auth.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();

// Public Routes
router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/profile",authenticate, authController.getMe);

router.post("/logout",authenticate, authController.logout);





router.post("/refresh-token", authController.refreshToken);

router.post("/forgot-password", authController.forgotPassword);

router.post("/reset-password", authController.resetPassword);




router.patch("/change-password", authController.changePassword);

export default router;