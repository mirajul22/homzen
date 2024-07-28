import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo@2x.png";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-gray-300 pt-5 ">
      <div className=" flex  pb-4 justify-center gap-[800px] items-center font-bold ">
        <img className=" w-[174px] h-[42px]" src={logo} alt="" />
        <div className="flex items-center gap-2">
          <h1>Follow Us:</h1>
          <div className="w-9 h-9 bg-white rounded-full border-2 p-2 text-lg hover:bg-red-500 hover:text-white ">
                <FaFacebook />
              </div>
              <div className="w-9 h-9 bg-white rounded-full border-2 p-2  text-lg hover:bg-red-500 hover:text-white ">
                <FaInstagram />
              </div>
              <div className="w-9 h-9 bg-white rounded-full border-2 p-2  text-lg hover:bg-red-500 hover:text-white ">
                <FaYoutube />
              </div>
              <div className="w-9 h-9 bg-white rounded-full border-2 p-2  text-lg hover:bg-red-500 hover:text-white ">
                <FaTwitter />
              </div>
              <div className="w-9 h-9 bg-white rounded-full border-2 p-2  text-lg hover:bg-red-500 hover:text-white ">
                <FaPinterest />
              </div>
        </div>
      </div>
      <hr />
      {/* second section ---start---- */}
      <div className="flex flex-wrap justify-center py-10 gap-24">
        <div>
            <p>Specializes in providing high-class tours for those <br/> in need. Contact Us</p>
            <p>101 E 129th St, East Chicago, IN 46312, US</p>
            <p>1-333-345-6868</p>
            <p>themesflat@gmail.com</p>
        </div>
        <div>
            <h1 className="  font-bold">Categories</h1>
            <ul className="text-gray-600">
                <li><Link to="/pricing">Pricing Plans</Link></li>
                <li><Link to="/our_services">Our Services</Link></li>
                <li><Link to="/about_us">About Us</Link></li>
                <li><Link to="/contact_us">Contact Us</Link></li> 
            </ul>
        </div>
        <div>
            <h1 className=" font-bold">Our Company</h1>
            <ul className="text-gray-600">
                <li><Link to="/sale">Property For Sale</Link></li>
                <li><Link to="/rent">Property For Rent</Link></li>
                <li><Link to="/buy">Property For Buy</Link></li>
                <li><Link to="/">Our Agents</Link></li> 
            </ul>
        </div>
        <div>
            <h1 className=" font-bold">Newsletter</h1>
            <p className="text-gray-600">Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
            <p className="text-gray-600">Your email address</p>
        </div>
      </div>
      <hr />
      {/* second section -----end---- */}
      {/* Third section -------start----------- */}
      <div className="text-gray-600 flex py-5 justify-center gap-[650px]">
        <p>©2024 Homzen. All Rights Reserved.</p>
        <ul className="flex gap-6">
            <li><Link to="/privacy_policy">Terms Of Services</Link></li>
            <li><Link to="/privacy_policy">Privacy Policy</Link></li>
            <li><Link to="/privacy_policy">Cookie Policy</Link></li>
        </ul>
      </div>
    </div>
  );
}
