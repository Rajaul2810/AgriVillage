"use client";
import Image from "next/image";
import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import banana from "../../../public/assets/banana.jpg";
import papaya from "../../../public/assets/papaya.jpg";
import malta from "../../../public/assets/malta.jpg";
import pomegranate from "../../../public/assets/pomegranate.jpg";
import watermelon from "../../../public/assets/watermelon.jpg";
import strawberries from "../../../public/assets/strawberries.jpg";
import productIcon from "../../../public/assets/head/productIcon.png";

const products = [
  {
    id: 1,
    name: "তরমুজ",
    price: "130.00",
    photo: watermelon,
  },
  {
    id: 2,
    name: "আনার",
    price: "230.00",
    photo: pomegranate,
  },
  {
    id: 3,
    name: "কলা",
    price: "130.00",
    photo: banana,
  },
  {
    id: 4,
    name: "স্ট্রবেরি",
    price: "150.00",
    photo: strawberries,
  },
  {
    id: 5,
    name: "মালটা",
    price: "130.00",
    photo: malta,
  },
  {
    id: 6,
    name: "পেপে",
    price: "180.00",
    photo: papaya,
  },
];

const Products = () => {
  return (
    <section>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat">
        <p className=" text-white text-2xl font-bold pt-5">PRODUCT PAGE</p>
      </div>
      <div className="pt-12 pb-12 bg-gray-50">
        <div className=" flex justify-center">
          <Image src={productIcon} alt="pro" height={100} width={100} />
        </div>
        <h1 className=" text-center text-4xl font-extrabold">
        অর্গানিক <span className=" text-green-500">প্রোডাক্ট</span>
        </h1>
        <div className=" flex justify-center mt-12">
          <div className=" gap-4 w-11/12 md:w-3/4 sm:w-full  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
            {products.map((item) => (
              <div
                key={item.id}
                className="items-center p-3 shadow-md  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500"
              >
                <div className=" flex justify-between items-center ">
                  <p className=" bg-gradient-to-r from-green-600 to-lime-400 py-1 px-2 font-semibold mb-2 rounded-full text-white text-[6px]">
                    Fresh
                  </p>
                  <button className=" bg-gray-200 rounded-full px-2 mb-2 py-2">
                    <BsHeartFill color="green" size={10} />
                  </button>
                </div>
                <Image
                  className=" rounded-lg place-self-center "
                  src={item.photo}
                  alt="h"
                  height={100}
                  width={400}
                />
                <hr className=" text-gray-300 mt-2" />
                <h1 className=" font-bold pt-5">{item.name}</h1>
                <div className=" flex items-center text-gray-600">
                  <TbCurrencyTaka size={15} />
                  <p className=" text-xs font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
