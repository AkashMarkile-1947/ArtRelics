import connectDB from "@/DB/db";
import UserDB from "@/DB/models/users";
import AddressDB from "@/DB/models/address";

export default async function handler(req, res) {
  try {
    const { addressData, userData } = req.body;
    const { firstname, lastname, email, password } = userData; // Use destructuring

    await connectDB();

    // Check if a user with the same email already exists
    const userExist = await UserDB.findOne({ email });
    if (!userExist) {
        res.json({status: "failed", message: "couldn't add address"})
    }
    const createAddress = await AddressDB.create({...addressData, userId: userExist._id});
    if (!createAddress) {
        res.json({status: "failed", message: "couldn't add address"})
    }

    return res.json({ status: "ok", message: "sucess" });
  } catch (error) {
    return res.json({ status: "failed", message: "Internal Server Error" });
  }
}
