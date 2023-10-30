import productSchema from '@/DB/models/product';
import connectDB from '@/DB/db';
import { verifyToken } from '@/lib/jwtMiddleware';

export default async function handler(req, res) {
    try {
        //await verifyToken();
        await connectDB();
        console.log("hello");

        const products = await productSchema.find();
        if (!products || !products.length) {
            res.status(405).json({status: "failed", message: "failed to fetch products"});
        }
        res.status(200).json({status: "ok", message: "success", data: products});
    } catch (error) {
        res.status(500).json({status: "failed", message: "Internal Server Error"})
    }
}