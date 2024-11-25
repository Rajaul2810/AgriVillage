"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { products } from "../libs/Data.js";
import productIcon from "../../../public/assets/head/productIcon.png";
import Link from "next/link";
import { FaTractor, FaUser, FaWeightHanging } from "react-icons/fa";
import { toast } from "react-toastify";
import { StoreContext } from "../context/index.js";

const FeatureProducts = () => {
  const { cartData, setCartData } = useContext(StoreContext);
  const { wishlistData, setWishlistData } = useContext(StoreContext);

  const featuredProducts = products.filter((item) => item.isFeatured);

  const toggleWishlist = (productId) => {
    setWishlistData((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
    toast.success("Add to wishlist Successfully");
  };

  const handleCart = (product) => {
    const newData = { product };
    setCartData([...cartData, newData]);
    toast.success("Add to cart Successfully");
  };

  return (
    <section>
      <div className="pt-12 pb-12 bg-gray-50">
        <div className="flex justify-center">
          <Image src={productIcon} alt="pro" height={100} width={100} />
        </div>
        <h1 className="text-center text-4xl font-extrabold text-black">
          Organic <span className="text-green-500">Products</span>
        </h1>
        <div className="flex justify-center mt-4">
          <Link href="/products">
            <p className="btn bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
              See All Products
            </p>
          </Link>
        </div>
        <div className="flex justify-center mt-12">
          <div className="gap-4 w-11/12 md:w-10/12  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="group relative p-4 shadow-md rounded-xl bg-white"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-2">
                    <span className="bg-gradient-to-r from-green-600 to-lime-400 py-1 px-3 rounded-full text-white text-xs font-medium">
                      Fresh
                    </span>
                    {item.organic && (
                      <span className="bg-amber-100 text-amber-600 py-1 px-3 rounded-full text-xs font-medium">
                        Organic
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(item.id);
                    }}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {wishlistData.includes(item.id) ? (
                      <BsHeartFill className="w-5 h-5 text-red-500" />
                    ) : (
                      <BsHeart className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="relative w-full h-40 mb-4">
                  <Image
                    className="rounded-lg object-fill h-full w-full"
                    src={item.photo}
                    alt={item.name}
                    fill
                    priority
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h4>

                  <div className="flex items-center">
                    <span className="text-gray-600">
                      <FaWeightHanging />
                    </span>
                    <p className="text-gray-600 ml-2">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500">
                      <FaTractor />
                    </span>
                    <p className="text-gray-600 ml-2">Farm: {item.farm}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500">
                      <FaUser />
                    </span>
                    <p className="text-gray-600 ml-2">Owner: {item.owner}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <TbCurrencyTaka className="w-5 h-5" />
                      <p className="font-semibold text-md">{item.price}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleCart(item);
                      }}
                      className="btn bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeatureProducts;
