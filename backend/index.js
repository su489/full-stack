import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();   // ✅ Pehle app banao

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


  app.use("/books", bookRoutes);
app.use("/api/auth", authRoutes);   // ✅ Sirf ye route use karo

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
