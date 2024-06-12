import React from "react";
import { FaStar } from "react-icons/fa";
import agent1 from "../../images/agent-1.jpg";
import agent2 from "../../images/agent-2.jpg";

export default function ReviewCart() {
  return (
    <div className=" flex gap-10 w-full ">
      {cartData.map((data) => (
        <div className="w-[400px] px-4 pt-10 h-[400px] rounded-2xl bg-white">
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
    <div className=" flex gap-10 m-10 ">
      {cartData.map((data) => (
        <div className="border-2 rounded-3xl bg-gray-100 p-6">
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

