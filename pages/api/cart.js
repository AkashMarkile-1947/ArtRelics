import CartDB from "@/DB/models/cart";
import productSchema from "@/DB/models/product";
import connectDB from "@/DB/db";

export default async function handler(req, res) {
    try {
        const { userId } = req.body;
        await connectDB();

        const cartItems = await CartDB.find({ userId }).exec();

        if (!cartItems || !cartItems.length) {
            return res.json({ status: "Failed", message: "Failed to Fetch Cart Items" });
        }

        const cartItemsWithProducts = await Promise.all(
            cartItems.map(async (item) => {
                const product = await productSchema.findOne({ _id: item.productId });
                if (product) {
                    // Merge cart item and product information
                    return {
                        cartItemId: item._id,
                        userId: item.userId,
                        productId: item.productId,
                        quantity: item.quantity,
                        timestamp: item.timestamp,
                        product: product,
                    };
                }
                return null; // Handle cases where the product is not found
            })
        );

        // Filter out null values (products not found)
        const filteredCartItems = cartItemsWithProducts.filter((item) => item !== null);
            //console.log(filteredCartItems);
        return res.json({ status: "ok", message: "Success", data: filteredCartItems });
    } catch (error) {
        return res.json({ status: "Failed", message: "Internal Server Error" });
    }
}
