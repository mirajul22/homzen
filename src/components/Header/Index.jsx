import React, { useState } from "react";
import logo from "../../images/logo@2x.png";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Login from "../Login";
import Signup from "../Signup";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [login, setlogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(true);
  };

  const handleLogin = () => {
    setlogin(true);
  };

  const handleClose = () => {
    if (handleLogin) {
      setlogin(false);
    } 

    if(handleSignup){
      setSignup(false);
    }
  };

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex max-sm:flex-col  justify-between max-sm:justify-center py-4 px-10 bg-white w-full fixed z-50">
      <div className="flex justify-between items-center">
        <img
          className="w-[174px] h-[43px] max-sm:w-32 max-sm:h-8 max-sm:items-center"
          src={logo}
          alt=""
        />
        <div className=" sm:hidden">
          {navOpen ? (
            <RxCross2
              className="text-2xl text-gray-500  cursor-pointer max-sm:text-3xl"
              onClick={handleNav}
            />
          ) : (
            <IoReorderThreeOutline
              className="text-2xl text-gray-500  cursor-pointer max-sm:text-3xl"
              onClick={handleNav}
            />
          )}
        </div>
      </div>
      {navOpen ? (
        <ul className="flex max-sm:flex-col max-sm:my-4 gap-10 items-center font-bold">
          <li className="hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/about_us">About Us </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/contact_us">Contact Us</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/our_services">Our Services</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/privacy_policy">Privacy Policy</Link>
          </li>
        </ul>
      ) : (
        ""
      )}
      {navOpen && (
        <div className="font-bold max-sm:text-center">
          <button onClick={handleLogin}>Login</button>
          /<button onClick={handleSignup}>Register</button>
          
        {login ? <Login handleClose={handleClose} /> : ""}
        {signup ? <Signup handleClose={handleClose} /> : ""}


          <button
            type="Submit"
            className="bg-red-500 hover:bg-red-700 text-white pl-3 pr-3 pt-2 pb-2 ml-3"
          >
            Submit Property
          </button>
        </div>
      )}

      <ul className="flex max-sm:hidden gap-6 items-center font-bold">
        <li className="hover:text-red-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/about_us">About Us </Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/contact_us">Contact Us</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/our_services">Our Services</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/privacy_policy">Privacy Policy</Link>
        </li>
      </ul>

      <div className=" flex items-center font-bold max-sm:hidden cursor-pointer">
        <div className="flex">
          <button id="show-login" onClick={handleLogin}>
            Login
          </button>
          /<button onClick={handleSignup}>Register</button>
        </div>
        {login ? <Login handleClose={handleClose} /> : ""}
        {signup ? <Signup handleClose={handleClose} /> : ""}

        <button
          type="Submit"
          className="bg-red-500 hover:bg-red-700 text-white pl-3 pr-3 pt-2 pb-2 ml-3"
        >
          Submit Property
        </button>
      </div>
    </div>
  );
}
