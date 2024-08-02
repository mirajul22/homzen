import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import agent1 from "../../images/agent-1.jpg";
import agent2 from "../../images/agent-2.jpg";
import Aos from "aos";
import "aos/dist/aos.css"

export default function ReviewCart() {
  useEffect(()=>{
    Aos.init();
  },[]);

  return (
    <div className="flex flex-wrap gap-5 w-full ">
      {cartData.map((data) => (
        <div data-aos="fade-right" data-aos-duration="1000" className="w-[400px]  p-4 max-sm:w-[360px] rounded-2xl bg-white">
          <span className="flex text-yellow-500 gap-2 text-2xl py-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <p className="text-xl mb-4">{data.text}</p>
          <h1 className="text-2xl font-bold ">{data.name}</h1>
          <p className="font-semibold text-xl py-2">{data.post}</p>
        </div>
      ))}
    </div>
  );
}

// --------------data---------------

const cartData = [
  {
    image: agent1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt hic expedita pariatur accusamus asperiores deleniti ad voluptatum minus? Fuga modi ipsam eos fugiat, facere deserunt dolores sapiente enim autem.",
    name: "Liam Anderson",
    post: "CEO Digital",
  },

  {
    image: agent2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt hic expedita pariatur accusamus asperiores deleniti ad voluptatum minus? Fuga modi ipsam eos fugiat, facere deserunt dolores sapiente enim autem.",
    name: "Adam Will",
    post: "CEO Agency",
  },
 
];

function ReviewCart2() {
  return (
    <div className=" flex flex-wrap gap-10  justify-center ">
      {cartData.map((data) => (
        <div className="border-2 w-[350px] rounded-3xl bg-gray-100 p-6">
          <span className="flex text-yellow-500 gap-2 text-2xl py-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <p className="text-xl mb-4">{data.text}</p>
          <div className="flex items-center gap-4">
            <div>
              <img
                width={60}
                height={60}
                className="rounded-full "
                src={data.image}
                alt=""
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold ">{data.name}</h1>
              <p className="font-semibold text-xl py-2">{data.post}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { ReviewCart2 };

