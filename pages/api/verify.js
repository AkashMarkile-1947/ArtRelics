// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "@/DB/db"
import { verifyToken } from "@/lib/jwtMiddleware";

/*
const handleVerify = async () => {
      try {
        const token = Cookies.get("authToken"); // Retrieve the token from cookies
        const headers = {
          authorization: token,
        };
        const data = { key: "hello" };
        const res = await axios.post('/api/verify', data, { headers });
        
        if (res.status === 200 && res.data.message === 'Token verified') {
          alert("Success");
        } else {
          alert("Verification failed");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Failed");
      }
    };
    
*/

export default async function handler(req, res) {
  try {
    await verifyToken(req, res);
    console.log("Token verified");
    console.log(req.userData);
    
    res.status(200).json({ message: 'Token verified' });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Failed to verify token" });
  }
}