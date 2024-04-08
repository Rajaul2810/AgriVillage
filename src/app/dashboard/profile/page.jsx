import React from "react";
import pf from "../../../../public/assets/girl.jpg";
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";

const Profile = () => {
  return (
    <div className=" flex justify-center">
      <div className=" bg-white p-5 rounded-md shadow-sm">
        <div className=" relative flex justify-center">
          <Image src={pf} alt="profile" className=" rounded-full w-40 h-40 " />
           <span className=" btn btn-circle absolute bottom-0 ms-10 -mb-5"><FiEdit3/></span>
        </div>
        <div className="my-10">
          <input type="text" value="Rajaul Karim" disabled className=" border p-3 rounded-md mb-2" /> <br />
          <input type="text" value="rajaulkarim2810@gmail.com" disabled className=" border p-3 rounded-md"/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
