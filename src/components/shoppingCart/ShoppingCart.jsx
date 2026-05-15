import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function ShoppingCart() {
  return (
    <>
      <button className="relative text-gray-700 lg:ms-10 me-5 hover:text-green-600 transition gap-9">
        <FiShoppingCart size={22} />

        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-green-600 text-white text-[11px] flex items-center justify-center">
          2
        </span>
      </button>
    </>
  );
}
