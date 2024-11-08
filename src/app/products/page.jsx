
import Image from "next/image";
import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { products } from "../libs/Data.js";
import productIcon from "../../../public/assets/head/productIcon.png";
import Link from "next/link";


const Products = () => {
  return (
    <section>
      <div className="pt-12 pb-12 bg-gray-50">
        <div className=" flex justify-center">
          <Image src={productIcon} alt="pro" height={100} width={100} />
        </div>
        <h1 className=" text-center text-4xl font-extrabold">
        Organic <span className=" text-green-500">Products</span>
        </h1>
        <div className=" flex justify-center mt-12">
          <div className=" gap-4 w-11/12 md:w-3/4 sm:w-full  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
            {products.map((item) => (
              <Link href={`/products/${item.id}`}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
