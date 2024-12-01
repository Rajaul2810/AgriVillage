"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaBus,
  FaHotel,
  FaCutlery,
  FaUserFriends,
  FaCalendarCheck,
} from "react-icons/fa";
import { FiFeather } from "react-icons/fi";

import fram1 from "../../../public/cus/Farm1.jpg";
import fram2 from "../../../public/cus/Farm2.jpg";
import fram3 from "../../../public/cus/Farm3.jpg";
import fram4 from "../../../public/cus/Image1.jpg";
import fram5 from "../../../public/cus/Image2.jpg";
import fram6 from "../../../public/cus/Image3.jpg";
import fram7 from "../../../public/cus/Image4.jpg";
import fram8 from "../../../public/cus/Image5.jpg";
import fram9 from "../../../public/cus/Image6.jpg";
import fram10 from "../../../public/cus/Image7.jpg";
import fram11 from "../../../public/cus/Image8.jpg";
import Image from "next/image";

const images = [
  fram1,
  fram2,
  fram3,
  fram4,
  fram6,
  fram7,
  fram8,
  fram9,
  fram10,
  fram11,
];

const itinerary = [
  {
    day: 1,
    morning: [
      "Start with a scenic ferry or road journey to Barishal.",
      "Visit the Oxford Mission Church (Lal Girja): A 121-year-old architectural marvel featuring Gothic and Greek influences.",
      "Explore BM College Campus: Walk through the lush grounds and learn about poet Jibanananda Das's legacy.",
    ],
    afternoon: [
      "Tour the Lakutia Zamindar Bari: A 300-year-old estate showcasing Bengal’s rich history and architectural elegance.",
      "Enjoy a traditional Bangladeshi lunch.",
    ],
    evening: [
      "Relax by the Kirtankhola Riverbank: Witness a stunning sunset, enjoy local snacks, and breathe in the tranquil atmosphere.",
    ],
  },
  {
    day: 2,
    morning: [
      "Start with breakfast at the farmstay or hotel.",
      "Explore 12 Awliya’s Shrine: A historical site symbolizing unity and spiritual harmony.",
      "Visit nearby eco-friendly agro farms to experience sustainable farming.",
    ],
    afternoon: [
      "Enjoy a farm-to-table lunch at a local agro-tourism farm.",
      "Participate in activities like fruit picking or learning about modern farming techniques.",
    ],
    evening: ["Enjoy local foods."],
  },
  {
    day: 3,
    morning: [
      "After breakfast, head to Matobbarer Haat: A bustling local market reflecting rural life.",
      "Visit Kajlakathi Agro Farm: Learn about modern farming practices, pick fresh fruits, and experience sustainable agriculture.",
    ],
    afternoon: [
      "Savor a farm-to-table lunch with freshly prepared local dishes.",
      "Participate in family-friendly activities such as fruit picking and eco-workshops.",
    ],
    evening: [
      "Return to the farmstay for relaxation and dinner under the stars.",
      "Overnight stay at the eco-farm.",
    ],
  },
];

const tourInclusions = [
  "Transportation: Round-trip bus and launch (discount available on bus tickets through SMART-AgriVillage).",
  "Accommodation: 2 night in Barishal (hotel or eco-farmstay).",
  "Meals: Breakfast, lunch, and dinner for both days.",
  "Tour Guide: Experienced guide to enhance your visit with insightful stories and facts.",
  "Activities: Farm visits, fruit picking, and historical site tours.",
];

const whyChooseSMARTAgriVillage = [
  "Hassle-Free Ticketing",
  "Immersive Experiences with agro-tourism, history and local culture.",
  "Customizable Packages for individuals, families and corporate groups.",
  "Dedicated Tour Guide",
];

const Itinerary = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className=" w-11/12 md:w-3/4 mx-auto">
        {itinerary.map((day, index) => (
          <ul
            className="timeline timeline-vertical my-10 text-black"
            key={index}
          >
            <li>
              <div className="timeline-start timeline-box rounded-md shadow-lg">
                <p className=" bg-yellow-400 -mt-6 p-1 rounded-sm shadow-lg w-fit mb-3 font-bold">
                  Day {day.day} Morning
                </p>
                <div>
                  {day.morning.map((item, index) => (
                    <li key={index}>
                      <p>{item}</p>
                    </li>
                  ))}
                </div>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className=" timeline-end timeline-box rounded-md shadow-lg">
                <p className=" bg-yellow-400 -mt-6 p-1 rounded-sm shadow-lg w-fit mb-3 font-bold">
                  Day {day.day} Afternoon
                </p>
                <div>
                  {day.afternoon.map((item, index) => (
                    <li key={index}>
                      <p>{item}</p>
                    </li>
                  ))}
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box rounded-md shadow-lg">
                <p className=" bg-yellow-400 -mt-6 p-1 rounded-sm shadow-lg w-fit mb-3 font-bold">
                  Day {day.day} Evening
                </p>
                <div>
                  {day.evening.map((item, index) => (
                    <li key={index}>
                      <p>{item}</p>
                    </li>
                  ))}
                </div>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

const TourInclusions = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-lg font-bold">Tour Inclusions</h2>
      <ul>
        {tourInclusions.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <FiFeather size={20} className="text-green-500" />
            <p className="text-lg">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const WhyChooseSMARTAgriVillage = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-lg font-bold">Why Choose SMART-AgriVillage?</h2>
      <ul>
        {whyChooseSMARTAgriVillage.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <FiFeather size={20} className="text-green-500" />
            <p className="text-lg">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="w-11/12 md:w-3/4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Explore Barishal: A 3-Day Tour Package
            </h1>
            <p className="text-lg">
              Discover the &quot;Venice of the East&quot; Barishal, with its
              serene rivers, lush greenery, and historical landmarks. Our 3-day
              tour offers an immersive experience with a perfect blend of
              nature, culture, and relaxation.
            </p>
            <a href="https://shop.bkash.com/ayal-corp-limitedrm57578/paymentlink/">
              <button className="btn bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
                Book Now
              </button>
            </a>
          </div>
          <div>
            <Image
              src={fram5}
              alt="fram1"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-5">
          {images.map((item, index) => (
            <Image
              src={item}
              alt="fram1"
              className="rounded-md w-full h-40 object-cover"
              key={index}
            />
          ))}
        </div>
        <Itinerary />
        <TourInclusions />
        <WhyChooseSMARTAgriVillage />
      </div>
    </div>
  );
};

export default Page;
