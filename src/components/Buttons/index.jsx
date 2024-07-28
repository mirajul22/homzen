import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Buttons() {
  const [active, setActive] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  return (
    <div className="flex gap-x-5  max-sm:flex-col cursor-pointer  ">
      {buttonData.map((data, i) => (
        <Link to="/"> 
        <div
          onClick={() => {
            setActive({
              [i]: !active[i],
            });
          }}
          className={
            active[i]
              ? " text-white bg-red-500  font-semibold p-2 w-28 text-center rounded-lg "
              : "bg-[#dddcdc] hover:text-white hover:bg-red-500 text-black font-semibold p-2 w-28 text-center rounded-lg  "
          }
        >
          <h1>{data.title}</h1>
        </div>
        </Link>
      ))}
    </div>
  );
}

const buttonData = [
  {
    title: "View All",
  },
  {
    title: "Apartment",
  },
  {
    title: "Villa",
  },
  {
    title: "Studio",
  },
  {
    title: "House",
  },
  {
    title: "Office",
  },
];
