"use client";
import Image from "next/image";
import React, { useState, useContext } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { GiPlantRoots, GiFruitBowl, GiCarrot } from "react-icons/gi";
import { FaTractor, FaUser, FaWeightHanging } from "react-icons/fa";
import { products } from "../libs/Data.js";
import productIcon from "../../../public/assets/head/productIcon.png";
import Link from "next/link";
import { StoreContext } from "../context";
import { toast } from "react-toastify";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { wishlistData, setWishlistData } = useContext(StoreContext);

  const categories = [
    {
      id: "all",
      name: "All Products",
      icon: <GiPlantRoots className="w-6 h-6" />,
    },
    {
      id: "Vegetables",
      name: "Vegetables",
      icon: <GiCarrot className="w-6 h-6" />,
    },
    { id: "Fruits", name: "Fruits", icon: <GiFruitBowl className="w-6 h-6" /> },
    {
      id: "Plants",
      name: "Plants",
      icon: <GiPlantRoots className="w-6 h-6" />,
    },
  ];

  const toggleWishlist = (productId) => {
    setWishlistData((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
    toast("Add to wishlist Successfully");
  };

  const { cartData, setCartData } = useContext(StoreContext);
  const handleCart = (product) => {
    const newData = { product };
    setCartData([...cartData, newData]);
    toast("Add to card Successfully");
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="pt-12 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="flex justify-center">
          <Image
            src={productIcon}
            alt="pro"
            height={100}
            width={100}
            className="animate-bounce"
          />
        </div>
        <h1 className="text-center text-4xl font-extrabold mb-8">
          Organic <span className="text-green-500">Products</span>
        </h1>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? "bg-green-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-green-50"
                  }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex justify-center mt-8">
          <div className="gap-6 w-11/12 md:w-4/5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((item) => (
              <Link href={`/products/${item.id}`} key={item.id}>
                <div className="group relative p-4 shadow-md rounded-xl bg-white hover:shadow-xl transform hover:scale-102 transition-all duration-300">
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
