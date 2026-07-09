import app from "./app.js";
import connectDB from "./config/db.js";
import env from "./config/env.js"



// Connect Database
connectDB();

const PORT = env.PORT;

const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.error("❌ Unhandled Rejection:", err.message);
    server.close(() => {
        process.exit(1);
    });
});

// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
    console.error("❌ Uncaught Exception:", err.message);
    process.exit(1);
});

// Graceful Shutdown
process.on("SIGINT", () => {
    console.log("\n🛑 Server stopped");
    server.close(() => process.exit(0));
});