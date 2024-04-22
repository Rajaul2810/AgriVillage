
import React from "react";
import { HiCash, HiCurrencyBangladeshi, HiUsers } from "react-icons/hi";

const Dashboard = () => {
  return (
    <section>
      <div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className=" bg-white  shadow-md rounded-md w-full h-36 flex justify-around items-center">
            <span className=" bg-green-200 text-green-600 p-2 shadow-xl rounded-md ">
            <HiUsers size={40} />
            </span>
            <div>
              <p className=" text-2xl font-bold text-gray-700">Total Visitors</p>
              <p className=" text-xl font-bold text-gray-800">1000</p>
            </div>
          </div>
          <div className=" bg-white  shadow-md rounded-md w-full h-36 flex justify-around items-center">
            <span className=" bg-indigo-200 text-indigo-600 p-2 shadow-xl rounded-md ">
              <HiCash size={40} />
            </span>
            <div>
              <p className=" text-2xl font-bold text-gray-700">Total Income</p>
              <p className=" text-xl font-bold text-gray-800">10000 tk</p>
            </div>
          </div>
          <div className=" bg-white  shadow-md rounded-md w-full h-36 flex justify-around items-center">
            <span className=" bg-pink-200 text-pink-600 p-2 shadow-xl rounded-md ">
            <HiCurrencyBangladeshi size={40} />
            </span>
            <div>
              <p className=" text-2xl font-bold text-gray-700">Withdrow</p>
              <p className=" text-xl font-bold text-gray-800">5000.45 tk</p>
            </div>
          </div>
          <div className=" bg-white shadow-md rounded-md w-full h-36 flex justify-around items-center">
            <span className=" bg-amber-200 text-amber-600 p-2 shadow-xl rounded-md ">
            <HiCurrencyBangladeshi size={40}/>
            </span>
            <div>
              <p className=" text-2xl font-bold text-gray-700">Balance</p>
              <p className=" text-xl font-bold text-gray-800">5000.23 tk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
