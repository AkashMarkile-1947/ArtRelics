import connectDB from "@/DB/db";
import CartDB from "@/DB/models/cart";

export default async function handler(req, res) {
  try {
    const { userId, productId } = req.body;
    console.log(req.body);
    await connectDB();

    // Check if the cart item exists for the given user and product
    const doesExist = await CartDB.findOne({ userId, productId });

    if (doesExist) {
      // If it exists, update the quantity
      const updatedQuantity = doesExist.quantity + 1;

      // Use updateOne to update the existing record
      await CartDB.updateOne({ userId, productId }, { $set: { quantity: updatedQuantity } });

      res.json({ status: "ok", message: "Quantity updated" });
    } else {
      // If it doesn't exist, create a new cart item
      const response = await CartDB.create({ userId, productId, quantity: 1 });

      res.json({ status: "ok", message: "New item added to cart" });
    }
  } catch (error) {
    res.json({ status: "fail", message: "Internal Server Error" });
  }
}
