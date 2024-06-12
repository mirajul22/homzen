import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo@2x.png";

export default function Footer() {
  return (
    <div className=" bg-gray-400 pt-5 ">
      <div className=" flex text-white pb-10  justify-between m-4 items-center font-bold border-b-2 ">
        <img className=" w-[174px] h-[42px]" src={logo} alt="" />
        <div>
          <h1>Follow Us:</h1>
        </div>
      </div>
      {/* second section ---start---- */}
      <div className="flex justify-between py-10 px-4">
        <div>
            <p>Specializes in providing high-class tours for those <br/> in need. Contact Us</p>
            <p>101 E 129th St, East Chicago, IN 46312, US</p>
            <p>1-333-345-6868</p>
            <p>themesflat@gmail.com</p>
        </div>
        <div>
            <h1 className=" text-white font-bold">Categories</h1>
            <ul className="text-[#6f6f6f]">
                <li><Link>Pricing Plans</Link></li>
                <li><Link>Our Services</Link></li>
                <li><Link>About Us</Link></li>
                <li><Link>Contact Us</Link></li> 
            </ul>
        </div>
        <div>
            <h1 className=" text-white font-bold">Our Company</h1>
            <ul className="text-[#6f6f6f]">
                <li><Link>Property For Sale</Link></li>
                <li><Link>Property For Rent</Link></li>
                <li><Link>Property For Buy</Link></li>
                <li><Link>Our Agents</Link></li> 
            </ul>
        </div>
        <div>
            <h1 className=" text-white font-bold">Newsletter</h1>
            <p className="text-[#6f6f6f]">Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
            <p className="text-[#6f6f6f]">Your email address</p>
        </div>
      </div>
      {/* second section -----end---- */}
      {/* Third section -------start----------- */}
      <div className="text-[#6f6f6f] flex mx-4 py-5 justify-between border-t-2">
        <p>©2024 Homzen. All Rights Reserved.</p>
        <ul className="flex gap-6">
            <li><Link>Terms Of Services</Link></li>
            <li><Link>Privacy Policy</Link></li>
            <li><Link>Cookie Policy</Link></li>
        </ul>
      </div>
    </div>
  );
}
