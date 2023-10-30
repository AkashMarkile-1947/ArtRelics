
import OrderDB from '@/DB/models/orderDB';
import CartDB from '@/DB/models/cart';
import connectDB from '@/DB/db';

export default async function handler(req, res) {
    /* try { */
      await connectDB();
      console.log("hello", req.body, "oi bakayaro");
      const { userId, product, addressId, paymentId, total } = req.body;
      const response = await OrderDB.create({ userId, product, addressId, paymentId, total });
        //console.log(response);
      if (!response) {
        return res.json({ status: 'failed', message: "Couldn't save record" });
      }
  
      const deletionResult = await CartDB.deleteMany({ userId });
      console.log(deletionResult);
      if (deletionResult.deletedCount) {
        // Deletion was successful
        return res.json({ status: 'ok', message: 'Sucess' });
      } else {
        // Deletion failed
        return res.json({ status: 'failed', message: 'Failed to delete cart records' });
      }
   /*  } catch (error) { */
   /*    return res.status(500).json({ status: 'failed', message: 'Internal Server Error' }); */
   /*  } */
  }