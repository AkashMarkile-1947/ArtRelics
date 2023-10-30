import connectDB from "@/DB/db";
import jwt from "jsonwebtoken";
import UserDB from "@/DB/models/users";
import bcrypt from "bcrypt";
import {generateToken, verifyToken } from "@/lib/jwtMiddleware";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();

      const { email, password } = req.body;

      // Check if the user with the provided email exists
      const user = await UserDB.findOne({ email });

      if (!user) {
        return res.status(401).json({ status: "failed", message: "User not found" });
      }

      // Check if the provided password is correct
      const passwordMatch = await bcrypt.compare(password, user.password);
      
      if (!passwordMatch) {
        return res.json({ status: "failed", message: "Incorrect password" });
      }

      // Generate a JWT token for the user
      const token = generateToken({ userId: user._id });
     // console.log("hello", token);

      res.json({ status: "ok", message: "Login successful", token, user: user });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ status: "failed", message: "Internal server error" });
    }
  } else {
    res.status(405).end();
  }
}
