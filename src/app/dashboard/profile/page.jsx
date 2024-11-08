"use client";
import React, { useState } from "react";
import pf from "../../../../public/assets/girl.jpg";
import Image from "next/image";
import { FiEdit3, FiMail, FiPhone, FiUser, FiMapPin, FiCalendar } from "react-icons/fi";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-green-400 to-green-600"></div>
        
        <div className="relative px-6 -mt-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative">
              <Image
                src={pf}
                alt="profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
              />
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="absolute bottom-2 right-2 p-2 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-colors"
              >
                <FiEdit3 size={16} />
              </button>
            </div>
            
            <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-900">Rajaul Karim</h1>
              <p className="text-gray-500">Farm Owner</p>
            </div>
          </div>

          <div className="mt-8 pb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <FiUser className="text-green-500" size={20} />
                <div>
                  <label className="text-sm text-gray-500">Full Name</label>
                  <input
                    type="text"
                    value="Rajaul Karim"
                    disabled={!isEditing}
                    className="block w-full bg-transparent border-0 focus:ring-0 p-0 font-medium"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <FiMail className="text-green-500" size={20} />
                <div>
                  <label className="text-sm text-gray-500">Email</label>
                  <input
                    type="email"
                    value="rajaulkarim2810@gmail.com"
                    disabled={!isEditing}
                    className="block w-full bg-transparent border-0 focus:ring-0 p-0 font-medium"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <FiPhone className="text-green-500" size={20} />
                <div>
                  <label className="text-sm text-gray-500">Phone</label>
                  <input
                    type="tel"
                    value="017700000"
                    disabled={!isEditing}
                    className="block w-full bg-transparent border-0 focus:ring-0 p-0 font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <FiMapPin className="text-green-500" size={20} />
                <div>
                  <label className="text-sm text-gray-500">Location</label>
                  <input
                    type="text"
                    value="Dhaka, Bangladesh"
                    disabled={!isEditing}
                    className="block w-full bg-transparent border-0 focus:ring-0 p-0 font-medium"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <FiCalendar className="text-green-500" size={20} />
                <div>
                  <label className="text-sm text-gray-500">Member Since</label>
                  <input
                    type="text"
                    value="January 2023"
                    disabled
                    className="block w-full bg-transparent border-0 focus:ring-0 p-0 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex justify-end space-x-3 pb-4">
              <button 
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
