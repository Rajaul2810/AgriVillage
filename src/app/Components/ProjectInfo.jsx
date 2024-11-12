"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCurrencyTaka, TbMinus, TbPlus } from "react-icons/tb";
import { projects } from "../libs/Data";
import ProjectBenefits from "./ProjectBenefits";
import { BsFillCaretRightFill } from "react-icons/bs";
import qa from "../../../public/assets/qa.jpg";
import { toast } from "react-toastify";
import TourPackage from "./TourPackage";
import { GiFarmTractor } from "react-icons/gi";

const ProjectInfo = ({ params }) => {
  const [count, setCount] = useState(1);
  if (count < 1) {
    setCount(1);
  }
  const project = projects.find((pd) => pd.id == params.id);

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="p-5 pt-10">
        <div className="flex justify-center">
          <div className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center py-5">
            <Image
              src={project.photo}
              alt={project.name}
              className="h-96 w-full rounded-md shadow-lg"
            />
            <div className="space-y-4">
              <span className="text-3xl font-bold text-green-600 relative inline-block">
                <span className="relative">{project.name}</span>
              </span>
              <p className="text-lg text-gray-700">{project.address}</p>
              <p className="text-base text-gray-600">{project.description}</p>
              <div className="flex items-center text-green-600 py-2">
                <TbCurrencyTaka size={25} />
                <p className="text-xl font-semibold">100</p>
              </div>
              <div className="flex items-center gap-4 border bg-white shadow-md rounded-md p-3 w-fit">
                <button onClick={() => setCount(count - 1)} className="btn">
                  <TbMinus size={20} />
                </button>
                <p className="font-bold text-lg text-black">{count}</p>
                <button onClick={() => setCount(count + 1)} className="btn">
                  <TbPlus size={20} />
                </button>
              </div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn bg-gradient-to-r from-green-500 to-lime-400 my-5 flex items-center gap-2 rounded-sm"
              >
                Booking Now <FiArrowUpRight />
              </button>
            </div>

            <div className="py-10">
              <ProjectBenefits />
            </div>
            <div className="py-10">
              <div className="relative">
                <Image
                  src={qa}
                  alt="Quality Assurance"
                  className="h-96 w-full brightness-50 rounded-md"
                />
                <button className="btn btn-lg btn-circle absolute top-2/4 left-2/4 shadow-md bg-gradient-to-r from-green-500 to-lime-400">
                  <BsFillCaretRightFill />
                </button>
              </div>
            </div>
          </div>
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Booking Information</h3>
            <div className="py-4">
              <input
                className="border p-2 my-1 rounded-sm w-full"
                type="text"
                placeholder="Name"
              />
              <br />
              <input
                className="border p-2 my-1 rounded-sm w-full"
                type="number"
                placeholder="Phone"
              />
              <br />
              <input
                className="border p-2 my-1 rounded-sm w-full"
                type="number"
                placeholder="Total Member"
                value={count}
                readOnly
              />
              <br />
              <input
                className="border p-2 my-1 rounded-sm w-full"
                type="number"
                placeholder="Total amount"
                value={count * 100}
                readOnly
              />
              <br />
              <button
                onClick={() => toast("Order Successful")}
                className="btn bg-gradient-to-r from-green-500 to-lime-400 my-1 flex items-center gap-2"
              >
                Place Order <GiFarmTractor />
              </button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default ProjectInfo;
