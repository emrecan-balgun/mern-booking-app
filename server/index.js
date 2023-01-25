import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

// Mongoose Config
mongoose.set("strictQuery", false);

// Connect to MongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.listen(process.env.PORT, () => {
  connect();
  console.log(`Server running on port ${process.env.PORT}`);
});
