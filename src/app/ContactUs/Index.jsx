import React from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";

export default function ContactUs() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="bg-[#f0eee9] font-bold text-5xl text-center py-32">
          <h1>Contact Us </h1>
        </div>
        <div className="my-20 flex">
          <form className="my-20 " action="">
            <h1 className="text-5xl font-bold mx-4 ">Drop Us A Line</h1>
            <p className="text-xl font-bold m-4 text-[#6f6f6f]">
              Feel free to connect with us online channels for updates, news,
              and more.
            </p>
            <div className="flex  flex-wrap font-bold text-xl my-4 w-[80%]">
              <div className="m-4 ">
                <p className="font-bold h-10 ">Full Name: </p>
                <input
                  className=" border-2 mx-4 rounded-lg h-12 "
                  type="text"
                  placeholder=" Name"
                />
              </div>
              <div className="m-4">
                <p className="font-bold h-10 ">Email Address: </p>
                <input
                  className=" border-2 mx-4 rounded-lg h-12 "
                  type="Email"
                  placeholder=" Email"
                />
              </div>
              <div className="m-4">
                <p className="font-bold h-10 ">Phone Numbers: </p>
                <input
                  className=" border-2 mx-4 rounded-lg h-12 "
                  type="text"
                  placeholder=" ex 0123456789"
                />
              </div>
              <div className="m-4">
                <p className="font-bold h-10 ">Subject: </p>
                <input
                  className=" border-2 mx-4 rounded-lg h-12 "
                  type="text"
                  placeholder=" Enter Keyword"
                />
              </div>
              <div className="m-4">
                <p className="font-bold h-10 ">Your Message: </p>
                <input
                  className="border-2 mx-4 rounded-lg w-[730px] h-[200px] "
                  type="text"
                  placeholder=" Message"
                />
              </div>
            </div>
            <button
              className="text-white bg-red-500 py-4 px-6 rounded-md mx-10"
              type="submit"
            >
              Send Message
            </button>
          </form>
          <div className="w-[60%] mr-4 h-[500px] px-4 my-32 bg-[#f4eded] rounded-2xl ">
            <h1 className="text-2xl font-bold m-4">Contact Us</h1>
            <h1 className="text-xl font-bold m-4 ">Address:</h1>
            <p className="text-lg m-4 ">
              101 E 129th St, East Chicago, IN 46312 <br />
              United States
            </p>
            <h1 className="text-xl font-bold m-4 ">Information:</h1>
            <p className="text-lg ml-4 ">1-333-345-6868</p> <p className="text-lg ml-4 ">hi.themesflat@gmail.com</p>
            <h1 className="text-xl font-bold m-4 ">Opentime:</h1>
            <p className="text-lg ml-4 ">Monay - Friday: 08:00 - 20:00</p>
            <p className="text-lg ml-4 ">Saturday - Sunday: 10:00 - 18:00</p>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
