import React, { useEffect } from "react";
import { IoIosCall } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css"

export default function TeamCart(props) {
  useEffect(()=>{
      Aos.init()
  },[])
  return (
    <>
      <div data-aos="slide-right" data-aos-duration="1000" className=" w-[280px] group ">
        <div className="">
          <div className="overflow-hidden rounded-xl">
            <img
              className="rounded-2xl group-hover:scale-110 duration-500 "
              src={props.image}
              alt=""
            />
          </div>
          <div className="flex items-center justify-between px-2">
            <div>
              <h1 className="mt-4 text-left  font-bold text-2xl">
                {props.name}
              </h1>
              <p className="text-left text-sm font-semibold text-[#5C6368]">
                {props.post}
              </p>
            </div>
            <div className="text-3xl mt-4 bg-[#F7F7F7] rounded-full p-2 group-hover:bg-red-500 group-hover:text-white duration-500">
            <IoIosCall />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
