import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();


    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const data = { email, password };
  
        const response = await axios.post("/api/login", data);
        console.log(response);
  
        if (response.data.status === "ok") {
          const authToken = response.data.token;
          
          // Set the token as a cookie with an expiration time (e.g., 1 hour)
          Cookies.set("authToken", authToken, { expires: 1 / 24 }); // 1 hour expiration
          const user = JSON.stringify(response.data.user)
          sessionStorage.setItem("user", user);
          alert(response.data.message);
          router.push("/");
          // Redirect to a protected route or perform other actions upon successful login
        } else {
          alert( response.data.message);
          // Display an error message to the user
        }
      } catch (error) {
        let msg = error;
        console.log(msg);
        // Handle other errors, e.g., network errors
      }
    };

  return (
      <form className="w-full max-w-lg ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              EMAIL
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
              id="grid-email"
              type="email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
              value={email} 
              onChange={(e) =>  {setEmail(e.target.value); //console.log(email);
              }}
              required
              placeholder="xyz@mail.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
              id="grid-password"
              type="password"
              value={password}
              onChange={(e) =>  {setPassword(e.target.value); //console.log(password);
            }}
              required
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
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
        <div className="flex flex-wrap -mx-3 my-8 mb-6">
          <div className="w-full px-3">
            <p className="text-gray-900 text-[12px]">
              By continuing, I confirm that I have read and accept the Terms and
              Conditions. and the Privacy Policy.
            </p>
          </div>
        </div>
      </form>

  );
};

export default Login;
