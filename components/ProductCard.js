import axios from "axios";

const ProductCard = ({productName, productMaterial, productCategory, productPicture, productPrice, _id
}) => {
    const addToCart = async(productId) => {
        try {
            const userId = JSON.parse(sessionStorage.getItem("user"))._id;
            console.log(userId);
            const response = await axios.post("/api/addToCart", {userId, productId});
            console.log(response);
            if (response.data.status === "ok") {
                alert(response.data.message);
              } else {
                alert("failed", response.data.message);
              }
        } catch (error) {

        }
    }
    const url = `http://localhost:3000/${productPicture}`;
    
    return (
        <div id={_id} className="product-card border w-fit min-w-[250px] border-gray-400 min-h-[720px] max-h-[720px] p-2 m-2 rounded relative ">
           
                <img className="w-full rounded h-auto" src={url} />
            <div className="product-content w-full">
                <h3 className="product-company text-lg font-semibold ml-2 mb-1 break-words">{productName}</h3>
                <p className="product-model ml-2 mb-1 text-md break-words max-w-[300px]">{productMaterial}</p>
                <p className="price text-xl ml-2 mb-1 font-semibold"> &#8377; {productPrice}</p>
                <button className="absolute bottom-4 right-2 add-to-cart font-xl w-[95%] ml-[2.5%] mx-auto border border-gray-400 rounded px-4 py-2 ring-inset" onClick={() => addToCart(_id)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;