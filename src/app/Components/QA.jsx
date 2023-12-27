import Image from "next/image";
import React from "react";
import wel from "../../../public/assets/qa.jpg";
import qaicon from "../../../public/assets/head/qaicon.png";

const qas = [
  {
    id: 1,
    qs: "Click to open this one and close others",
    ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quo.",
  },
  {
    id: 2,
    qs: "Click to open this one and close others",
    ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quo.",
  },
  {
    id: 3,
    qs: "Click to open this one and close others",
    ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quo.",
  },
  {
    id: 4,
    qs: "Click to open this one and close others",
    ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quo.",
  },
  {
    id: 5,
    qs: "Click to open this one and close others",
    ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, quo.",
  },
];

const QA = () => {
  return (
    <section className=" bg-slate-100 pt-10 pb-10 ">
      <div className=" flex justify-center">
        <Image src={qaicon} alt="qa" height={100} width={100}/>
      </div>
      <p className=" text-center text-3xl font-bold pt-2">
      সচরাচর জানতে চাওয়া প্রশ্নের উত্তর
      </p>
      <div className=" flex justify-center items-center p-5 ">
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2  place-items-center">
          <div className=" ">
            <Image className=" rounded-md" src={wel} alt="" />
          </div>
          <div className="md:p-5  w-full ">
            {qas.map(({id,ans,qs}) => 
              <div key={id} className="collapse collapse-arrow bg-slate-50 shadow-md mt-3 rounded-md bg-gradient-to-r from-green-400 to-lime-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md font-medium font-main">
                  {qs}
                </div>
                <div className="collapse-content bg-white ">
                  <p className=" text-xs pt-2">
                    {ans}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QA;
