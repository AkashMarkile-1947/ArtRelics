import React from "react"; // Import React (required for functional components)
import axios from "axios";

const CartItem = ({ item , setCounter}) => {
  const url = `http://localhost:3000/${item.product.productPicture}`;

    // Handle the increment logic
  const handleDecrement = async(item) => {
    const response = await axios.post("/api/cartoperations", {operation: "decrement", item});
    //console.log(response);

    try  {
        if (response.data.status === "ok") {
            //alert("Quantity decreased successfully");
            setCounter(prev => prev + 1);
        } else {
            alert('Error updating quantity');
        }
    } catch (error) {
        alert('Error updating quantity');
    }
  };

  // Handle the increment logic
  const handleIncrement = async(item) => {
    // Implement your logic to increment the quantity of the item
    const response = await axios.post("/api/cartoperations", {operation: "increment", item});
    //console.log(response);
    try  {
        if (response.data.status === "ok") {
            //alert("Quantity Increased successfully");
            setCounter(prev => prev + 1);
        } else {
            alert('Error updating quantity');
        }
    } catch (error) {
        alert('Error updating quantity');
    }
  };

  // Handle the "Buy Now" logic
  const handleBuyNow = (item) => {
    // Implement your logic to handle the "Buy Now" option
    console.log(item)
  };
  let key = 1;
  return (
    <div
      key={++key}
      className="border flex justify-between items-center p-4 rounded-lg bg-white mb-4"
    >
      <div>
        <h2 className="text-2xl font-semibold">{item.product.productName}</h2>
        <img
          src={url}
          alt={item.product.productName}
          className="w-full rounded max-w-[250px] h-auto my-2"
        />
      </div>
      <div className="min-w-[40%] max-w-[40%] h-[100px] flex flex-col items-center justify-between">
        <p className="text-gray-500 text-2xl">
          Price: &#8377; {item.product.productPrice}
        </p>
        <div>
          <div className="flex items-center mt-2">
            <button
              className="px-4 py-1 text-lg bg-gray-200 hover:bg-gray-300"
              onClick={() => handleDecrement(item)}
            >
              -
            </button>
            <span className="px-5 text-lg">{item.quantity}</span>
            <button
              className="px-4 py-1 text-lg bg-gray-200 hover:bg-gray-300"
              onClick={() => handleIncrement(item)}
            >
              +
            </button>
          </div>
          {/* <button
            className="mt-2 px-8 py-2 text-lg rounded bg-red-500 font-semibold text-white hover-bg-red-600"
            onClick={() => handleBuyNow(item)}
          >
            Buy Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
