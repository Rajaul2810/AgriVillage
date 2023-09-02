import Image from "next/image";
import React from "react";
import wel from "../../../public/assets/girl.jpg";

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
];

const QA = () => {
  return (
    <section className=" bg-slate-50 pt-10 pb-10 ">
      <p className=" text-center text-3xl font-bold">
        Random Question & Answer
      </p>
      <div className=" flex justify-center items-center p-5 ">
        <div className="w-full sm:w-2/4 md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center ">
          <div className=" grid place-items-center">
            <Image className=" rounded-md" src={wel} alt="" />
          </div>
          <div className="p-5  w-full ">
            {qas.map((qa) => 
              <div key={qa.id} className="collapse collapse-arrow bg-slate-50 shadow-md mt-3 rounded-md bg-gradient-to-r from-green-400 to-lime-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md font-medium font-main">
                  {qa.qs}
                </div>
                <div className="collapse-content bg-white ">
                  <p className=" text-xs pt-2">
                    {qa.ans}
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
