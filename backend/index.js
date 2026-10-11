import express from "express";
import db from "./db/db.config.js";
import mainRouter from "./src/api/main.routes.js";
import { errorHandler } from "./src/middleware/error-handler.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Parse incoming JSON requests
app.use(express.json());

// Allow frontend requests.
// We'll restrict this to your deployed frontend URL later.
app.use(cors());

app.use("/api", mainRouter);

// Error-handling middleware
app.use(errorHandler);

async function startServer() {
  try {
    const connection = await db.getConnection();
    connection.release();

    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
