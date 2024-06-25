import React from "react";

export default function Buttons() {
  return (
    <div className="flex gap-x-5  max-sm:flex-col cursor-pointer  ">
      {buttonData.map((data, i) => (
        <div
          key={i}
          className="bg-[#dddcdc] hover:text-white hover:bg-red-500 text-black font-semibold p-2 w-28 text-center  "
        >
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
}

function Button2() {
  return (
    <div>
      <div className="bg-red-500 text-white font-semibold p-2 w-28 text-center  ">
        View All
      </div>
    </div>
  );
}

export { Button2 };

const buttonData = [
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
