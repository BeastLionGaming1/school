import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

import connectDB from "./lib/db.js";
import authRoutes from "./router/auth.router.js";
import postRoutes from "./router/post.router.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/auth/v1", authRoutes);
app.use("/post", postRoutes);

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to The Server API",
    status_code: 200,
  });
});

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log("Error Starting Server:", error);
  }
}

startServer();