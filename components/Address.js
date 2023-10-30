import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AddAddressForm = ({signup, setCounter}) => {
  // State to store form data
  const [region, setRegion] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const router = useRouter();


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await JSON.parse(sessionStorage.getItem("register-user")) || await JSON.parse(sessionStorage.getItem("user")) ;

    const addressData = {addressLine1, addressLine2 ,city, postalCode, region, country};

    // Use sessionStorage.getItem to retrieve data from sessionStorage

    try {
      let response;
      if (signup === "true") {
      response = await axios.post('api/signup', { addressData, userData });
      } else {
        response = await axios.post('api/addAddress', { addressData, userData });
      }
      // Check for a successful response (status code 200-299)
      if (response.data.status === "ok") {
        if (signup === "true") {
        alert("success", response.data.message);
        sessionStorage.setItem('token', response.data.token)
        router.push('/');
        } else {
          alert("success", response.data.message);
          setCounter((prev) => prev + 1);
        }
      } else {
        console.error("Signup failed", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error); // Use console.error for error messages
    }
  };

  return (
    <div className="flex justify-center items-start w-full h-screen-minus-200px">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Address Line 1
            </label>
            <input
              className="appearance-none block w-full bg-transparent border-gray-400 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-900 focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="HOUSE / FLAT / BLOCK NO."
              pattern="[a-zA-Z]{2,15}"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Address Line 2
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
              id="grid-last-name"
              type="text"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              required
              placeholder="APARTMENT/ ROAD / AREA"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
            >
              <option className="py-2 text-lg hov-color">United States</option>
              <option className="py-2 text-lg hov-color">Canada</option>
              <option className="py-2 text-lg hov-color">India</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-around -mx-3 mb-6">
          <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
            <label
              htmlFor="city"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              City
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                autoComplete="address-level2"
                className="appearance-none block w-full bg-transparent border-gray-400 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-900 focus:outline-none focus:bg-white"
              />
            </div>
          </div>

          <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
            <label
              htmlFor="region"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                autoComplete="address-level1"
                className="appearance-none block w-full bg-transparent border-gray-400 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-900 focus:outline-none focus:bg-white"
              />
            </div>
          </div>

          <div className="w-full md:w-4/12 px-3 mb-6 md:mb-0">
            <label
              htmlFor="postal-code"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                autoComplete="postal-code"
                className="appearance-none block w-full bg-transparent border-gray-400 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-900 focus:outline-none focus:bg-white"
              />
            </div>
          </div>
        </div>
        <button
          className="w-full hover:bg-black-700 text-white font-bold py-3 px-4 rounded bg-primary"
          type="submit"
          pattern="[A-Za-z\d@$!%*?&]{8,16}"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;
