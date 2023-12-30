"use client";
import React, { useState } from "react";
import { products } from "@/app/libs/Data.js";
import Image from "next/image";
import {
  TbCurrencyTaka,
  TbInfoCircle,
  TbMessage,
  TbMinus,
  TbPlus,
  TbShoppingCart,
  TbVideo,
} from "react-icons/tb";

import qa from "../../../../public/assets/qa.jpg";
import { BsFillCaretRightFill } from "react-icons/bs";

const ProductDtails = ({ params }) => {
  const [change, setChange] = useState(1);
  const [taggle, setTaggle] = useState("des");
  if (change < 1) {
    setChange(1);
  }

  const product = products.find((pd) => pd.id == params.id);
  return (
    <section className=" bg-slate-100 ">
      <div className="page_banner h-56 relative grid place-content-end bg-cover bg-center bg-no-repeat ">
        <p className=" text-white text-2xl font-semibold pt-5">
          Product Details page
        </p>
      </div>
      <div className=" flex justify-center py-10">
        <div className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <Image
              src={product.photo}
              alt={product.name}
              className=" h-96 w-full"
            />
          </div>
          <div>
            <p>
              Availability:
              <span className=" text-green-500 font-bold"> In Stock</span>
            </p>
            <h1 className=" font-bold text-3xl py-2">{product.name}</h1>
            <p className=" text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              doloribus repudiandae saepe odio veritatis dolores asperiores
              facere tenetur provident iure!
            </p>
            <div className=" flex items-center text-green-600 py-2">
              <TbCurrencyTaka size={25} />
              <p className=" text-lg font-semibold">{product.price}</p>
            </div>
            <div className=" flex items-center gap-10 border bg-white shadow-md rounded-md p-3 w-fit">
              <button onClick={() => setChange(change - 1)} className="btn">
                <TbMinus size={20} />
              </button>
              <p className=" font-bold text-lg">{change}</p>
              <button onClick={() => setChange(change + 1)} className="btn ">
                <TbPlus size={20} />
              </button>
            </div>
            <button className="btn bg-gradient-to-r from-green-500 to-lime-400 my-5">
              {" "}
              Add to Cart <TbShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className=" flex justify-center py-10">
        <div className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
          <div>
            <div className=" flex gap-5">
              <button
                onClick={() => setTaggle("des")}
                className={`btn bg-white rounded-2xl ${
                  taggle == "des"
                    ? "bg-gradient-to-r from-green-500 to-lime-400"
                    : ""
                }`}
              >
                <TbInfoCircle />
                Description
              </button>
              <button
                onClick={() => setTaggle("comm")}
                className={`btn bg-white rounded-2xl ${
                  taggle == "comm"
                    ? "bg-gradient-to-r from-green-500 to-lime-400"
                    : ""
                }`}
              >
                <TbMessage />
                Comments
              </button>
            </div>
            {taggle == "des" && (
              <p className=" py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                molestiae ipsum exercitationem dolor doloremque ipsa reiciendis
                repudiandae, ducimus quis assumenda!
              </p>
            )}
            {taggle == "comm" && (
              <p className=" py-3">
                A Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                molestiae ipsum exercitationem dolor doloremque ipsa reiciendis
                repudiandae, ducimus quis assumenda!
              </p>
            )}
          </div>
          <div className="relative">
            <Image src={qa} alt="qa" className=" h-96 w-full brightness-50 " />
            <button className=" btn btn-lg btn-circle absolute top-2/4 left-2/4 shadow-md  bg-gradient-to-r from-green-500 to-lime-300">
              <BsFillCaretRightFill />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDtails;
