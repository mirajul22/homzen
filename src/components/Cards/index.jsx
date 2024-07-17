import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import house1 from "../../images/house-1.jpg";
import house2 from "../../images/house-2.jpg";
import house3 from "../../images/house-3.jpg";
import house5 from "../../images/house-5.jpg";
import house6 from "../../images/house-6.jpg";
import house7 from "../../images/house-7.jpg";
import { FcHome } from "react-icons/fc";
import { PiBathtubThin } from "react-icons/pi";
import { PiBedLight } from "react-icons/pi";
import { CiRuler } from "react-icons/ci";
import "./style.css";

export default function Cards() {
  return (
    <div className="flex flex-wrap justify-between gap-10 ">
      {CardsData.map((data) => (
        <div className=" block hover:overflow-hidden shadow-md w-[400px] h-[500px] max-sm:w-[350px]   border-2 rounded-3xl">
          <div className="h-[310px] overflow-hidden block ">
            <img
              className=" block hover:scale-125 hover:ease-linear hover:duration-300  rounded-t-3xl h-[310px] cursor-pointer"
              src={data.image}
              alt=""
            />
          </div>
          <div className=" p-4">
          <h1 className="font-bold text-base text-center border-2 bg-red-500 rounded-xl shadow-md text-white"> {data.category} </h1>
            <h1 className="font-bold text-base"> {data.title} </h1>
            <p className="flex gap-1 items-center">
              <IoLocationOutline /> {data.location}
            </p>
            <ul className="flex justify-between mr-8 mt-2 text-2xl ">
              <li className="flex gap-4">
                <PiBedLight />
                <span className=" text-base font-bold"> {data.bed} </span>
              </li>
              <li className="flex gap-4">
                <PiBathtubThin />
                <span className=" text-base font-bold"> {data.bath} </span>
              </li>
              <li className="flex gap-4">
                <CiRuler />
                <span className=" text-base font-bold">{data.SqFT} sqFT</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function Cards2() {
  return (
    <div className="backimg h-[500px] w-[400px] shadow-md rounded-3xl">
      <div className="text-left text-base font-semibold pt-[425px] pl-10 text-white">
        <p>221 Prpperty</p>
        <h1 className="text-2xl">Sydney, Australiya</h1>
      </div>
    </div>
  );
}

function Cards3() {
  return (
    <div className="rounded-xl flex border-2 shadow-lg overflow-hidden w-[600px] h-[235px]">
      <div className="backimg w-[250px] h-[235px] font-bold p-2">
        <p className="bg-green-500 w-24 px-2 py-2 text-white">FEATURED</p>
        <p className="bg-gray-300 text-white w-24 py-2 px-2 mt-1">FOR SALE</p>
        <p className="bg-white w-20 mt-24  px-4 py-1 rounded-md"> House</p>
      </div>
      <div className=" p-6">
        <h1 className="font-bold text-lg pb-2">Case Lomas De Machali Machas</h1>
        <p className="flex gap-2 pb-2 items-center">
          <IoLocationOutline /> 33 Maple Street, San Francisco, California
        </p>
        <ul className="flex justify-between mr-8 mt-2 text-2xl border-b-2 pb-4 ">
          <li className="flex gap-4">
            <PiBedLight />
            <span className=" text-base font-bold">3</span>
          </li>
          <li className="flex gap-4">
            <PiBathtubThin />
            <span className=" text-base font-bold">2</span>
          </li>
          <li className="flex gap-4">
            <CiRuler />
            <span className=" text-base font-bold">600 sqFT</span>
          </li>
        </ul>
        <div className="flex justify-between mt-6">
          <p>Ralph Edward</p>
          <div className="flex">
            <p className="font-bold">$5050.00 </p>
            <span>/SqFT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Cards2, Cards3 };

const CardsData = [
  {
    id: 1,
    image: house1,
    title: "Villa Del Mar Retreat, Malibu",
    location: "72 Sunset Avenue, Los Angeles, California",
    bed: 2,
    bath: 2,
    SqFT: 600,
    category: "studio"
  },
  {
    id: 2,
    image: house2,
    title: "Rancho Vista Verde, Santa Barbara",
    location: "33 Maple Street, San Francisco, California",
    bed: 4,
    bath: 2,
    SqFT: 600,
    category: "apartment"
  },
  {
    id: 3,
    image: house3,
    title: "Sunset Heights Estate, Beverly Hills",
    location: "1040 Ocean, Santa Monica, California",
    bed: 3,
    bath: 2,
    SqFT: 600,
    category: "villa"
  },
  {
    id: 4,
    image: house7,
    title: "Coastal Serenity Cottage",
    location: "21 Hillside Drive, Beverly Hills, California",
    bed: 4,
    bath: 2,
    SqFT: 600,
    category: "house"
  },
  {
    id: 5,
    image: house5,
    title: "Lakeview Haven, Lake Tahoe",
    location: "8 Broadway, Brooklyn, New York",
    bed: 2,
    bath: 2,
    SqFT: 600,
    category: "office"
  },
  {
    id: 6,
    image: house6,
    title: "Casa Lomas De Machalí Machas",
    location: "33 Maple Street, San Francisco, California",
    bed: 3,
    bath: 2,
    SqFT: 600,
    category: "studio"
  },
];

// -----------------our services------------------

function CartOurServices() {
  return (
    <div className="flex flex-wrap gap-8 m-10 max-sm:justify-center ">
      {services.map((d) => (
        <div className=" group text-center p-10 border-2 w-[400px] max-sm:w-[350px] rounded-3xl hover:bg-[#d1cfcf]">
          <p className="text-6xl px-20 py-5">
            <span>
              <FcHome className=" mx-14 max-sm:mx-7" />
            </span>
          </p>
          <h1 className="text-2xl font-bold p-2">{d.title}</h1>
          <p className="p-2">{d.description}</p>
          <button
            className=" m-4 font-bold border-2 border-black py-2 px-4 group-hover:bg-red-500 group-hover:text-white"
            type="button"
          >
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
  },

  {
    title: "Buy A New Home",
    description:
      "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    text: "Find A Rental",
  },

  {
    title: "Buy A New Home",
    description:
      "Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.",
    text: "Submit Property",
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
            <h1 className="text-2xl font-bold p-2 max-sm:text-xl max-sm:p-0">{d.title}</h1>
            <p className="p-2 max-sm:p-0">{d.description}</p>
            <Link className="flex items-center gap-2 font-bold underline">Learn More <IoIosArrowRoundForward  className="text-red-500 hover:translate-x-2"/>
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

function CartSubscription(){
  return(
    <div className="group bg-gray-100 w-[300px] h-[480px] hover:duration-300 p-4 rounded-3xl hover:text-white hover:bg-red-500 " >
        <div className="flex">
          <p className="font-bold text-3xl ">$20</p>
          <p className="pt-4">/month</p>
        </div>
        <p className="font-bold text-2xl py-4">Intro</p>
        <p className="font-semibold pb-2">Join us every month for a very reasonable price</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-red-500 group-hover:text-white" /> Transportation for you</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-red-500 group-hover:text-white" /> A hotel or homestay</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-red-500 group-hover:text-white" /> Free meals and drinks</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-red-500 group-hover:text-white" /> 24/7 Support</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-red-500 group-hover:text-white" /> Ultimate users</p>
        <div>
          <button className="font-bold border-2 group-hover:border-none  py-2 px-10 my-4 border-black bg-white text-black " type="button">Choose The Package</button>
        </div>
    </div>
  )
}

export {CartSubscription}

function CartSubscription2(){
  return(
    <div className="w-[300px] p-4 rounded-3xl text-white bg-red-500 " >
        <div className="font-bold text-black bg-white w-40 ml-[100px] my-1 rounded-xl px-4 py-2 ">
          <h1>MOST POPULAR</h1>
        </div>
        <div className="flex">
          <p className="font-bold text-3xl ">$20</p>
          <p className="pt-4">/month</p>
        </div>
        <p className="font-bold text-2xl py-4">Intro</p>
        <p className="font-semibold pb-2">Join us every month for a very reasonable price</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-gray-100" /> Transportation for you</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-gray-100" /> A hotel or homestay</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-gray-100" /> Free meals and drinks</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-gray-100" /> 24/7 Support</p>
        <p className=" flex items-center gap-2 font-bold py-2"><FaCheckCircle className=" text-gray-100" /> Ultimate users</p>
        <div>
          <button className="font-bold text-black border-2 border-none  py-2 px-8 m-4  bg-white " type="button">Choose The Package</button>
        </div>
    </div>
  )
}

export {CartSubscription2}