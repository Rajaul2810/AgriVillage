import Image from "next/image";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCurrencyTaka, TbMinus, TbPlus } from "react-icons/tb";
import { projects } from "../libs/Data";

const ProjectInfo = ({params}) => {
    const [count, setCount] = useState(1);
    if (count < 1) {
      setCount(1);
    }
    const project = projects.find((pd) => pd.id == params.id);
  return (
    <section>
      <div className=" p-5">
        <div className=" flex justify-center">
          <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
            <Image
              src={project.photo}
              alt=""
              className=" h-96 w-full rounded-md"
            />
            <div>
              <span className="text-2xl font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative inline-block">
                <span className="relative text-white">{project.name}</span>
              </span>
              <p className="py-1"> {project.address}</p>
              <p className=" py-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                tenetur suscipit obcaecati. Mollitia provident, cupiditate
                voluptates suscipit sit quasi quam.
              </p>
              <div className=" flex items-center text-green-600 py-2">
                <TbCurrencyTaka size={25} />
                <p className=" text-lg font-semibold">100</p>
              </div>
              <div className=" flex items-center gap-10 border bg-white shadow-md rounded-md p-3 w-fit">
                <button onClick={() => setCount(count - 1)} className="btn">
                  <TbMinus size={20} />
                </button>
                <p className=" font-bold text-lg">{count}</p>
                <button onClick={() => setCount(count + 1)} className="btn ">
                  <TbPlus size={20} />
                </button>
              </div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn bg-gradient-to-r from-green-400 to-lime-300 my-5"
              >
                Booking Now <FiArrowUpRight />
              </button>
            </div>
            <div>
              <p>b</p>
            </div>
            <div>
              <b>b</b>
            </div>
          </div>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Booking Information</h3>
            <div className="py-4">
              <input
                className=" border p-2 my-1 rounded-sm w-full"
                type="text"
                placeholder="Name"
              />
              <br />
              <input
                className=" border p-2 my-1 rounded-sm w-full"
                type="number"
                placeholder="Phone"
              />
              <br />
              <input
                className=" border p-2 my-1 rounded-sm w-full"
                type="number"
                placeholder="Total Member"
                value={count}
              />
              <br />
              <input
                className=" border p-2 my-1 rounded-sm w-full"
                type="number"
                placeholder="Total amount"
                value={count*100}
              />
              <br />
              <button className="btn bg-gradient-to-r from-green-400 to-lime-300 my-1">
                Payment <FiArrowUpRight />
              </button>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
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
