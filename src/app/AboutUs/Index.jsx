import React from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import { FaArrowRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./index.css";
import { CartChoose } from "../../components/Cards";
import { ReviewCart2 } from "../../components/reviewCart/ReviewCart";
import { Partners } from "../../components/faqs/Faqs";
import TeamCart from "../../components/teamCart/TeamCart";
import { teamData } from "../../components/teamCart/teamData";
import banner from "../../images/banner.png";
export default function AboutUs() {
  const Team = teamData.map((d) => (
    <TeamCart name={d.name} image={d.image} post={d.post} />
  ));
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="bg-[#f0eee9] font-bold text-5xl text-center py-32">
          <h1>About Us </h1>
        </div>
        {/* --------------section start---------------- */}
        <div className="my-20 mx-10">
          <div className="flex flex-wrap max-sm:text-center justify-between items-center">
            <h1 className="text-5xl w-[350px] font-bold ">Welcome To The Homzen</h1>
            <p className="w-[750px] max-sm:w-full text-lg text-[#6f6f6f]">
              Welcome to Homeya, where we turn houses into homes and dreams into
              reality. At Homeya, we understand that a home is more than just a
              physical space; it's a place where memories are created, families
              grow, and life unfolds.
              <Link className="flex my-4 font-bold items-center hover:underline gap-2 max-sm:justify-center">
                Learn More{" "}
                <span className="text-red-500 hover:translate-x-2 ">
                  <FaArrowRight />
                </span>
              </Link>
            </p>
          </div>
          <div className="backimg my-10 h-[500px] rounded-3xl">
            <div className=" mx-[48%] py-48">
              <Link className="text-8xl  ">
                <span className="text-red-600 ">
                  <FaPlayCircle />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/*  --------------why choose us ------------------ */}
        <div className="flex flex-wrap justify-between items-center my-10 ">
          <div className="m-10 items-center w-[500px]">
            <p className="font-bold uppercase text-red-500 text-lg">
              why choose us
            </p>
            <h1 className=" capitalize font-bold capi text-3xl my-4">
              discover what sets our real <br /> estate expertise apart
            </h1>
            <p>
              At Homeya, our unwavering commitment lies in crafting unparalleled
              real estate journeys. Our seasoned professionals, armed with
              extensive market knowledge, walk alongside you through every phase
              of your property endeavor. We prioritize understanding your unique
              aspirations, tailoring our expertise to match your vision.
            </p>
            <div className=" capitalize flex flex-wrap gap-4 my-5 font-bold text-lg ">
              <h2 className="flex items-center gap-2">
                <IoCheckmarkCircleSharp /> Transparent Partnerships
              </h2>
              <h2 className="flex items-center gap-2">
                <IoCheckmarkCircleSharp /> proven expertise
              </h2>
              <h2 className="flex items-center gap-2">
                <IoCheckmarkCircleSharp /> customized solutions
              </h2>
              <h2 className="flex items-center gap-2">
                <IoCheckmarkCircleSharp /> local area knowledge
              </h2>
            </div>
            <Link to="/contact_us" className="flex items-center underline  font-bold ">
              Contact Us
              <IoIosArrowRoundForward className="text-red-500 hover:translate-x-4 text-xl" />
            </Link>
          </div>
          <p className="mr-20 ">
            <CartChoose />
          </p>
        </div>
        {/* -----------------our testimonial ----------------- */}
        <div>
          <div className="font-bold text-center my-10 ">
            <p className="text-md uppercase text-red-500">our testimonials</p>
            <h1 className="text-3xl capitalize my-4">what's people say's</h1>
          </div>
        </div>
        <ReviewCart2 />
        {/* --------------partners ---------- */}
        <Partners />
        {/* --------------our team ------------ */}
        <p className="font-bold text-center uppercase text-md text-red-500">
          our team
        </p>
        <h1 className="font-bold text-center text-3xl my-4 ">
          Meet Our Agents
        </h1>
        <div className="flex flex-wrap text-center my-10">{Team}</div>
        {/* -----------become partners---------- */}
        <div>
          <div className=" flex flex-wrap items-center font-bold pl-20 bg-[#e1e1e1] my-20 mx-10 rounded-3xl ">
            <div>
              <p className="uppercase text-md text-red-500 py-4">
                become partners
              </p>
              <h1 className=" capitalize text-3xl pb-6 ">
                list your propertise on <br /> homeya, join us now!
              </h1>
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 hover:bg-red-600"
              >
                Become A Hosting
              </button>
            </div>
            <div>
              <img
                className=" translate-x-24 -translate-y-5 scale-110 max-sm:-translate-x-4 max-sm:translate-y-0 "
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
