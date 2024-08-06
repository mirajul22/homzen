import React, {  useEffect, useState } from "react";
import { PiFaders } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
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
import Buttons from "../../components/Buttons";
import Cards, { Cards3 } from "../../components/Cards";
import house1 from "../../images/house-1.jpg";
import ReviewCart from "../../components/reviewCart/ReviewCart";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import TeamCart from "../../components/teamCart/TeamCart";
import { teamData } from "../../components/teamCart/teamData";
import { IoLocationOutline } from "react-icons/io5";
import user from "../../images/agent-1.jpg";
import homeRent from "../../images/rent.png";
import homeBuy from "../../images/buy (1).png";
import homeSale from "../../images/for-sale.png";
import { useDispatch,useSelector } from "react-redux";
import { fetchProduct } from "../../store/productSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [counter, setCounter] = useState(false);
  const [showBtn, setShowBtn] = useState({
    0: true,
    1: false,
  });

  useEffect(()=> {
    dispatch(fetchProduct());
  },[])

  console.log(state)

  const dataBtn = [
    {
      name: "FOR RENT",
    },
    {
      name: "FOR SALE",
    },
  ];


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
        <div className="heroimg max-sm:justify-center ">
          <div className=" text-center pt-[300px] max-sm:pt-[150px] px-10 text-white ">
            <div className="flex flex-wrap h-[174px] font-bold text-7xl max-sm:text-4xl max-sm:h-[100px] gap-2 justify-center">
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
              <p className="text-xl max-sm:pt-6  font-semibold">
                We are a real estate agency that will help you find the best
                residence you <br /> dream of, let’s discuss for your dream
                house?
              </p>
            </div>
            <div className="flex font-bold gap-4 justify-center mt-10 ">
              {dataBtn.map((d, i) => {
                return (
                  <button
                    onClick={() => {
                      setShowBtn({
                        [i]: !showBtn[i],
                      });
                    }}
                    className={
                      showBtn[i]
                        ? "p-5 text-lg rounded-md mr-1 bg-white text-black "
                        : "p-5 text-lg rounded-md mr-1  text-white bg-[hsla(0,0%,100%,.1)] "
                    }
                  >
                    {d.name}
                  </button>
                );
              })}
            </div>
            {/* find propertise section  -----start---------- */}
            <form className="flex flex-wrap max-sm:h-[300px] font-semibold w-[90%]   rounded-lg bg-white justify-between mx-[5%] text-black m-[-4px] h-24  text-left">
              <div className="flex flex-1 max-sm:flex-wrap gap-4 w-full py-4 items-center ">
                <div className="border-r-2  w-[29%] max-sm:w-full px-2">
                  <h1>Keyword</h1>
                  <input
                    type="keyword"
                    placeholder="Search Keyword."
                    required
                    className=" focus:outline-none max-sm:w-full"
                  />
                </div>
                <div className="border-r-2  w-[29%] max-sm:w-full px-2">
                  <h1>Location</h1>
                  <input
                    type="search"
                    placeholder="Search Location"
                    className=" focus:outline-none max-sm:w-full"
                  />
                </div>
                <div className="border-r-2  w-[29%] max-sm:w-full px-2">
                  <h1>Type</h1>
                  <select className="w-full focus:outline-none rounded-md">
                    <option value="true">All</option>
                    <option value="villa">Villa</option>
                    <option value="studio">Studio</option>
                    <option value="office">Office</option>
                    <option value="house">House</option>
                  </select>
                </div>
                <div className="flex-1 text-center max-sm:w-full  max-sm:flex">
                  <div className="text-2xl px-8 max-sm:pt-2 max-sm:w-10 ">
                    <PiFaders />
                  </div>
                  Advanced
                </div>
              </div>
              <div className=" max-sm:my-4 max-sm:w-full max-sm:py-3 max-sm:text-center text-xl max-sm:rounded-lg py-8 rounded-r-lg px-5 font-bold text-white bg-red-500 hover:bg-red-700 ">
                <button>Find Propertise</button>
              </div>
            </form>
          </div>
        </div>
      </hero>

      <main>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="relative w-full text-center font-bold mb-10 mt-20 "
        >
          <p className="text-1xl text-red-500">FEATURED PROPERTIES</p>
          <h1 className="text-3xl ">Recommended For You</h1>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex justify-center gap-4 mb-5 "
        >
          <Buttons />
        </div>
        <div className="flex flex-wrap  p-8">
          <Cards />
        </div>
        <div className="text-center mb-20">
          <button className="bg-red-500 text-white font-bold p-4 w-[200px] hover:bg-red-700 rounded-lg ">
            View All Properties
          </button>
        </div>
        {/* ---------our services------- */}
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-wrap justify-center items-center p-4 gap-[900px] max-sm:gap-10  pt-2"
          >
            <div>
              <h1 className="text-red-500  font-semibold max-sm:text-center ">OUR SERVICES</h1>
              <h1 className="text-3xl font-bold">What We Do?</h1>
            </div>
            <Link
              to="./our_services"
              className="flex items-center gap-2 underline font-semibold  "
            >
              View All Services
              <span className="text-red-500">
                <FaArrowRight />
              </span>
            </Link>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-wrap max-sm:text-center gap-20 max-sm:gap-5  justify-center mb-10"
          >
            <div className="group">
              <div className="pl-2 max-sm:ml-[120px] w-[100px] group-hover:-scale-x-100 duration-500 ">
                <img src={homeBuy} alt="" width={100} />
              </div>

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

            <div className="group">
              <div className="pl-2 max-sm:ml-[120px] w-[100px] group-hover:-scale-x-100 duration-500 ">
                <img src={homeRent} alt="" width={100} />
              </div>

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

            <div className="group">
              <div className="pl-2 w-[100px] max-sm:ml-[120px] group-hover:-scale-x-100 duration-500 ">
                <img src={homeSale} alt="" width={100} />
              </div>

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
          <hr />
          {/* -------------Next line-----------  */}
          <ScrollTrigger
            onEnter={() => setCounter(true)}
            onExit={() => setCounter(false)}
          >
            <div className="flex flex-wrap gap-28 max-sm:gap-20 justify-center  max-sm:pr-0 py-5 max-sm:pb-5">
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
        <div className="bg-[#F7F7F7] py-20">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-center"
          >
            <p className="font-semibold text-red-500 ">OUR BENEFIT</p>
            <p className="font-bold text-3xl ">Why Choose Homeya</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-wrap justify-center gap-10 my-4 "
          >
            <div className="text-center w-[400px]">
              <p className="pl-32 m-5 max-sm:pl-32">
                <span className=" text-8xl ">
                  <FaAward className=" cursor-pointer  " />
                </span>
              </p>
              <h1 className="font-bold text-2xl p-1 ">Proven Expertise</h1>
              <p className="font-semibold text-[#5C6368]">
                Our seasoned team excels in real estate with years of successful
                market navigation, offering informed decisions and optimal
                results.
              </p>
            </div>
            <div className="text-center w-[400px]">
              <p className="pl-32 m-5 max-sm:pl-32">
                <span className=" text-8xl ">
                  <LiaPencilRulerSolid />
                </span>
              </p>
              <h1 className="font-bold text-2xl p-1 ">Customized Solutions</h1>
              <p className="font-semibold text-[#5C6368]">
                We pride ourselves on crafting personalized strategies to match
                your unique goals, ensuring a seamless real estate journey.
              </p>
            </div>
            <div className="text-center w-[400px]">
              <p className="pl-32 m-5 max-sm:pl-32">
                <span className=" text-8xl ">
                  <FaHandHoldingHand />
                </span>
              </p>
              <h1 className="font-bold text-2xl p-1 ">
                Transparent Partnerships
              </h1>
              <p className="font-semibold text-[#5C6368]">
                Transparency is key in our client relationships. We prioritize
                clear communication and ethical practices, fostering trust and
                reliability throughout.
              </p>
            </div>
          </div>
        </div>
        {/* -------------------Top properties section------------------ */}
        <div className="group my-20 ">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" text-center "
          >
            <p className=" uppercase font-semibold text-red-500 py-2 ">
              top propertises
            </p>
            <p className="capitalize font-bold text-3xl ">
              <h1>best property value</h1>
            </p>
          </div>
          <div className=" flex flex-wrap max-sm:mx-4 justify-center gap-10  ">
            <div
              data-aos="fade-in"
              data-aos-duration="1000"
              className=" mt-10 my-4 shadow-lg overflow-hidden  border-2 w-[600px] rounded-2xl"
            >
              <div className="overflow-hidden">
                <div className="flex uppercase absolute z-10 items-center cursor-pointer ">
                  <h1 className="font-bold text-white text-lg bg-green-500 m-3 px-2 rounded-md ">
                    Featured
                  </h1>
                  <h1 className="font-semibold text-lg bg-white hover:bg-red-500 px-2 rounded-md  ">
                    For Sale
                  </h1>
                </div>
                <div className="flex uppercase absolute z-10 items-center cursor-pointer pt-[310px] max-sm:pt-[210px] pl-2 ">
                  <h1 className="font-semibold text-lg bg-white hover:bg-red-500 px-2 rounded-md ">
                    Villa
                  </h1>
                </div>
                <div className=" group-hover:scale-110 h-[350px] max-sm:h-[260px] duration-300 overflow-hidden">
                  <img src={house1} alt="" />
                </div>
              </div>
              <h1 className="font-bold capitalize hover:text-red-500 text-3xl px-4 py-4">
                rancho vista verde, santa barbara
              </h1>
              <p className=" flex items-center text-[#5C6368] text-lg font-semibold px-4 pb-4">
                <IoLocationOutline />
                145 Brooklyn Ave, Califonia, New York
              </p>
              <p className="font-semibold text-xl px-4 pb-4">
                "I truly appreciate the professionalism and in-depth...
              </p>
              <ul className="flex gap-10 pb-4 text-3xl ">
                <li className="flex gap-2 px-4">
                  <PiBedLight />
                  <span className=" text-xl font-bold"> 4 </span>
                </li>
                <li className="flex gap-2">
                  <PiBathtubThin />
                  <span className=" text-xl font-bold"> 2 </span>
                </li>
                <li className="flex gap-2">
                  <CiRuler />
                  <span className=" text-xl font-bold">600 sqFT</span>
                </li>
              </ul>
              <hr />
              <div className="flex items-center py-6 px-4 justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img src={user} alt="" />
                  </div>
                  <h1 className="font-semibold text-gray-500">Ralph Edward</h1>
                </div>
                <div className="flex font-bold items-center ">
                  <p className="font-extrabold text-xl">$7250,00</p>
                  <p className="text-gray-500">/month</p>
                </div>
              </div>
            </div>
            <div className=" mt-10 max-sm:mt-2 ">
              <Cards3 />
              <Cards3 />
              <Cards3 />
            </div>
          </div>
        </div>
        {/* --------------review section---------------------- */}
        <div className="bg-[#F7F7F7] py-20 ">
          <div className="flex flex-wrap  justify-center gap-5   ">
            <div data-aos="fade-right" data-aos-duration="1000" className="">
              <p className="text-red-500 font-semibold">TOP PROPERTISE</p>
              <h1 className="text-3xl font-bold py-4">
                What's People
                <br /> Say's
              </h1>
              <p className="w-[400px] max-sm:w-[350px] pb-4">
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
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className=" max-sm:mx-4"
            >
              <ReviewCart />
            </div>
          </div>
        </div>
        {/* -----------------our team section---------------- */}

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="py-20 text-center"
        >
          <p className="text-red-500 font-semibold">OUR TEAM</p>
          <h1 className="text-3xl font-bold mb-10">Meet Our Agents</h1>
          <div className="flex flex-wrap gap-10 justify-center">{Team}</div>
        </div>
      </main>

      <footer data-aos="fade-up" data-aos-duration="1000">
        <Footer />
      </footer>
    </div>
  );
}
