import { Router } from "express";

import authRoutes from "./auth/auth.route.js";
import userRoutes from "./user/user.route.js";
import roleMiddleware from "../middleware/role.middleware.js";
import { authenticate } from "../middleware/auth.middleware.js";
// import shopRoutes from "./shop.routes.js";
// import productRoutes from "./product.routes.js";
// import categoryRoutes from "./category.routes.js";
// import supplierRoutes from "./supplier.routes.js";
// import notificationRoutes from "./notification.routes.js";
// import dashboardRoutes from "./dashboard.routes.js";
// import reportRoutes from "./report.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/admin", authenticate,  roleMiddleware("SUPER_ADMIN", "SHOP_OWNER"), userRoutes);
// router.use("/admin", userRoutes);
// router.use("/shops", shopRoutes);
// router.use("/products", productRoutes);
// router.use("/categories", categoryRoutes);
// router.use("/suppliers", supplierRoutes);
// router.use("/notifications", notificationRoutes);
// router.use("/dashboard", dashboardRoutes);
// router.use("/reports", reportRoutes);

export default router;