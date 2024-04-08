"use client"
import React, { useContext } from "react";
import { StoreContext } from "../context";
import Image from "next/image";

const CartPage = () => {
  const { cartData, setCartData } = useContext(StoreContext);
//   console.log(cartData)
  return (
    <div>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat ">
        <p className=" text-white text-2xl font-semibold pt-5">Cart PAGE</p>
      </div>
      <div>
        <div className="overflow-x-auto m-5 md:m-10 bg-white shadow-sm rounded-md">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item?.product?.id}>
                  <th><Image className=" rounded-full w-20" alt="" src={item?.product?.photo}/></th>
                  <td>{item?.product?.name}</td>
                  <td>{item?.product?.price}</td>
                  <td>1</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
