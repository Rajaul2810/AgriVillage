"use client"
import React, { useState } from 'react'
import { FiArrowUpRight, FiMapPin, FiClock, FiCalendar, FiUsers } from "react-icons/fi";
import { FaChalkboardTeacher, FaLeaf, FaSeedling, FaSun, FaUsers, FaWater, FaTractor, FaRecycle } from 'react-icons/fa'

const Training = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const workshops = [
    {
      id: 1,
      title: "Organic Farming Basics",
      description: "Learn fundamental techniques of organic farming and sustainable agriculture practices",
      date: "2024-02-15",
      duration: "2 days",
      icon: <FaSeedling className="text-4xl text-green-600" />,
      seats: 20,
      price: 150,
      location: "Online via Zoom",
      type: "Online"
    },
    {
      id: 2, 
      title: "Solar Energy for Agriculture",
      description: "Explore how to integrate solar power systems in farming operations",
      date: "2024-02-20", 
      duration: "3 days",
      icon: <FaSun className="text-4xl text-yellow-500" />,
      seats: 15,
      price: 200,
      location: "Green Tech Center, New York",
      type: "Offline"
    },
    {
      id: 3,
      title: "Sustainable Pest Management",
      description: "Natural and eco-friendly approaches to pest control in farming",
      date: "2024-02-25",
      duration: "2 days",
      icon: <FaLeaf className="text-4xl text-green-500" />,
      seats: 25,
      price: 175,
      location: "Online via Google Meet",
      type: "Online"
    },
    {
      id: 4,
      title: "Community Farming Workshop",
      description: "Learn collaborative farming techniques and community engagement",
      date: "2024-03-01",
      duration: "1 day",
      icon: <FaUsers className="text-4xl text-blue-500" />,
      seats: 30,
      price: 100,
      location: "Community Garden, Chicago",
      type: "Offline"
    },
    {
      id: 5,
      title: "Advanced Farming Technologies",
      description: "Modern sustainable farming technologies and smart agriculture",
      date: "2024-03-05",
      duration: "4 days",
      icon: <FaChalkboardTeacher className="text-4xl text-purple-500" />,
      seats: 20,
      price: 250,
      location: "Online via Zoom",
      type: "Online"
    },
    {
      id: 6,
      title: "Irrigation Systems Mastery",
      description: "Advanced techniques in water management and irrigation systems",
      date: "2024-03-10",
      duration: "3 days",
      icon: <FaWater className="text-4xl text-blue-600" />,
      seats: 18,
      price: 225,
      location: "Agricultural Institute, Dallas",
      type: "Offline"
    },
    {
      id: 7,
      title: "Farm Equipment Operation",
      description: "Hands-on training with modern farming equipment and machinery",
      date: "2024-03-15",
      duration: "5 days",
      icon: <FaTractor className="text-4xl text-red-500" />,
      seats: 12,
      price: 300,
      location: "Farm Tech Center, Houston",
      type: "Offline"
    },
    {
      id: 8,
      title: "Agricultural Waste Management",
      description: "Learn effective techniques for managing and recycling agricultural waste",
      date: "2024-03-20",
      duration: "2 days",
      icon: <FaRecycle className="text-4xl text-green-500" />,
      seats: 22,
      price: 175,
      location: "Online via Zoom",
      type: "Online"
    }
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat">
        <p className="text-white text-2xl font-bold pt-5">TRAINING PAGE</p>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-4">
          <FaChalkboardTeacher className="text-5xl text-green-600" />
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Available Workshops</h2>
        </div>
        
        <div className="w-11/12 mx-auto md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex justify-center">
                  {workshop.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${workshop.type === 'Online' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                  {workshop.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{workshop.title}</h3>
              <p className="text-gray-600 mb-4">{workshop.description}</p>
              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FiCalendar className="text-green-500" />
                  <span>Date: {workshop.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FiClock className="text-green-500" />
                  <span>Duration: {workshop.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FiUsers className="text-green-500" />
                  <span>Available Seats: {workshop.seats}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FiMapPin className="text-green-500" />
                  <span>{workshop.location}</span>
                </div>
                <p className="text-lg font-bold text-green-600 mt-2">${workshop.price}</p>
                <button 
                  onClick={() => setSelectedWorkshop(workshop)}
                  className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-md hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Join Workshop
                  <FiArrowUpRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Training