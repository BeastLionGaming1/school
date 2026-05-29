import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);

    console.log(`Server connected to database on: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error Connecting to Database:", error);
  }
}

export default connectDB;