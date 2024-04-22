import Image from "next/image";
import React from "react";
import { FiStar } from "react-icons/fi";

const ProjectReview = ({ reviews }) => {
  return (
    <div>
      <div className=" flex justify-center pt-10 pb-10">
        <div className=" w-11/12 gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className=" shadow-sm rounded-md p-3 bg-white h-fit text-black"
              >
                <p className=" text-xs text-justify pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  reiciendis aperiam expedita doloremque perferendis incidunt
                  distinctio neque, corporis non iusto?
                </p>
                <hr />
                <div className=" flex justify-between items-center">
                  <Image
                    src={review.photo}
                    alt=""
                    className=" rounded-full shadow-sm h-12 w-12"
                  />
                  <div className="">
                    <h1 className=" text-md font-bold">Rajaul Hira</h1>
                    <p className=" text-sm text-gray-700">hira@gmail.com</p>
                    <p className=" text-yellow-500 flex">
                      <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className=" shadow-sm p-3 h-fit bg-white rounded-md">
            <div>
              <p>Message</p>
              <textarea
                className="textarea textarea-primary w-full max-w-xs"
                placeholder="message"
              ></textarea>
            </div>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
                checked
              />
            </div>
            <button className="btn bg-yellow-300 block mt-5">Submit</button>
          </div> */}
      </div>
    </div>
  );
};

export default ProjectReview;
