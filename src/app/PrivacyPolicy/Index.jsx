import React, { useState } from "react";
import Header from "../../components/Header/Index";
import Footer from "../../components/Footer/Index";

export default function PrivacyPolicy() {
  const [data] = useState(policyData);
  const [show, setShow] = useState({
    0: "true",
    1: "false",
    2: "false",
    3: "false",
    4: "false",
    5: "false",
  });

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className="bg-[#f0eee9] font-bold text-5xl text-center py-32">
          <h1>Privacy Policy </h1>
        </div>
        <h1 className="text-3xl font-bold text-center py-10">Terms Of Use</h1>
        {data.map((d, index) => (
          <div className="flex mx-10 my-10 gap-x-10  justify-center ">
            <div className="font-bold bg-gray-50 text-2xl w-[400px] border-l-2  ">
              <h1
                onClick={() => {
                  setShow({
                    // ...show,
                    [index]: !show[index],
                  });
                }}
                className="py-10 hover:border-l-4  hover:border-red-500 "
              >
                {d.title}
              </h1>
              
            </div>
            <div className=" w-[600px] ">
              {show[index] && (
                <div className="bg-gray-50 p-4">
                  <h1 className="font-bold text-2xl "> {d.title} </h1>
                  <p className="text-lg p-4"> {d.desc} </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const policyData = [
  {
    title: "1. Terms",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse voluptas quis illo vitae porro cum et optio minus nam quidem quia accusamus, quae dolorem sequi exercitationem repellendus totam eligendi?",
  },

  {
    title: "2. Limitations",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse voluptas quis illo vitae porro cum et optio minus nam quidem quia accusamus, quae dolorem sequi exercitationem repellendus totam eligendi?",
  },

  {
    title: "3. Revisions And Errata",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse voluptas quis illo vitae porro cum et optio minus nam quidem quia accusamus, quae dolorem sequi exercitationem repellendus totam eligendi?",
  },

  {
    title: "4. Site Terms Of Use Modifications",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse voluptas quis illo vitae porro cum et optio minus nam quidem quia accusamus, quae dolorem sequi exercitationem repellendus totam eligendi?",
  },

  {
    title: "5. Risks",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse voluptas quis illo vitae porro cum et optio minus nam quidem quia accusamus, quae dolorem sequi exercitationem repellendus totam eligendi?",
  },
];
