import React from "react";
import { FiCamera, FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";
export default function Features() {
  return (
    <div className="container px-8 w-full mx-auto  py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature Item */}
        <div className="flex items-center gap-4 p-5 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
          <div className="w-12 h-12 rounded-full bg-[#fae1e183] opacity/100 flex items-center justify-center text-blue-800 text-xl">
            <FiTruck />
          </div>

          <div>
            <h5 className="font-semibold text-gray-800">Free Shipping</h5>

            <p className="text-sm text-gray-500">On Orders Over 500 EGP</p>
          </div>
        </div>

        {/* Feature Item */}
        <div className="flex items-center gap-4 p-5 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
            <FiShield />
          </div>

          <div>
            <h5 className="font-semibold text-gray-800">Secure Payment</h5>

            <p className="text-sm text-gray-500">100% Secure Transactions</p>
          </div>
        </div>

        {/* Feature Item */}
        <div className="flex items-center gap-4 p-5 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">
            <FiRefreshCw />
          </div>

          <div>
            <h5 className="font-semibold text-gray-800">24/7 Support</h5>

            <p className="text-sm text-gray-500">Dedicated Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
