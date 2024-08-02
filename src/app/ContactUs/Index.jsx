import React, { useEffect } from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Aos from "aos";

export default function ContactUs() {
useEffect(()=>{
  Aos.init({duration:1000})
},[])

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="bg-[#f7f7f7] font-bold text-5xl max-sm:text-3xl max-sm:h-20 text-center py-32">
          <h1>Contact Us </h1>
        </div>
        <div className="my-10 max-sm:py-2 justify-center flex flex-wrap gap-10  ">
          <form data-aos="fade-left" className=" w-[850px] " action="">
            <h1 className="text-4xl max-sm:text-3xl font-bold ">
              Drop Us A Line
            </h1>
            <p className="text-lg max-sm:text-lg max-sm:w-[350px] font-semibold text-[#6f6f6f] py-2">
              Feel free to connect with us online channels for updates, news,
              and more.
            </p>
            <div className="flex flex-wrap  gap-5 font-bold text-lg max-sm:text-md my-4">
              <div className="flex-1">
                <p>Full Name: </p>
                <input
                  className=" mt-2 font-semibold text-lg border-2 px-2 py-3 w-[415px]  focus:outline-none  rounded-lg "
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="flex-1">
                <p>Email Address: </p>
                <input
                  className="mt-2 font-semibold text-lg border-2 w-[415px] rounded-lg px-2 py-3 focus:outline-none "
                  type="Email"
                  placeholder=" Email"
                />
              </div>
              <div className="flex-1">
                <p>Phone Numbers: </p>
                <input
                  className="mt-2 font-semibold text-lg border-2 w-[415px] rounded-lg px-2 py-3 focus:outline-none "
                  type="text"
                  placeholder=" ex 0123456789"
                />
              </div>
              <div className="flex-1">
                <p>Subject: </p>
                <input
                  className="mt-2 font-semibold text-lg border-2 w-[415px] rounded-lg px-2 py-3 focus:outline-none "
                  type="text"
                  placeholder=" Enter Keyword"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg pb-2">Your Message: </p>
              <textarea
                name="message"
                id=""
                className="w-full border-2 p-2 font-semibold focus:outline-none rounded-md h-[100px]"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              className="text-white bg-red-500 py-4 mt-2 px-6 font-semibold rounded-md "
              type="submit"
            >
              Send Message
            </button>
          </form>
          <div data-aos="fade-right" className="w-[400px] shadow-xl   max-sm:m-0 max-sm:w-[350px] px-4  bg-[#f7f7f7] rounded-2xl ">
            <h1 className="text-2xl font-bold m-4">Contact Us</h1>
            <h1 className="text-xl font-bold m-4 ">Address:</h1>
            <p className="text-lg m-4 ">
              101 E 129th St, East Chicago, IN 46312 <br />
              United States
            </p>
            <h1 className="text-xl font-bold m-4 ">Information:</h1>
            <p className="text-lg ml-4 ">1-333-345-6868</p>{" "}
            <p className="text-lg ml-4 ">hi.themesflat@gmail.com</p>
            <h1 className="text-xl font-bold m-4 ">Opentime:</h1>
            <p className="text-lg ml-4 ">Monay - Friday: 08:00 - 20:00</p>
            <p className="text-lg ml-4 ">Saturday - Sunday: 10:00 - 18:00</p>
            <h1 className="text-xl font-bold m-4 ">Follow us:</h1>
            <div className="flex gap-2 ml-4">
              <div className="w-10 h-10 bg-white rounded-lg border-2 p-2 text-xl hover:bg-red-500 hover:text-white ">
                <FaFacebookF />
              </div>
              <div className="w-10 h-10 bg-white rounded-lg border-2 p-2 text-xl hover:bg-red-500 hover:text-white ">
                <FaInstagram />
              </div>
              <div className="w-10 h-10 bg-white rounded-lg border-2 p-2 text-xl hover:bg-red-500 hover:text-white ">
                <FaYoutube />
              </div>
              <div className="w-10 h-10 bg-white rounded-lg border-2 p-2 text-xl hover:bg-red-500 hover:text-white ">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 bg-white rounded-lg border-2 p-2 text-xl hover:bg-red-500 hover:text-white ">
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>
          <div data-aos="fade-up" className="w-[1300px]  mb-10 mx-auto max-sm:w-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.921295095439!2d-87.47479088884864!3d41.65744247908165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811d94dda258cd5%3A0xa4c72b9eb15dd773!2s101%20E%20129th%20St%2C%20East%20Chicago%2C%20IN%2046312%2C%20USA!5e0!3m2!1sen!2sin!4v1722180158363!5m2!1sen!2sin"
              className="w-full h-[500px]"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </main>

      <footer data-aos="fade-up">
        <Footer />
      </footer>
    </div>
  );
}
