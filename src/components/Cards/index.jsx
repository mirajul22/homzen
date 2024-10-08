import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
// import house1 from "../../images/house-1.jpg";
// import house2 from "../../images/house-2.jpg";
// import house3 from "../../images/house-3.jpg";
// import house5 from "../../images/house-5.jpg";
// import house6 from "../../images/house-6.jpg";
// import house7 from "../../images/house-7.jpg";
import user from "../../images/agent-1.jpg";
import homeRent from "../../images/rent.png";
import homeBuy from "../../images/buy (1).png";
import homeSale from "../../images/for-sale.png";
import { FcHome } from "react-icons/fc";
import { PiBathtubThin } from "react-icons/pi";
import { PiBedLight } from "react-icons/pi";
import { CiRuler } from "react-icons/ci";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
// import { fetchProduct } from "../../store/productSlice";

export default function Cards() {
  const state = useSelector((state) => state);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex flex-wrap justify-center gap-10 ">
      {state.product.data &&
        state.product.data.map((data) => (
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className=" block group group-hover:overflow-hidden shadow-xl w-[400px] pb-4 max-sm:w-[350px]   border-2 rounded-xl">
            <div className="flex uppercase absolute z-10 items-center cursor-pointer ">
              <h1 className="font-bold text-white text-sm bg-green-500 m-3 px-2 rounded-md ">
                Featured
              </h1>
              <h1 className="font-semibold text-sm bg-white hover:bg-red-500 px-2 rounded-md  ">
                For {data.services}
              </h1>
            </div>
            <div className="flex uppercase absolute z-10 items-center cursor-pointer pt-[250px] pl-2 ">
              <h1 className="font-semibold text-sm bg-white hover:bg-red-500 px-2 rounded-md  ">
                {data.types}
              </h1>
            </div>

            <div className="h-[280px] overflow-hidden  ">
              <div className="overflow-hidden rounded-t-xl">
                <img
                  className=" group-hover:scale-110 ease-linear duration-300 h-[280px] cursor-pointer"
                  src={data.img}
                  alt=""
                />
              </div>
            </div>
            <div className=" p-4">
              <h1 className="font-bold text-lg"> {data.title} </h1>
              <p className="flex gap-1 items-center">
                <IoLocationOutline /> {data.text}
              </p>
              <ul className="flex justify-between mr-8 mt-2 text-2xl ">
                <li className="flex gap-4">
                  <PiBedLight />
                  <span className=" text-base font-bold"> {data.bedroom} </span>
                </li>
                <li className="flex gapm-4">
                  <PiBathtubThin />
                  <span className=" text-base font-bold">
                    {" "}
                    {data.bathroom}{" "}
                  </span>
                </li>
                <li className="flex gap-4">
                  <CiRuler />
                  <span className=" text-base font-bold">{data.area}</span>
                </li>
              </ul>
            </div>
            <hr />
            <div className="flex items-center py-2 px-4 justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                  <img src={user} alt="" />
                </div>
                <h1 className="font-semibold text-gray-500">Ralph Edward</h1>
              </div>
              <div className="flex font-bold items-center ">
                <p className="font-extrabold text-xl">$7250,00</p>
                <p className="text-gray-500">/SqFT</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

function Cards3() {
  return (
    <div className="rounded-xl flex border-2 shadow-lg overflow-hidden w-[600px] max-sm:w-[380px]  mb-5  hover:scale-105 duration-500">
      <div className="backimg w-[250px]  font-bold text-base p-2">
        <p className="bg-green-500 w-24 px-2 rounded-md text-white">FEATURED</p>
        <p className=" bg-white w-24 rounded-md text-center  mt-1">FOR SALE</p>
        <p className="bg-white w-20 mt-28 max-sm:mt-32 px-4 rounded-md">
          House
        </p>
      </div>
      <div className=" p-3 max-sm:p-1">
        <h1 className="font-bold hover:text-red-500 text-lg pb-2 max-sm:pb-0">
          Case Lomas De Machali Machas
        </h1>
        <p className="flex gap-2 pb-2   items-center max-sm:pb-0 max-sm:text-sm max-sm: ">
          <IoLocationOutline /> 33 Maple Street, San Francisco, California
        </p>
        <ul className="flex justify-between mr-8 mt-2 text-2xl pb-4 max-sm:text-lg ">
          <li className="flex gap-4 max-sm:gap-1 max-sm:items-center">
            <PiBedLight />
            <span className=" text-base font-bold">3</span>
          </li>
          <li className="flex gap-4 max-sm:gap-1 max-sm:items-center">
            <PiBathtubThin />
            <span className=" text-base font-bold">2</span>
          </li>
          <li className="flex gap-4 max-sm:gap-1 max-sm:items-center">
            <CiRuler />
            <span className=" text-base font-bold">600 sqFT</span>
          </li>
        </ul>
        <hr />
        <div className="flex justify-between py-2 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={user} alt="" />
            </div>
            <p className="max-sm:text-sm">Ralph Edward</p>
          </div>
          <div className="flex flex-wrap">
            <p className="font-bold max-sm:text-lg">$5050.00 </p>
            <span className="max-sm:text-xs">/SqFT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Cards3 };

// const CardsData = [
//   {
//     id: 1,
//     image: house1,
//     title: "Villa Del Mar Retreat, Malibu",
//     location: "72 Sunset Avenue, Los Angeles, California",
//     bed: 2,
//     bath: 2,
//     SqFT: 600,
//     category: "studio",
//   },
//   {
//     id: 2,
//     image: house2,
//     title: "Rancho Vista Verde, Santa Barbara",
//     location: "33 Maple Street, San Francisco, California",
//     bed: 4,
//     bath: 2,
//     SqFT: 600,
//     category: "apartment",
//   },
//   {
//     id: 3,
//     image: house3,
//     title: "Sunset Heights Estate, Beverly Hills",
//     location: "1040 Ocean, Santa Monica, California",
//     bed: 3,
//     bath: 2,
//     SqFT: 600,
//     category: "villa",
//   },
//   {
//     id: 4,
//     image: house7,
//     title: "Coastal Serenity Cottage",
//     location: "21 Hillside Drive, Beverly Hills, California",
//     bed: 4,
//     bath: 2,
//     SqFT: 600,
//     category: "house",
//   },
//   {
//     id: 5,
//     image: house5,
//     title: "Lakeview Haven, Lake Tahoe",
//     location: "8 Broadway, Brooklyn, New York",
//     bed: 2,
//     bath: 2,
//     SqFT: 600,
//     category: "office",
//   },
//   {
//     id: 6,
//     image: house6,
//     title: "Casa Lomas De Machalí Machas",
//     location: "33 Maple Street, San Francisco, California",
//     bed: 3,
//     bath: 2,
//     SqFT: 600,
//     category: "studio",
//   },
// ];

// -----------------our services------------------

function CartOurServices() {
  const [show, setShow] = useState({
    0: false,
    1: true,
    2: false,
  });
  return (
    <div className="flex flex-wrap gap-8 justify-center my-10 max-sm:justify-center ">
      {services.map((d, i) => (
        <div
          onClick={() => {
            setShow({
              ...show,
              [i]: !show[i],
            });
          }}
          className={
            show[i]
              ? " group text-center p-10 w-[400px] max-sm:w-[350px] rounded-3xl bg-[#f7f7f7]"
              : "group text-center p-10  w-[400px] max-sm:w-[350px] rounded-3xl hover:bg-[#f7f7f7] "
          }>
          <p className="text-6xl px-20 py-5   ">
            <div className="pl-8 max-sm:pl-2 group-hover:-scale-x-100 duration-500  ">
              <img src={d.image} alt="" width={100} />
            </div>
          </p>
          <h1 className="text-2xl font-bold p-2">{d.title}</h1>
          <p className="p-2">{d.description}</p>
          <button
            className={
              show[i]
                ? " m-4 font-bold  py-3 px-4 bg-red-500 text-white rounded-lg"
                : " m-4 font-bold border-2 border-black py-3 px-4 rounded-lg group-hover:bg-red-500 group-hover:text-white group-hover:border-none"
            }
            type="button">
            {d.text}
          </button>
        </div>
      ))}
    </div>
  );
}

export { CartOurServices };
const services = [
  {
    title: "Buy A New Home",
    description:
      "Discover your dream home effortlessly. Explore  diverse properties and expert guidance for a seamless buying experience.",
    text: "Find A Home",
    image: homeBuy,
  },

  {
    title: "Rent A  Home",
    description:
      "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    text: "Find A Rental",
    image: homeRent,
  },

  {
    title: "Sale A Home",
    description:
      "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    text: "Submit Property",
    image: homeSale,
  },
];

//  -----------about us / why choose us -------------

function CartChoose() {
  return (
    <div className=" cursor-pointer">
      {services2.map((d) => (
        <div className="flex shadow-2xl hover:scale-110 hover:ease-linear hover:duration-300 m-10 py-4 px-2 gap-4 border-2 w-[500px] max-sm:w-[350px] max-sm:h-[150px] max-sm:justify-center rounded-3xl">
          <p className="">
            <span>
              <FcHome className="text-6xl my-4  " />
            </span>
          </p>
          <div>
            <h1 className="text-2xl font-bold p-2 max-sm:text-xl max-sm:p-0">
              {d.title}
            </h1>
            <p className="p-2 max-sm:p-0">{d.description}</p>
            <Link className="flex items-center gap-2 font-bold underline">
              Learn More{" "}
              <IoIosArrowRoundForward className="text-red-500 hover:translate-x-2" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export { CartChoose };

const services2 = [
  {
    title: "Buy A New Home",
    description:
      "Explore  diverse properties and expert guidance for a seamless buying experience.",
    text: "Find A Home",
  },

  {
    title: "Buy A New Home",
    description:
      "Explore diverse properties and expert guidance for a seamless buying experience.",
    text: "Find A Rental",
  },

  {
    title: "Buy A New Home",
    description:
      "Explore diverse properties and expert guidance for a seamless buying experience.",
    text: "Submit Property",
  },
];

// --------------subscription carts------------------

function CartSubscription() {
  return (
    <div className="group bg-gray-100 w-[300px] h-[480px] hover:duration-300 p-4 rounded-3xl hover:text-white hover:bg-red-500 ">
      <div className="flex">
        <p className="font-bold text-3xl ">$20</p>
        <p className="pt-4">/month</p>
      </div>
      <p className="font-bold text-2xl py-4">Intro</p>
      <p className="font-semibold pb-2">
        Join us every month for a very reasonable price
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-red-500 group-hover:text-white" />{" "}
        Transportation for you
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-red-500 group-hover:text-white" /> A
        hotel or homestay
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-red-500 group-hover:text-white" /> Free
        meals and drinks
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-red-500 group-hover:text-white" /> 24/7
        Support
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-red-500 group-hover:text-white" />{" "}
        Ultimate users
      </p>
      <div>
        <button
          className="font-bold border-2 group-hover:border-none  py-2 px-10 my-4 border-black bg-white text-black "
          type="button">
          Choose The Package
        </button>
      </div>
    </div>
  );
}

export { CartSubscription };

function CartSubscription2() {
  return (
    <div className="w-[300px] p-4 rounded-3xl text-white bg-red-500 ">
      <div className="font-bold text-black bg-white w-40 ml-[100px] my-1 rounded-xl px-4 py-2 ">
        <h1>MOST POPULAR</h1>
      </div>
      <div className="flex">
        <p className="font-bold text-3xl ">$20</p>
        <p className="pt-4">/month</p>
      </div>
      <p className="font-bold text-2xl py-4">Intro</p>
      <p className="font-semibold pb-2">
        Join us every month for a very reasonable price
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-gray-100" /> Transportation for you
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-gray-100" /> A hotel or homestay
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-gray-100" /> Free meals and drinks
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-gray-100" /> 24/7 Support
      </p>
      <p className=" flex items-center gap-2 font-bold py-2">
        <FaCheckCircle className=" text-gray-100" /> Ultimate users
      </p>
      <div>
        <button
          className="font-bold text-black border-2 border-none  py-2 px-8 m-4  bg-white "
          type="button">
          Choose The Package
        </button>
      </div>
    </div>
  );
}

export { CartSubscription2 };
