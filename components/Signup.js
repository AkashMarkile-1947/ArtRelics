import { useState } from "react";
import axios from 'axios';
import {useRouter} from "next/router";


const Register = ({setToggle, toggle }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = {firstname, lastname, email, password};
      sessionStorage.setItem('register-user', JSON.stringify(data));
      setToggle(true);
      console.log(toggle)
    } catch (error) {
      alert("Try Again", error);
    } 
  }
  
  return (
    <>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-transparent border-gray-400 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-900 focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              pattern="[a-zA-Z]{2,15}"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-400  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-900"
              id="grid-last-name"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              placeholder="Doe"
            />
          </div>
        </div>
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassowrd(e.target.value)}
              required
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              it should have at least 8 characters
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <p className="text-gray-900 text-[12px]">
              By continuing, I confirm that I have read and accept the Terms and
              Conditions. and the Privacy Policy.
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
      </form>
    </>
  );
};

export default Register;
