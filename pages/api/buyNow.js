import AddressDB from "@/DB/models/address";
import connectDB from "@/DB/db";

export default async function handler(req, res) {
   
    try {
       await connectDB();
        const {userId} = req.body;
       
        const response  = await  AddressDB.find({userId});
        if (!response) {
            res.json({status: "failed", message: "couldn't find any saved address"})
        } 
        //console.log(response);
       return res.json({status: "ok", message: "sucesss", data: response})
    } catch (error) {
        return res.json({ status: "Failed", message: "Internal Server Error" });
    }
}