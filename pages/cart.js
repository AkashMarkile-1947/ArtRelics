import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useMemo } from "react";
import Navbar from "@/components/Navbar";
import CartItem from "@/components/CartItem";
import { useRouter } from "next/router";

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = Cookies.get("authToken");
        const headers = {
          authorization: token,
        };
        const userId = JSON.parse(sessionStorage.getItem("user"))._id;
        const response = await axios.post("/api/cart", { userId }, { headers });
        if (response.data.status === "ok") {
          setCartList(response.data.data);
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        alert("Error: Internal Server Error");
      }
    };

    fetchCartItems(); // Call the function to fetch cart items when the component mounts and updates
  }, [counter]);

  const BuyNow = async () => {
    try {
        const userId = JSON.parse(sessionStorage.getItem("user"))._id;
        const response  = await axios.post("/api/buyNow",{userId});
        console.log(response.data);
        if (response.data.status == "ok") {
           const userAddress = response.data.data;
           console.log(cartList.length);
           if (!cartList.length) {
            console.log("hello")
            return;
           }
           const data  = JSON.stringify({userAddress, cartList});
            sessionStorage.setItem("buyingData", data);
            alert("sucess");
            router.push("/prePayment");
        } else {
            //alert(response.data.message);
        }
    } catch (error) {
        alert("Error: Internal Server Error");
    }
  }

  // Use useMemo to memoize the cartItems to improve performance
  const cartItems = useMemo(() => {
    return cartList.map((item, index) => {
      console.log(index);
      return <CartItem item={item} key={index} setCounter={setCounter} />;
    });
  }, [cartList]);

  return (
    <>
    <Navbar />
    <div className="relative w-full overflow-x-hidden max-w-[90%] mx-auto">
      
      <div className="">
        <h3 className="text-4xl  mt-4 mb-2 px-4 w-fit py-2 border-r-4 border-black">
          Cart Items
        </h3>
        {cartItems}
      </div>
      <button className="mt-2 sticky bottom-4 px-8 py-2 text-2xl rounded bg-red-500 font-semibold text-white hover-bg-red-600 w-full"
      onClick={BuyNow}
      >
        Buy Now
      </button>
    </div>
    </>
  );
};

export default Cart;
