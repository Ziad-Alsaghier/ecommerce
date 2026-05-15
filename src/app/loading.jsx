"use client";

import { FiShoppingBag } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white gap-5">

            {/* Ecommerce Icon */}
            <div className="relative flex items-center justify-center">
                <FiShoppingBag className="text-green-600 text-6xl" />

                <div className="absolute -bottom-8">
                    <ClipLoader
                        size={28}
                        color="#16a34a"
                    />
                </div>
            </div>

            {/* Text */}
            <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                    FreshCart
                </h2>


            </div>

        </div>
    );
}