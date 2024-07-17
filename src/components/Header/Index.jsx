import React, { useState } from "react";
import logo from "../../images/logo@2x.png";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex max-sm:flex-col  justify-between p-4 bg-white w-full fixed z-10">
      <div className="flex justify-between items-center">
        <img
          className="w-[174px] h-[43px] max-sm:w-28 max-sm:h-8 max-sm:items-center"
          src={logo}
          alt=""
        />
        <div className=" sm:hidden">
          {navOpen ? (
            <RxCross2
              className="text-2xl text-gray-500  cursor-pointer max-sm:text-lg"
              onClick={handleNav}
            />
          ) : (
            <IoReorderThreeOutline
              className="text-2xl text-gray-500  cursor-pointer max-sm:text-lg"
              onClick={handleNav}
            />
          )}
        </div>
      </div>
      {navOpen ? (
        <ul className="flex max-sm:flex-col max-sm:my-4 gap-6 items-center font-bold">
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
          <Link to="/login">Login</Link>/<Link to="/sign_up">Register</Link>
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

      <div className="font-bold max-sm:hidden">
          <Link to="/login">Login</Link>/<Link to="/sign_up">Register</Link>
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
