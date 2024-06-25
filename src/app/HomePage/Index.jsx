import React, { useState } from "react";
import { PiFaders } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { FaHandHoldingHand } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import { PiBathtubThin } from "react-icons/pi";
import { PiBedLight } from "react-icons/pi";
import { CiRuler } from "react-icons/ci";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";
import { Link } from "react-router-dom";
import "./index.css";
import Buttons, { Button2 } from "../../components/Buttons";
import Cards, { Cards2, Cards3 } from "../../components/Cards";
import house1 from "../../images/house-1.jpg";
import ReviewCart from "../../components/reviewCart/ReviewCart";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamCart from "../../components/teamCart/TeamCart";
import { responsive, teamData } from "../../components/teamCart/teamData";

export default function HomePage() {
  const [counter, setCounter] = useState(false);
  const [showButton] = useState(true);

 

  //------------------------  our team section -------------------------

  const Team = teamData.map((d) => (
    <TeamCart name={d.name} image={d.image} post={d.post} />
  ));
  return (
    <div>
      <header>
          <Header />
      </header>
      <hero>
        <div className="heroimg">
          <div className=" text-center pt-[200px] px-10 text-white ">
            <div className="h-[174px] font-bold text-7xl max-sm:text-4xl max-sm:h-[100px] max-sm:flex-col flex gap-2 justify-center">
              <h1>Find Your</h1>
              <section class="animation">
                <div>
                  <div>Real Estate</div>
                </div>
                <div>
                  <div>Dream Home</div>
                </div>
                <div>
                  <div>Perfect Home</div>
                </div>
              </section>
            </div>
            <div>
              <p>
                We are a real estate agency that will help you find the best
                residence you <br /> dream of, let’s discuss for your dream
                house?
              </p>
            </div>
            <div className="font-bold mt-10 ">
              <button
                className="p-4 rounded-md mr-1 bg-white text-black bg-[hsla(0,0%,100%,.1)] "
                type="text"
              >
                FOR RENT
              </button>
              <button
                className="p-4 rounded-md bg-hsla(0,0%,100%,.1) hover:bg-white hover:text-black "
                type="text"
              >
                FOR SALE
              </button>
            </div>
            {/* find propertise section  -----start---------- */}
            <div className="flex max-sm:flex-col max-sm:h-52 font-semibold w-full rounded-lg bg-white justify-between text-black m-[-4px] h-20 p-4 text-left">
              <div>
                <h1>Keyword</h1>
                <input type="text" placeholder="Search Keyword." />
              </div>
              <div>
                <h1>Location</h1>
                <input type="text" placeholder="Search Location" />
              </div>
              <div>
                <h1>Type</h1>
                <select>
                  <option value="true">All</option>
                  <option value="villa">Villa</option>
                  <option value="studio">Studio</option>
                  <option value="office">Office</option>
                  <option value="house">House</option>
                </select>
              </div>
              <div>
                <Link>
                  <span>
                    <PiFaders />
                  </span>
                  <span>Advanced</span>
                </Link>
              </div>
              <div className=" max-sm:my-4 max-sm:text-center max-sm:rounded-lg  p-3 font-bold text-white bg-red-500 hover:bg-red-700 ">
                <button>Find Propertise</button>
              </div>
            </div>
          </div>
        </div>
      </hero>

      <main>
        <div className="relative text-center font-bold mb-10 mt-20 ">
          <p className="text-1xl text-red-500">FEATURED PROPERTIES</p>
          <h1 className="text-3xl ">Recommended For You</h1>
        </div>
        <div className="flex max-sm:ml-[150px] max-sm:flex-col justify-center gap-4 mb-5 ">
          {showButton ? (
            <Button2 />
          ) : (
            <Buttons />
          )
         }
         
        </div>
        <div className="flex flex-wrap gap-8 p-8">
          <Cards />
        </div>
        <div className="text-center mb-20">
          <button className="bg-red-500 text-white font-bold p-4 w-[200px] hover:bg-red-700 ">
            View All Properties
          </button>
        </div>
        {/* --------------location section ------------------ */}
        <div className=" text-center mb-10 pt-20 pb-10 bg-[#f0eee9]  ">
          <p className=" text-red-500 font-semibold  ">EXPLORE CITIES</p>
          <h1 className="font-bold text-3xl">Our Location For You</h1>
          <div className="flex flex-wrap gap-8 m-10">
            <Cards2 />
            <Cards2 />
            <Cards2 />
          </div>
        </div>
        {/* ---------our services------- */}
        <div className="pl-4 pr-4">
          <div className="text-red-500 font-semibold p-4 pb-0">
            OUR SERVICES
          </div>
          <div className="flex justify-between items-center p-4 pt-2">
            <h1 className="text-3xl font-bold">What We Do?</h1>
            <Link className="flex items-center gap-2 underline font-semibold  ">
              View All Services{" "}
              <span className="text-red-500">
                <FaArrowRight />
              </span>{" "}
            </Link>
          </div>
          <div className="flex flex-wrap max-sm:text-center justify-between mb-10">
            <div>
              <p className="text-6xl px-20 py-5 max-sm:px-36">
                <span>
                  <FcHome />
                </span>
              </p>
              <h1 className="text-2xl font-bold p-2">Buy A New Home</h1>
              <p className="p-2">
                Discover your dream home effortlessly. Explore
                <br /> diverse properties and expert guidance for a<br />{" "}
                seamless buying experience.
              </p>
              <Link className="font-semibold flex gap-3 items-center  max-sm:justify-center p-2">
                Learn More{" "}
                <span className="text-red-500">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
            <div>
              <p className="text-6xl px-20 py-5 max-sm:px-36">
          
                <span>
                  <FcHome />
                </span>
              </p>
              <h1 className="text-2xl font-bold p-2">Rent A Home</h1>
              <p className="p-2">
                Discover your perfect rental effortlessly. Explore a<br />{" "}
                diverse variety of listings tailored precisely to suit
                <br /> your unique lifestyle needs.
              </p>
              <Link className="font-semibold flex gap-3 max-sm:justify-center items-center p-2">
                Learn More{" "}
                <span className="text-red-500">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
            <div>
              <p className="text-6xl px-20 py-5 max-sm:px-36">
                {" "}
                <span>
                  <FcHome />
                </span>
              </p>
              <h1 className="text-2xl font-bold p-2">Sell A Home</h1>
              <p className="p-2">
                Sell confidently with expert guidance and effective
                <br /> strategies, showcasing your property's best features
                <br /> for a successful sale.
              </p>
              <Link className="font-semibold flex gap-3 items-center p-2  max-sm:justify-center">
                Learn More{" "}
                <span className="text-red-500">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          {/* -------------Next line-----------  */}
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            <div className="flex flex-wrap max-sm:justify-center justify-between pr-20 max-sm:pr-0 py-10 max-sm:pb-5">
              <div className="font-bold flex items-start py-10 max-sm:py-1 gap-4">
                {counter && (
                  <CountUp start={0} end={85}>
                    {({ countUpRef }) => (
                      <div>
                        <span
                          ref={countUpRef}
                          className="numbering  text-6xl text-red-500"
                        ></span>
                      </div>
                    )}
                  </CountUp>
                )}

                <p className="text-2xl ">
                  SATISFIED
                  <br /> CLIENTS
                </p>
              </div>
              {/* second */}
              <div className="font-bold flex items-start py-10 max-sm:py-1 gap-4">
                {counter && (
                  <CountUp start={0} end={112}>
                    {({ countUpRef }) => (
                      <div>
                        <span
                          ref={countUpRef}
                          className="text-6xl text-red-500"
                        ></span>
                      </div>
                    )}
                  </CountUp>
                )}

                <p className="text-2xl ">
                  AWARD
                  <br /> RECIEVED
                </p>
              </div>
              {/* third */}
              <div className="font-bold flex items-start py-10 max-sm:py-1 gap-4">
                {counter && (
                  <CountUp start={0} end={32}>
                    {({ countUpRef }) => (
                      <div>
                        <span
                          ref={countUpRef}
                          className="text-6xl text-red-500"
                        ></span>
                      </div>
                    )}
                  </CountUp>
                )}

                <p className="text-2xl ">
                  SUCCESSFUL
                  <br /> TRANSACTIONS
                </p>
              </div>
              {/* fourth */}
              <div className="font-bold flex items-start py-10 max-sm:py-2 gap-4">
                {counter && (
                  <CountUp start={0} end={66}>
                    {({ countUpRef }) => (
                      <div>
                        <span
                          ref={countUpRef}
                          className="text-6xl text-red-500"
                        ></span>
                      </div>
                    )}
                  </CountUp>
                )}

                <p className="text-2xl ">
                  MONTHLY
                  <br /> TRAFFIC
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
        {/* -----------our benefit section--------------- */}
        <div className="bg-[#f0eee9] py-20">
          <div className="text-center">
            <p className="font-semibold text-red-500 ">OUR BENEFIT</p>
            <p className="font-bold text-3xl ">Why Choose Homeya</p>
          </div>
          <div className="flex flex-wrap justify-between p-10">
            <div className="text-center w-[400px]">
              <p className="pl-32 m-5 max-sm:pl-24">
                <span className=" text-8xl ">
                  <FaAward className=" cursor-pointer  " />
                </span>
              </p>
              <h1 className="font-bold text-2xl p-1 ">Proven Expertise</h1>
              <p>
                Our seasoned team excels in real estate with years of successful
                market navigation, offering informed decisions and optimal
                results.
              </p>
            </div>
            <div className="text-center w-[400px]">
              <p className="pl-32 m-5 max-sm:pl-24">
                <span className=" text-8xl ">
                  <LiaPencilRulerSolid />
                </span>
              </p>
              <h1 className="font-bold text-2xl p-1 ">Customized Solutions</h1>
              <p>
                We pride ourselves on crafting personalized strategies to match
                your unique goals, ensuring a seamless real estate journey.
              </p>
            </div>
            <div className="text-center w-[400px]">
              <p className="pl-32 m-5 max-sm:pl-24">
                <span className=" text-8xl ">
                  <FaHandHoldingHand />
                </span>
              </p>
              <h1 className="font-bold text-2xl p-1 ">
                Transparent Partnerships
              </h1>
              <p>
                Transparency is key in our client relationships. We prioritize
                clear communication and ethical practices, fostering trust and
                reliability throughout.
              </p>
            </div>
          </div>
        </div>
        {/* -------------------Top properties section------------------ */}
        <div className="px-5 my-20 max-sm:hidden ">
          <div className="text-left  ">
            <p className=" uppercase font-semibold text-red-500 py-2 ">
              top propertises
            </p>
            <p className=" capitalize font-bold text-3xl flex justify-between">
              best property value
              <span className="text-lg">
                <Button2 />
              </span>
            </p>
          </div>
          <div className="flex flex-wrap max-sm:mx-4 justify-between mx-20 ">
            <div className="h-[500px] mt-10 my-4 hover:overflow-hidden shadow-lg  border-2 w-[500px] rounded-2xl">
              <div className=" hover:scale-105 ">
                <img className="h-full w-[500px] rounded-t-2xl " src={house1} alt="" />
              </div>
              <h1 className="font-bold text-xl px-4 py-2">
                rancho vista verde, santa barbara
              </h1>
              <p className="font-semibold px-4 pb-2">
                145 Brooklyn Ave, Califonia, New York
              </p>
              <p className="font-semibold px-4 pb-2">
                "I truly appreciate the professionalism and in-depth...
              </p>
              <ul className="flex justify-between mr-8 mt-2 text-2xl ">
                <li className="flex gap-4 px-4">
                  <PiBedLight />
                  <span className=" text-base font-bold"> 4 </span>
                </li>
                <li className="flex gap-4">
                  <PiBathtubThin />
                  <span className=" text-base font-bold"> 2 </span>
                </li>
                <li className="flex gap-4">
                  <CiRuler />
                  <span className=" text-base font-bold">600 sqFT</span>
                </li>
              </ul>
            </div>
            <div className=" mt-10">
              <p className="mb-6">
                <Cards3 />
              </p>
              <p>
                <Cards3 />
              </p>
            </div>
          </div>
        </div>
        {/* --------------review section---------------------- */}
        <div className="bg-[#f0eee9] py-20">
          <div className="flex flex-wrap justify-between">
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
            <div className=" mx-22 max-sm:mx-4">
              <ReviewCart />
            </div>
          </div>
        </div>
        {/* -----------------our team section---------------- */}

        <div className="py-20 text-center">
          <p className="text-red-500 font-semibold">OUR TEAM</p>
          <h1 className="text-3xl font-bold mb-10">Meet Our Agents</h1>
          {/* <div className="flex gap-4 mx-4 my-10"> */}
          <Carousel responsive={responsive}>{Team}</Carousel>;
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
