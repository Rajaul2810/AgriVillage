"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { TbCurrencyTaka, TbMinus, TbPlus } from "react-icons/tb";
import { events } from "@/app/libs/Data";
import EventBenefits from "../../Components/EventBenefit";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import qa from "../../../../public/assets/qa.jpg";
import { toast } from "react-toastify";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const EventDetails = ({ params }) => {
  const [count, setCount] = useState(1);
  if (count < 1) {
    setCount(1);
  }
  const event = events.find((pd) => pd.id == params.id);

  // Custom Image Slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNextSlide = () => {
    setCurrentSlide(
      currentSlide === event.gallery.length - 1 ? 0 : currentSlide + 1
    );
  };
  const handlePrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? event.gallery.length - 1 : currentSlide - 1
    );
  };

  return (
    <section>
      <div className="p-5 pt-10 bg-slate-100 text-black">
        <div className="flex justify-center">
          <div className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center py-5">
            <div>
              {event.gallery.length > 0 ? (
                <div className="image-slider relative">
                  <Image
                    src={event.gallery[currentSlide]}
                    alt={`Event ${currentSlide + 1}`}
                    className="w-full h-96 object-fill rounded-md shadow-lg"
                  />
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2"
                  >
                    <BsFillCaretRightFill size={25} className="rotate-180" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2"
                  >
                    <BsFillCaretRightFill size={25} />
                  </button>
                </div>
              ) : (
                <div>
                  <Image
                    src={event.photo}
                    alt={event.name}
                    className="w-full object-fill rounded-md shadow-lg"
                  />
                </div>
              )}
              <div className="flex flex-wrap gap-2 my-6">
                {event.facilities?.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-green-200 transition-colors border border-green-500"
                  >
                    <MdOutlineMiscellaneousServices />
                    {facility}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold relative inline-block">
                <span className="relative text-green-600">{event.name}</span>
              </span>
              <div className="flex items-center gap-2 py-2">
                <FaMapMarkerAlt className="text-green-500" />
                <p>{event.location}</p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <FaCalendarAlt className="text-green-500" />
                <p>{event.date}</p>
              </div>
              <div className="flex items-center gap-2 py-2">
                <FaClock className="text-green-500" />
                <p>{event.time}</p>
              </div>
              <p className="py-3">{event.description}</p>
              <div className="flex items-center text-green-600 py-2">
                <TbCurrencyTaka size={25} />
                <p className="text-lg font-semibold">
                  Entry Free {event?.entryFee}
                </p>
              </div>
              <div className="flex items-center gap-10 border bg-white shadow-md rounded-md p-3 w-fit">
                <button onClick={() => setCount(count - 1)} className="btn">
                  <TbMinus size={20} />
                </button>
                <p className="font-bold text-lg">{count}</p>
                <button onClick={() => setCount(count + 1)} className="btn">
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
            <div className="py-10">
              <EventBenefits />
            </div>
            <div className="py-10">
              <div className="relative">
                <Image
                  src={qa}
                  alt="Quality Assurance"
                  className="h-96 w-full brightness-50 rounded-md"
                />
                <button className="btn btn-lg btn-circle absolute top-2/4 left-2/4 shadow-md bg-gradient-to-r from-green-500 to-lime-300">
                  <BsFillCaretRightFill />
                </button>
              </div>
            </div>
          </div>
        </div>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
                value={count * parseInt(event.entryFee)}
                readOnly
              />
              <br />
              <button
                onClick={() => toast("Order Successful")}
                className="btn bg-gradient-to-r from-green-400 to-lime-300 my-1"
              >
                Payment <FiArrowUpRight />
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

export default EventDetails;
