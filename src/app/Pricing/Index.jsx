import React, { useEffect } from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import SubscriptionCart from "../../components/SubscriptionCart"
import Faqs from "../../components/faqs/Faqs";
import Aos from "aos";

export default function Pricing() {
useEffect(()=>{
  Aos.init({duration:1000})
},[])
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
      <div  className="bg-[#f7f7f7] font-bold text-5xl text-center py-32 max-sm:h-20 max-sm:text-3xl">
          <h1>Our Pricing </h1>
        </div>
  
        <div data-aos="fade-up" className="text-center my-10">
          <p className="text-red-500 font-bold text-md">PRICING</p>
          <h1 className="text-3xl my-4 font-bold ">Our Subscriptions</h1>
        </div>
        
        <div>
          <SubscriptionCart />
       
        </div>
          {/* -----------------FAQ ------------------- */}
          <div data-aos="fade-up" className="text-center font-bold pt-10 max-sm:pt-0 ">
          <h3 className=" text-red-500 ">FAQS</h3>
          <h1 className="text-3xl max-sm:text-xl">Quick Answers To Questions</h1>
          <div className="mb-20 ">
            <Faqs />
          </div>
        </div>

      </main>

      <footer data-aos="fade-up">
        <Footer />
      </footer>
    </div>
  );
}
