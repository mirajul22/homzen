import React from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import { CartSubscription, CartSubscription2 } from "../../components/Cards";
import Faqs from "../../components/faqs/Faqs";




export default function Pricing() {

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
      <div className="bg-[#f0eee9] font-bold text-5xl text-center py-32">
          <h1>Our Pricing </h1>
        </div>
        <div>
        </div>
        <div className="text-center my-10">
          <p className="text-red-500 font-bold text-md">PRICING</p>
          <h1 className="text-3xl my-4 font-bold ">Our Subscriptions</h1>
        </div>
        <div className="flex flex-wrap gap-7 my-20 mx-8 max-sm:my-10">
          <CartSubscription/>
          <CartSubscription/>
          <CartSubscription2/>
          <CartSubscription/>
        </div>
          {/* -----------------FAQ ------------------- */}
          <div className="text-center font-bold pt-10 max-sm:pt-0 ">
          <h3 className=" text-red-500 ">FAQS</h3>
          <h1 className="text-3xl max-sm:text-xl">Quick Answers To Questions</h1>
          <div className="mb-20">
            <Faqs />
          </div>
        </div>

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
