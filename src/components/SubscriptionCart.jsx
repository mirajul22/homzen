import React, { useEffect, useState } from "react";
import subcriptionData from "../services/subscriptionData.json";
import { FaCheckCircle } from "react-icons/fa";
import Aos from "aos";

export default function CartSubscription() {
  const [active, setActive] = useState({
    0: false,
    1: false,
    2: true,
    3: false,
  });

  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div className="flex flex-wrap justify-between gap-6 mx-auto max-sm:justify-center max-sm:mx-10">
      {subcriptionData.map((d, i) => {
        return (
          <div
            onClick={() => {
              setActive({ [i]: !active[i] });
            }}
            className={
              active[i]
                ? "group w-[300px] h-[480px] duration-300 p-4 rounded-3xl text-white bg-red-500 scale-105 "
                : "group bg-gray-100 w-[300px] h-[480px] duration-300 p-4 rounded-3xl hover:text-white hover:bg-red-500 "
            }

        
          >
            <div className="flex">
              <p className="font-bold text-3xl ">${d.price}</p>
              <p className="pt-4">/month</p>
            </div>
            <p className="font-bold text-2xl py-4">Intro</p>
            <p className="font-semibold pb-2">
              Join us every month for a very reasonable price
            </p>
            <p className=" flex items-center gap-2 font-bold py-2">
              <FaCheckCircle
                className={
                  active[i]
                    ? "text-white"
                    : " text-red-500 group-hover:text-white"
                }
              />{" "}
              Transportation for you
            </p>
            <p className=" flex items-center gap-2 font-bold py-2">
              <FaCheckCircle
                className={
                  active[i]
                    ? "text-white"
                    : " text-red-500 group-hover:text-white"
                }
              />{" "}
              A hotel or homestay
            </p>
            <p className=" flex items-center gap-2 font-bold py-2">
              <FaCheckCircle
                className={
                  active[i]
                    ? "text-white"
                    : " text-red-500 group-hover:text-white"
                }
              />{" "}
              Free meals and drinks
            </p>
            <p className=" flex items-center gap-2 font-bold py-2">
              <FaCheckCircle
                className={
                  active[i]
                    ? "text-white"
                    : " text-red-500 group-hover:text-white"
                }
              />{" "}
              24/7 Support
            </p>
            <p className=" flex items-center gap-2 font-bold py-2">
              <FaCheckCircle
                className={
                  active[i]
                    ? "text-white"
                    : " text-red-500 group-hover:text-white"
                }
              />{" "}
              Ultimate users
            </p>
            <div>
              <button
                className={
                  active[i]
                    ? "font-bold border-2 border-none  py-2 w-full rounded-lg my-4 border-black bg-white text-black "
                    : "font-bold border-2 group-hover:border-none  py-2 w-full rounded-lg my-4 border-black bg-white text-black "
                }
                type="button"
              >
                Choose The Package
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
