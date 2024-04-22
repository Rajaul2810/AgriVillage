import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { FiDelete, FiPlusCircle } from "react-icons/fi";

const OrderList = () => {
  return (
    <div className="bg-white p-5 rounded-md shadow-sm">
      <div>
        <button className=" btn flex gap-2 rounded-3xl bg-green-300 text-xs">
          <FiPlusCircle size={18} /> Add Project
        </button>
        <button></button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Address</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" text-gray-700">
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {/* <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th className=" flex gap-5 items-center">
                <button className=" btn btn-sm btn-circle bg-green-200 hover:bg-green-400 text-green-600 border-green-500 hover:border-green-500 shadow-md">
                  <CiEdit />
                </button>
                <button className=" btn btn-sm btn-circle bg-red-200 hover:bg-red-300 text-red-600 border-red-500 hover:border-red-500 shadow-md">
                  <CiTrash />
                </button>
              </th>
            </tr>
            {/* row 2 */}

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {/* <img
                        src="/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th className=" flex gap-5 items-center">
                <button className=" btn btn-sm btn-circle bg-green-200 hover:bg-green-400 text-green-600 border-green-500 hover:border-green-500 shadow-md">
                  <CiEdit />
                </button>
                <button className=" btn btn-sm btn-circle bg-red-200 hover:bg-red-300 text-red-600 border-red-500 hover:border-red-500 shadow-md">
                  <CiTrash />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
