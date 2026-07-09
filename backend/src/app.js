import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import compression from "compression";


import HTTP_STATUS from "./utils/httpStatus.js";
import routes from "./routes/index.route.js";

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        credentials: true,
    })
);

// Logging
app.use(morgan("dev"));

// Compress responses
app.use(compression());

// Parse JSON
app.use(express.json({ limit: "10mb" }));

// Parse URL Encoded Data
app.use(express.urlencoded({ extended: true }));

// Parse Cookies
app.use(cookieParser());

// Health Check Route
app.get("/api/v1/hello", (req, res) => {
    res.status(HTTP_STATUS.OK).json({
        success: true,
        message: "🚀 Dukandar API is Running",
    });
});

// API Routes

// API Versioning
app.use("/api/v1", routes);
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/products", productRoutes);
// app.use("/api/v1/categories", categoryRoutes);
// app.use("/api/v1/suppliers", supplierRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

export default app;