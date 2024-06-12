import React from "react";
import logo from "../../images/logo@2x.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between p-4 bg-white w-full fixed z-10">
      <img className=" w-[174px] h-[43px]" src={logo} alt="" />
      <ul className="flex  gap-6 items-center font-bold">
        <li className=" hover:text-red-500">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-red-500">
          <Link to="/about_us">About Us </Link>
        </li>
        <li className=" hover:text-red-500">
          <Link to="/contact_us">Contact Us</Link>
        </li>
        <li className=" hover:text-red-500">
          <Link to="/our_services">Our Services</Link>
        </li>
        <li className=" hover:text-red-500">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className=" hover:text-red-500">
          <Link to="/privacy_policy">Privacy Policy</Link>
        </li>
      </ul>
      <div className="font-bold">
        <Link to="/">Login</Link>/<Link to="/">Register</Link>
        <button
          type="Submit"
          className=" bg-red-500 hover:bg-red-700 text-white pl-3 pr-3 pt-2 pb-2 ml-3"
        >
          {" "}
          Submit Property{" "}
        </button>
      </div>
    </div>
  );
}
