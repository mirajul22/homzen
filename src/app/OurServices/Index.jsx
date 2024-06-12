import React from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import Faqs from "../../components/faqs/Faqs";
import banner from "../../images/banner.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ReviewCart from "../../components/reviewCart/ReviewCart";
import  { CartOurServices }  from "../../components/Cards";

export default function OurServices() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="bg-[#f0eee9] font-bold text-5xl text-center py-32">
          <h1>Our Services </h1>
        </div>
        {/* --------------our services---------------- */}
        <div className="text-center mt-10">
          <p className=" uppercase font-bold text-md text-red-500">our services</p>
          <h1 className=" capitalize font-bold text-3xl m-4 ">what we do?</h1>
        <CartOurServices/>
        </div>
        {/* --------------Review Section ----------------- */}
        <div className="bg-[#f0eee9] py-20">
          <div className="flex justify-between">
            <div>
              <p className="text-red-500 font-semibold">TOP PROPERTISE</p>
              <h1 className="text-3xl font-bold py-4">
                What's People
                <br /> Say's
              </h1>
              <p className="w-[400px] pb-4">
                Our seasoned team excels in real estate with years of successful
                market navigation, offering informed decisions and optimal
                results.
              </p>
              <div className="flex ">
                <button className="bg-red-500 text-white text-3xl p-3 m-3">
                  <IoIosArrowBack />
                </button>
                <button className="hover:bg-red-500 hover:text-white text-3xl p-3 m-3">
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <div className="mx-24">
              <ReviewCart />
            </div>
          </div>
        </div>

        {/* -----------------FAQ ------------------- */}
        <div className="text-center font-bold pt-10 ">
          <h3 className=" text-red-500 ">FAQS</h3>
          <h1 className="text-3xl">Quick Answers To Questions</h1>
          <div>
            <Faqs />
          </div>
        </div>
        {/* ------------------Become Partners=------------------- */}
        <div>
          <div className=" flex items-center font-bold pl-20 bg-[#e1e1e1] my-20 mx-10 rounded-3xl ">
            <div>
              {" "}
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
                className=" translate-x-24 -translate-y-5 scale-110"
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
