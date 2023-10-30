import { useState } from 'react';
import Login from '@/components/Login';
import Footer from '@/components/Footer';
import Register from '@/components/Signup';
import Navbar from '@/components/Navbar';
import AddAddressForm from '@/components/Address';

const MyAccount = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const [toggle, setToggle] = useState(false);

  const toggleAuth = (click) => {
    if (click === "login" && isLogin === "Register") {
      setIsLogin("Login");
    }
    if (click === "register" && isLogin === "Login") {
      setIsLogin("Register");
    }
  };

  return (
    <main className="container">
      <Navbar />
      <div className="">
        <h1 className="text-5xl w-[80%] mx-auto font-semibold">My Account</h1>
         {toggle ? <AddAddressForm signup="true" setCounter=" "/> :
         <AuthSection toggleAuth={toggleAuth} isLogin={isLogin} setToggle={setToggle} toggle={toggle} />}
      </div>
      <Footer />
    </main>
  );
};

const AuthSection = ({ toggleAuth, isLogin, setToggle, toggle }) => {

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="space-x-4">
        <button
          className={` py-2 px-5  text-xl outline-none font-normal border-b-2 ${
            isLogin === "Login" ? 'border-gray-900 font-bold' : 'font-normal'
          }`}
          onClick={() => toggleAuth("login")}
        >
          Login
        </button>
        <button
          className={` font-bold py-2 px-7  text-xl font-normal  outline-none border-b-2 ${
            isLogin === "Register" ? 'border-gray-900 font-bold' : 'font-normal'
          }`}
          onClick={() => toggleAuth("register")}
        >
          Register
        </button>
      </div>
      
    </div>
    <div className='flex h-screen-minus-200px justify-center items-center'>
    {isLogin === "Login" ? <Login /> : <Register setToggle={setToggle} toggle={toggle} />}
    </div>
    </>
  );
};

export default MyAccount;
