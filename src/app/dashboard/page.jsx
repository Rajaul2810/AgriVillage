import React from "react";
import { HiCash } from "react-icons/hi";
import { FaChartLine, FaMoneyBillWave, FaWallet, FaUserFriends } from "react-icons/fa";

const Dashboard = () => {
  return (
    <section className="p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Visitors Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
                  <FaUserFriends className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-500 text-sm font-semibold">+12.5%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">Total Visitors</h3>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-bold text-gray-800">1,000</p>
                <span className="ml-2 text-sm text-gray-500">users</span>
              </div>
            </div>
            <div className="bg-blue-50 px-6 py-3">
              <div className="flex items-center text-sm text-blue-600">
                <FaChartLine className="mr-2" />
                <span>Increased by 25% this month</span>
              </div>
            </div>
          </div>

          {/* Total Income Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg">
                  <FaMoneyBillWave className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-500 text-sm font-semibold">+8.2%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">Total Income</h3>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-bold text-gray-800">৳10,000</p>
                <span className="ml-2 text-sm text-gray-500">BDT</span>
              </div>
            </div>
            <div className="bg-green-50 px-6 py-3">
              <div className="flex items-center text-sm text-green-600">
                <FaChartLine className="mr-2" />
                <span>Revenue up 15% from last month</span>
              </div>
            </div>
          </div>

          {/* Withdrawal Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg">
                  <HiCash className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-500 text-sm font-semibold">-5.4%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">Withdrawal</h3>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-bold text-gray-800">৳5,000.45</p>
                <span className="ml-2 text-sm text-gray-500">BDT</span>
              </div>
            </div>
            <div className="bg-purple-50 px-6 py-3">
              <div className="flex items-center text-sm text-purple-600">
                <FaChartLine className="mr-2" />
                <span>Last withdrawal 2 days ago</span>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 rounded-lg">
                  <FaWallet className="w-6 h-6 text-white" />
                </div>
                <span className="text-amber-500 text-sm font-semibold">+3.7%</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">Balance</h3>
              <div className="flex items-baseline mt-2">
                <p className="text-2xl font-bold text-gray-800">৳5,000.23</p>
                <span className="ml-2 text-sm text-gray-500">BDT</span>
              </div>
            </div>
            <div className="bg-amber-50 px-6 py-3">
              <div className="flex items-center text-sm text-amber-600">
                <FaChartLine className="mr-2" />
                <span>Current available balance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
