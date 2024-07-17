import React, { useState } from "react";
import partner1 from "../../images/gxi.svg"
import partner2 from "../../images/panadoxn.svg"
import partner3 from "../../images/tech.svg"
import partner4 from "../../images/tyalpa.svg"
import partner5 from "../../images/vanfaba.svg"


export default function Faqs() {
  const [data] = useState(questions);
  const [show, setShow] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  return (
    <>
      {data.map((ques, index) => {
        return (
          <div className="my-4 cursor-pointer">
            <div className=" flex justify-between rounded-xl text-xl max-sm:w-full max-sm:text-lg max-sm:py-2 max-sm:mx-4 font-bold border-2 w-1/2 ml-[25%] py-4 px-3">
              {ques.ques}
              <p
                className="text-3xl items-center max-sm:text-lg "
                onClick={() => {
                  setShow({
                    ...show,
                    [index]: !show[index]
                  });
                }}
              >
                {show[index] ? "-" : "+"}
              </p>
            </div>

            {show[index] && (
              <p className="justify-between text-xl max-sm:text-sm max-sm:w-[350px] max-sm:ml-10 text-[#6f6f6f] border-2 w-1/2 ml-[25%] py-4 px-3">
                {ques.ans}
              </p>
            )}
          </div>
        );
      })}
    </>
  );
}

//  Array of questions Api

const questions = [
  {
    id: 1,
    ques: "Why Should I Use Your Services?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat, veniam commodi impedit adipisci praesentium, illum in beatae id aspernatur eius alias repudiandae! Odit, at non. Minus expedita id eius?",
  },

  {
    id: 2,
    ques: "How Do I Get Started With Your Services?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat, veniam commodi impedit adipisci praesentium, illum in beatae id aspernatur eius alias repudiandae! Odit, at non. Minus expedita id eius?",
  },

  {
    id: 3,
    ques: "How Secure Are Your Services?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat, veniam commodi impedit adipisci praesentium, illum in beatae id aspernatur eius alias repudiandae! Odit, at non. Minus expedita id eius?",
  },

  {
    id: 4,
    ques: "Is There Customer Support Available?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat, veniam commodi impedit adipisci praesentium, illum in beatae id aspernatur eius alias repudiandae! Odit, at non. Minus expedita id eius?",
  },

  {
    id: 5,
    ques: "How Can I Update My Account Information?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat, veniam commodi impedit adipisci praesentium, illum in beatae id aspernatur eius alias repudiandae! Odit, at non. Minus expedita id eius?",
  },
];


// -----------------company partners -------------------

function Partners(){
  return(
    <div className="flex max-sm:hidden justify-between m-20">
      {companyData.map((d) => (
        <img src={d.image} alt="" />
      ))}
    </div>
  )
}

export {Partners}

const companyData = [
  {
    image: partner1
  },

  {
    image: partner2
  },

  {
    image: partner3
  },

  {
    image: partner4
  },

  {
    image: partner5
  },
]