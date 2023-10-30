import AddressDB from "@/DB/models/address";
import UserDB from "@/DB/models/users";
import connectDB from "@/DB/db";

export default async function handler(req, res) {
  try {
    const { email } = req.body;
    await connectDB();
    const userExist = await UserDB.findOne({ email });
    if (!userExist) {
      return res.json({ status: "failed", message: "couldn't find address" });
    }
    const userAddress =await AddressDB.find({userId: userExist._id});
    if (!userAddress) {
        res.json({ status: "failed", message: "couldn't find address"});
    }
    return res.json({status: "ok", message: "sucess",  userAddress: userAddress });
  } catch (error) {
    return res.json({status: "failed", message: "Internal Server Error"})
  }
}
