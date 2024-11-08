import React from 'react';
import { FaUser, FaUsers, FaHeart, FaHome, FaBuilding } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const TourPackage = () => {
  const packages = [
    {
      id: 1,
      type: "Single",
      icon: <FaUser className="text-3xl text-blue-500" />,
      price: 99,
      color: "blue",
      features: [
        "Full day farm tour",
        "Organic lunch included", 
        "1 Agricultural workshop",
        "Farm fresh goodie bag",
        "Photo opportunities"
      ]
    },
    {
      id: 2, 
      type: "Couple",
      icon: <FaHeart className="text-3xl text-pink-500" />,
      price: 179,
      color: "pink",
      features: [
        "Romantic farm tour for two",
        "Candlelit organic dinner",
        "2 Agricultural workshops",
        "Couple photo session",
        "Farm fresh couple hamper"
      ]
    },
    {
      id: 3,
      type: "Family",
      icon: <FaHome className="text-3xl text-green-500" />,
      price: 299,
      color: "green", 
      features: [
        "Family farm adventure (4 members)",
        "Kids farming activities",
        "Family lunch & snacks",
        "Family photo session",
        "Take-home farming kit"
      ]
    },
    {
      id: 4,
      type: "Group",
      icon: <FaUsers className="text-3xl text-purple-500" />,
      price: 599,
      color: "purple",
      features: [
        "Group tour (10 people)",
        "Team building activities",
        "Buffet meals included",
        "Group workshops",
        "Group merchandise"
      ]
    },
    {
      id: 5,
      type: "Corporate",
      icon: <FaBuilding className="text-3xl text-orange-500" />,
      price: 999,
      color: "orange",
      features: [
        "Customized corporate program",
        "Conference facilities",
        "Premium catering",
        "Team activities",
        "Corporate gifts"
      ]
    }
  ];

  return (
    <div className="py-16 relative overflow-hidden">
      {/* SVG Background Patterns */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" className="opacity-5">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Agri-Tour Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience agriculture like never before with our carefully curated tour packages designed for every type of visitor
          </p>
        </div>

        <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{borderTop: `4px solid ${pkg.color === 'blue' ? '#3B82F6' : pkg.color === 'pink' ? '#EC4899' : pkg.color === 'green' ? '#22C55E' : pkg.color === 'purple' ? '#A855F7' : '#F97316'}`}}
            >
              <div style={{backgroundColor: pkg.color === 'blue' ? '#EFF6FF' : pkg.color === 'pink' ? '#FCE7F3' : pkg.color === 'green' ? '#F0FDF4' : pkg.color === 'purple' ? '#FAF5FF' : '#FFF7ED'}} className="p-6 text-center">
                {pkg.icon}
                <h3 className="text-xl font-bold text-gray-800 mt-4">{pkg.type} Package</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-800">${pkg.price}</span>
                  <span className="text-gray-500">/{pkg.type}</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <BsCheckCircleFill style={{color: pkg.color === 'blue' ? '#3B82F6' : pkg.color === 'pink' ? '#EC4899' : pkg.color === 'green' ? '#22C55E' : pkg.color === 'purple' ? '#A855F7' : '#F97316'}} className="flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="#"
                  className="mt-6 block w-full py-3 px-6 text-center text-white rounded-lg transition-colors duration-300 bg-green-500 hover:bg-green-600"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackage;