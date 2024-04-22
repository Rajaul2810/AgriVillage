import React from "react";
import pf from "../../../../public/assets/girl.jpg";
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="bg-white p-5 rounded-md shadow-sm">
      <div className=" flex justify-center">
        <div className=" ">
          <div className=" relative flex justify-center">
            <Image
              src={pf}
              alt="profile"
              className="object-cover h-52 w-52 rounded-full"
            />
            <span className=" btn btn-sm btn-circle absolute bottom-3 right-6 border-1 border-green-400 bg-green-500 hover:bg-green-600">
              <FiEdit3 />
            </span>
          </div>
        </div>
      </div>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-black">
        <div>
          <label>Full Name</label> <br />
          <input
            type="text"
            value="Rajaul Karim"
            disabled
            className=" border p-3 rounded-md mb-2 w-full"
          />
        </div>
        <div>
          <label>Email</label> <br />
          <input
            type="text"
            value="rajaulkarim2810@gmail.com"
            disabled
            className=" border p-3 rounded-md w-full"
          />
        </div>
        <div>
          <label>Phone</label><br />
          <input
            type="number"
            value="017700000"
            disabled
            className=" border p-3 rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
