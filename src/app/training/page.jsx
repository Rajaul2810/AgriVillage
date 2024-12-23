"use client";
import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiUsers,
  FiX,
} from "react-icons/fi";
import {
  FaChalkboardTeacher,
  FaLeaf,
  FaSeedling,
  FaSun,
  FaUsers,
  FaWater,
  FaTractor,
  FaRecycle,
  FaFaucet,
  FaTrash,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const Training = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [isComplete, setIsComplete] = useState(false);

  const training = [
    {
      id: 1,
      title: "Urban Farming Basics",
      description:
        "Learn essentials of small-scale urban farming, suitable for home and rooftop setups. Covers soil preparation, plant selection, and maintenance tips for city environments.",
      whatYouLearn: [
        "Fundamentals of starting a small-scale urban farm on balconies or terraces",
        "Techniques for soil preparation, container selection, and efficient use of limited space",
        "Best practices for organic pest control and crop rotation in an urban setting",
      ],
      whyJoin: [
        "Learn how to produce fresh, healthy vegetables right at home",
        "Reduce grocery bills and carbon footprint by growing your own produce",
        "Discover a fulfilling hobby that enhances your green space and improves air quality",
      ],
      date: "2024-11-22",
      duration: "1 day",
      icon: <FaSeedling className="text-4xl text-emerald-600" />,
      seats: 25,
      price: 1500,
      location: "Online via Zoom",
      type: "Online",
      programBrief:
        "The Urban Farming Basics program, held on 22nd November 2024, was organized by SMART-AgriVillage with support from SMART-Trend Digital. The session was conducted by Ms. Sanchita M. Tumpa, Specialist with expertise in Urban Farming. Fifteen participants from diverse sectors attended the workshop, engaging in hands-on learning and discussions aimed at promoting sustainable urban farming practices.",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Rooftop Gardening Workshop",
      description:
        "Practical training on setting up and maintaining rooftop gardens, including container selection, vertical gardening, and efficient space utilization.",
      whatYouLearn: [
        "How to set up a rooftop garden with container and vertical gardening techniques",
        "Tips for growing herbs, vegetables, and flowers in rooftop environments",
        "Maintenance practices for garden longevity in changing weather conditions",
      ],
      whyJoin: [
        "Transform unused rooftop space into a productive garden",
        "Experience therapeutic benefits of gardening and reduce stress",
        "Contribute to urban biodiversity and greenery",
      ],
      date: "2024-12-20",
      duration: "1 day",
      icon: <FaLeaf className="text-4xl text-emerald-500" />,
      seats: 15,
      price: 8000,
      location: "Dhaka",
      type: "Offline",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Composting & Waste Management at Home",
      description:
        "Learn practical methods for composting kitchen waste and managing household waste sustainably, ideal for urban households.",
      whatYouLearn: [
        "Practical methods for turning kitchen scraps into valuable compost",
        "Efficient waste separation and reduction techniques",
        "Sustainable lifestyle practices through eco-friendly waste disposal",
      ],
      whyJoin: [
        "Save money on fertilizers by producing natural compost",
        "Help reduce landfill waste and greenhouse gas emissions",
        "Develop sustainable habits that benefit community and environment",
      ],
      date: "2024-12-27",
      duration: "1 day",
      icon: <FaRecycle className="text-4xl text-emerald-500" />,
      seats: 30,
      price: 2000,
      location: "Online via Google Meet",
      type: "Online",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Organic Farming for Urban Spaces",
      description:
        "Master organic methods for urban environments, including pest management, organic fertilizers, and herb cultivation in limited spaces.",
      whatYouLearn: [
        "Essential organic farming techniques for small urban environments",
        "Natural pest management and organic fertilizer methods",
        "Chemical-free herb and vegetable cultivation techniques",
      ],
      whyJoin: [
        "Grow chemical-free, organic produce for better food quality",
        "Reduce environmental footprint through sustainable agriculture",
        "Take control of your food sources for a healthier lifestyle",
      ],
      date: "2025-01-10",
      duration: "2 days",
      icon: <FaSeedling className="text-4xl text-emerald-600" />,
      seats: 20,
      price: 10000,
      location: "Chattogram",
      type: "Offline",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Hydroponics for Beginners",
      description:
        "Introduction to hydroponic systems suitable for urban spaces, including nutrient solutions, plant selection, and system maintenance.",
      whatYouLearn: [
        "Basics of hydroponic systems and nutrient solutions",
        "Techniques for setting up small-scale hydroponic gardens",
        "System maintenance and troubleshooting skills",
      ],
      whyJoin: [
        "Master soil-free gardening perfect for limited spaces",
        "Learn water conservation techniques for urban farming",
        "Produce fresh vegetables efficiently in controlled settings",
      ],
      date: "2025-02-07",
      duration: "1 day",
      icon: <FaWater className="text-4xl text-cyan-600" />,
      seats: 15,
      price: 2500,
      location: "Online via Zoom",
      type: "Online",
      isCompleted: false,
    },
    {
      id: 6,
      title: "Solar Energy Integration in Urban Farming",
      description:
        "Explore integration of solar energy in urban farming, including solar-powered irrigation and lighting solutions.",
      whatYouLearn: [
        "Setting up solar-powered irrigation systems and lighting",
        "Energy-efficient techniques for sustainable gardening",
        "Renewable energy applications in urban farming",
      ],
      whyJoin: [
        "Gain hands-on experience with renewable energy solutions",
        "Create energy-independent and sustainable urban gardens",
        "Reduce carbon footprint in farming activities",
      ],
      date: "2025-02-28",
      duration: "2 days",
      icon: <FaSun className="text-4xl text-amber-500" />,
      seats: 20,
      price: 5000,
      location: "Online via Zoom",
      type: "Online",
      isCompleted: false,
    },
    {
      id: 7,
      title: "Aquaponics Basics",
      description:
        "Learn about aquaponics - a sustainable method combining fish farming and hydroponics, perfect for city-dwellers.",
      whatYouLearn: [
        "Core principles of aquaponics and closed-loop systems",
        "Setting up small self-sustaining aquaponic systems",
        "Fish and plant maintenance in symbiotic environments",
      ],
      whyJoin: [
        "Master an eco-friendly, innovative farming method",
        "Benefit from both plant and fish production",
        "Develop a sustainable and educational hobby",
      ],
      date: "2025-03-21",
      duration: "1 day",
      icon: <FaWater className="text-4xl text-cyan-600" />,
      seats: 15,
      price: 5000,
      location: "Dhaka",
      type: "Offline",
      isCompleted: false,
    },
    {
      id: 8,
      title: "Sustainable Pest Management",
      description:
        "Focuses on natural and eco-friendly approaches to controlling pests in urban farming, using sustainable, chemical-free methods.",
      whatYouLearn: [
        "Identify and manage common urban garden pests using organic solutions",
        "Techniques for creating and applying natural pest repellents",
        "Tips for maintaining plant health and resilience against pests without chemicals",
      ],
      whyJoin: [
        "Reduce the need for harmful pesticides, keeping your plants and the environment healthy",
        "Learn sustainable practices that align with eco-friendly and organic gardening principles",
        "Protect your homegrown produce from pests in a safe and natural way",
      ],
      date: "2025-04-11 - 2025-04-12",
      duration: "2 days",
      icon: <FaLeaf className="text-4xl text-emerald-500" />,
      seats: 25,
      price: 2500,
      location: "Online via Google Meet",
      type: "Online",
      isCompleted: false,
    },
    {
      id: 9,
      title: "Community Farming Workshop",
      description:
        "Explores collaborative farming techniques that promote community engagement and shared gardening spaces.",
      whatYouLearn: [
        "How to establish and manage a community garden for shared use",
        "Techniques for organizing shared gardening responsibilities",
        "Benefits of community farming, including social, economic, and environmental impacts",
      ],
      whyJoin: [
        "Connect with others in your community who share a passion for urban farming",
        "Develop skills for managing shared spaces and fostering community relationships",
        "Create a sustainable, collaborative urban farming model",
      ],
      date: "2025-04-25",
      duration: "1 day",
      icon: <FaUsers className="text-4xl text-emerald-500" />,
      seats: 30,
      price: 1500,
      location: "Online via Google Meet",
      type: "Online",
      isCompleted: false,
    },
    {
      id: 10,
      title: "Advanced Farming Technologies",
      description:
        "Provides insights into modern sustainable farming technologies and their applications in urban farming.",
      whatYouLearn: [
        "Introduction to smart agriculture, including automation and data-driven farming",
        "Techniques for using technology to improve yield and efficiency in urban settings",
        "Overview of recent advances in sustainable agriculture suited to urban contexts",
      ],
      whyJoin: [
        "Stay updated with cutting-edge farming technology and practices",
        "Learn practical applications of technology that can benefit your urban garden",
        "Boost your productivity and environmental responsibility through modern techniques",
      ],
      date: "2025-05-02 - 2025-05-10",
      duration: "4 days",
      icon: <FaTractor className="text-4xl text-emerald-500" />,
      seats: 20,
      price: 12000,
      location: "Online via Zoom & In-Person",
      type: "Hybrid",
      isCompleted: false,
    },
    {
      id: 11,
      title: "Irrigation Systems Mastery",
      description:
        "Advanced techniques in water management and irrigation, ideal for efficient urban farming.",
      whatYouLearn: [
        "Methods for setting up efficient irrigation systems tailored for urban gardens",
        "Water conservation techniques, including drip and micro-irrigation",
        "Strategies for managing water resources sustainably in small spaces",
      ],
      whyJoin: [
        "Conserve water, a critical resource in urban areas, while maximizing plant growth",
        "Implement advanced irrigation methods that reduce maintenance and water usage",
        "Develop water-efficient practices that benefit both your garden and the environment",
      ],
      date: "2025-05-24 - 2025-05-31",
      duration: "3 days",
      icon: <FaFaucet className="text-4xl text-blue-500" />,
      seats: 18,
      price: 5000,
      location: "Dhaka",
      type: "Offline",
      isCompleted: false,
    },
    {
      id: 12,
      title: "Agricultural Waste Management",
      description:
        "Teaches sustainable waste management techniques for agricultural and household waste recycling.",
      whatYouLearn: [
        "Strategies for managing agricultural and organic waste effectively",
        "Techniques for composting and recycling agricultural by-products",
        "Methods to create a zero-waste lifestyle in urban farming",
      ],
      whyJoin: [
        "Reduce waste output and contribute to a healthier environment",
        "Learn eco-friendly ways to recycle agricultural and household waste",
        "Improve your garden's soil health with organic, recycled material",
      ],
      date: "2025-06-13 - 2025-06-14",
      duration: "2 days",
      icon: <FaTrash className="text-4xl text-gray-600" />,
      seats: 22,
      price: 5000,
      location: "Online via Zoom",
      type: "Online",
      isCompleted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-6 mb-16">
          <FaChalkboardTeacher className="text-6xl text-emerald-600" />
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Available Workshops
          </h2>
          <p className="text-gray-600 text-center max-w-2xl">
            Join our comprehensive training programs designed to help you master
            urban farming and sustainable agriculture techniques.
          </p>
        </div>

        {/* Training Workshops */}
        <div className="flex justify-center gap-4 px-4 mb-8">
          <button
            onClick={() => setIsComplete(false)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              isComplete === false
                ? "bg-green-500 text-white shadow-lg scale-105"
                : "bg-gray-50 text-gray-600 hover:bg-green-50 border border-green-500"
            }`}
          >
            <FaCalendarAlt className="text-white" />
            Upcoming Training
          </button>
          <button
            onClick={() => setIsComplete(true)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
              isComplete === true
                ? "bg-green-500 text-white shadow-lg scale-105"
                : "bg-gray-50 text-gray-600 hover:bg-green-50 border border-green-500"
            }`}
          >
            <FaClock className="text-white" />
            Completed Training
          </button>
        </div>

        <div className="w-11/12 mx-auto md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {training.map(
            (workshop) =>
              workshop.isCompleted == isComplete && (
                <div
                  key={workshop.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {workshop.icon}
                      </div>
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                          workshop.type === "Online"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {workshop.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {workshop.description}
                    </p>
                    <div className="space-y-3 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <FiCalendar className="text-emerald-500" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <FiClock className="text-emerald-500" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <FiUsers className="text-emerald-500" />
                        <span>{workshop.seats} seats available</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <FiMapPin className="text-emerald-500" />
                        <span>{workshop.location}</span>
                      </div>
                    </div>
                    {workshop?.isCompleted == false ? (
                      <div className="mt-6 flex items-center justify-between">
                        <p className="text-2xl font-bold text-emerald-600">
                          ৳{workshop.price}
                        </p>
                        <button
                          onClick={() => setSelectedWorkshop(workshop)}
                          className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center gap-2 font-medium"
                        >
                          Enroll Now
                          <FiArrowUpRight />
                        </button>
                      </div>
                    ) : (
                      <div className="mt-6 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedWorkshop(workshop)}
                          className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center gap-2 font-medium"
                        >
                          View Details
                          <FiArrowUpRight />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      {/* Workshop Details Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  {selectedWorkshop.icon}
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedWorkshop.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600">{selectedWorkshop.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    What You&apos;ll Learn
                  </h4>
                  <ul className="space-y-2">
                    {selectedWorkshop.whatYouLearn.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-emerald-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Why Join
                  </h4>
                  <ul className="space-y-2">
                    {selectedWorkshop.whyJoin.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-emerald-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                    <FiCalendar className="text-emerald-500" />
                    <span>Date: {selectedWorkshop.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiClock className="text-emerald-500" />
                    <span>Duration: {selectedWorkshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-emerald-500" />
                    <span>Location: {selectedWorkshop.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiUsers className="text-emerald-500" />
                    <span>Available Seats: {selectedWorkshop.seats}</span>
                  </div>
                </div>

                {selectedWorkshop?.isCompleted == true && (
                  <div className="flex items-center justify-between pt-4 border-t">
                    <p className="text-gray-600">
                      {selectedWorkshop.programBrief}
                    </p>
                  </div>
                )}

                {selectedWorkshop?.isCompleted == false && (
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">Course Fee</p>
                      <p className="text-3xl font-bold text-emerald-600">
                        ৳{selectedWorkshop.price}
                      </p>
                    </div>
                    <a
                      href={`https://shop.bkash.com/ayal-corp-limitedrm57578/paymentlink`}
                      target="_blank"
                    >
                      <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium">
                        Register Now
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Training;
