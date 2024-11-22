import React from 'react';
import { FaLightbulb, FaRocket, FaBullseye, FaHandshake, FaLeaf, FaSeedling } from 'react-icons/fa';

const MissionVision = () => {
  const sections = [
    {
      icon: <FaBullseye className="text-4xl" />,
      title: 'Our Mission',
      description: 'To revolutionize sustainable energy solutions through innovative technology, making clean energy accessible and affordable for everyone while contributing to a greener future.'
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Our Vision',
      description: 'To be the global leader in sustainable energy transformation, creating a world where renewable energy powers communities and preserves our planet for future generations.'
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: 'Sustainability Focus',
      description: 'We prioritize eco-friendly practices, renewable resources, and zero-emission technologies to minimize environmental impact and maximize energy efficiency for a sustainable tomorrow.'
    },
    {
      icon: <FaSeedling className="text-4xl" />,
      title: 'Green Energy Solutions',
      description: 'Our innovative green energy solutions include solar power systems, wind energy integration, and smart grid technologies that reduce carbon footprint and promote clean energy adoption.'
    },
    {
      icon: <FaRocket className="text-4xl" />,
      title: 'Core Values',
      description: 'Innovation, Sustainability, Integrity, Excellence, and Environmental Stewardship guide every decision we make and every solution we deliver.'
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Our Commitment',
      description: 'We are committed to developing cutting-edge green technologies, fostering partnerships, and creating lasting positive impact on the environment and society.'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-green-50 to-lime-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-900 mb-4">
            Mission & Vision
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving sustainable innovation and environmental stewardship through purposeful action and visionary leadership
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-green-600 to-lime-500 p-5 rounded-full text-white mb-6">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-700 text-center text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
