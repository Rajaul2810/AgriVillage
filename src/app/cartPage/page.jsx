"use client";
import React, { useContext } from "react";
import { StoreContext } from "../context";
import Image from "next/image";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Link from "next/link";

const CartPage = () => {
  const { cartData, setCartData } = useContext(StoreContext);

  const removeFromCart = (id) => {
    const updatedCart = cartData.filter(item => item.product.id !== id);
    setCartData(updatedCart);
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="py-5 px-4 md:px-8 max-w-7xl mx-auto">
        {cartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-sm p-8 space-y-4">
            <FaShoppingCart className="text-6xl text-gray-300" />
            <h2 className="text-2xl font-semibold text-gray-700">Your cart is empty</h2>
            <p className="text-gray-500">Looks like you haven&apos;t added any items to your cart yet.</p>
            <Link 
              href="/products"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cartData.map((item) => (
                    <tr key={item?.product?.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Image
                          className="rounded-lg w-16 h-16 object-cover"
                          width={64}
                          height={64}
                          alt={item?.product?.name}
                          src={item?.product?.photo}
                        />
                      </td>
                      <td className="px-6 py-4 text-gray-800">{item?.product?.name}</td>
                      <td className="px-6 py-4 text-gray-800">৳{item?.product?.price}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="px-2 py-1 border rounded">-</button>
                          <span className="w-8 text-center">1</span>
                          <button className="px-2 py-1 border rounded">+</button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button 
                          onClick={() => removeFromCart(item?.product?.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
