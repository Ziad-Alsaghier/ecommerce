"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { FiSearch, FiHeart, FiUser, FiMenu, FiGift } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { BsPostcard } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { FaCartFlatbed } from "react-icons/fa6";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiLogOut, FiLogIn } from "react-icons/fi";
export default function Header() {
  const [token, setToken] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null
  );
  return (
    <>
      {/* TOP BAR */}
      <div className="w-full bg-[#f8f8f8] border-b border-gray-200 text-[11px] sm:text-[12px] text-gray-600">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 lg:px-10">

          <div className="min-h-9.5 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            {/* LEFT */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1">
                <FaCartFlatbed />
                Free Shipping on Orders 500 EGP
              </span>

              <span className="hidden md:flex items-center gap-1">
                <FiGift size={10} className="text-green-600" />
                New Arrivals Daily
              </span>
            </div>

            {/* RIGHT */}
            <div className="hidden md:flex items-center gap-6">

              <Link
                href="#"
                className="flex items-center gap-1 hover:text-green-600 transition"
              >
                <FaPhoneAlt size={13} />
                +1 (800) 123-4567
              </Link>

              <Link
                href="#"
                className="hover:text-green-600 transition"
              >
                support@freshcart.com
              </Link>
              <div className="col-2">
                {token ? (
                  <Link
                    href="/Signout"
                    className="flex items-center gap-2 hover:text-red-500 transition"
                  >
                    <FiLogOut size={16} />
                    <span>Sign Out</span>
                  </Link>
                ) : (
                  <Link
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white font-medium shadow-sm hover:bg-green-700 hover:shadow-md transition-all duration-200"
                    href="/auth/register"
                  >
                    <FiLogIn size={16} />
                    <span>Sign In</span>
                  </Link>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>

      <Navbar />

    </>
  );
}
