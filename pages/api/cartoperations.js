import CartDB from "@/DB/models/cart";

export default async function handler(req, res) {
    try {
        const { operation, item } = req.body;

        if (operation === "increment") {
            const updateResult = await CartDB.updateOne(
                { _id: item.cartItemId },
                { $inc: { quantity: 1 } }
            );

            if (updateResult.modifiedCount === 1) {
                return res.json({ status: "ok", message: "Incremented quantity" });
            } else {
                return res.json({ status: "failed", message: "Cart item not found" });
            }
        } else if (operation === "decrement") {
            const cartItem = await CartDB.findOne({ _id: item.cartItemId });

            if (!cartItem) {
                return res.json({ status: "failed", message: "Cart item not found" });
            }

            if (cartItem.quantity <= 1) {
                // If quantity is 1 or less, delete the cart item
                const deleteResult = await CartDB.deleteOne({ _id: item.cartItemId });

                if (deleteResult.deletedCount === 1) {
                    return res.json({ status: "ok", message: "Item removed from cart" });
                } else {
                    return res.json({ status: "failed", message: "Cart item not found" });
                }
            } else {
                const updateResult = await CartDB.updateOne(
                    { _id: item.cartItemId },
                    { $inc: { quantity: -1 } }
                );

                if (updateResult.modifiedCount === 1) {
                    return res.json({ status: "ok", message: "Decremented quantity" });
                } else {
                    return res.json({ status: "failed", message: "Cart item not found" });
                }
            }
        } else {
            return res.json({ status: "failed", message: "Invalid operation" });
        }
    } catch (error) {
        return res.json({ status: "failed", message: "Internal Server Error" });
    }
}
