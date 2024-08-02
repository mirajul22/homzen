import React, { useEffect } from "react";
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
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  const Team = teamData.map((d) => (
    <TeamCart name={d.name} image={d.image} post={d.post} />
  ));

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="bg-[#f7f7f7] font-bold text-5xl  text-center py-32 max-sm:py-20 max-sm:w-full max-sm:justify-center ">
          <h1>About Us </h1>
        </div>
        {/* --------------section start---------------- */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="my-20 justify-center "
        >
          <div className="flex flex-wrap  max-sm:text-center max-sm:gap-10 justify-center gap-36 items-center">
            <h1 className="text-5xl w-[380px] font-bold ">
              Welcome To The Homzen
            </h1>
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
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="backimg my-10  max-sm:my-2 w-[1250px] mx-auto h-[500px] rounded-3xl max-sm:w-[380px] max-sm:justify-center"
          >
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
        <div className="flex flex-wrap justify-center gap-24 items-center my-10 max-sm:my-2 max-sm:gap-5 ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="m-10 items-center w-[500px] max-sm:w-full max-sm:justify-center"
          >
            <p className="font-bold uppercase text-red-500 text-lg">
              why choose us
            </p>
            <h1 className=" capitalize font-bold text-3xl my-4">
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
            <Link
              to="/contact_us"
              className="flex flex-wrap items-center underline  font-bold "
            >
              Contact Us
              <IoIosArrowRoundForward className="text-red-500 hover:translate-x-4 text-xl" />
            </Link>
          </div>
          <p className="mr-20 max-sm:mr-0 ">
            <CartChoose />
          </p>
        </div>
        {/* -----------------our testimonial ----------------- */}
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-bold text-center my-10 "
          >
            <p className="text-md uppercase text-red-500">our testimonials</p>
            <h1 className="text-3xl capitalize my-4">what's people say's</h1>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000">
          <ReviewCart2 />
        </div>
        {/* --------------partners ---------- */}
        <Partners />
        {/* --------------our team ------------ */}
        <div data-aos="fade-up" data-aos-duration="1000" className="max-sm:mt-10">
          <p className="font-bold text-center uppercase text-md text-red-500 ">
            our team
          </p>
          <h1 className="font-bold text-center text-3xl my-4 ">
            Meet Our Agents
          </h1>
        </div>
        <div className="flex flex-wrap my-2 justify-center gap-10  max-sm:justify-center">
          {Team}
        </div>
        {/* -----------become partners---------- */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-[1250px] max-sm:w-[380px]  mx-auto"
        >
          <div className=" flex flex-wrap items-center font-bold pl-12 max-sm:pl-4 bg-[#e1e1e1] my-20  rounded-3xl ">
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

      <footer data-aos="fade-up" data-aos-duration="1000">
        <Footer />
      </footer>
    </div>
  );
}
