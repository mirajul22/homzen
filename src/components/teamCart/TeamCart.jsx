import React from "react";


export default function TeamCart(props) {
  return (
    <>
        <div className=" mx-5  ">
          <div className="">
          <img className="rounded-2xl " src={props.image} alt="" />
          <h1 className="mt-4 font-bold text-lg">{props.name}</h1>
          <p>{props.post}</p>
          </div>
        </div>
    </>
  );
}


