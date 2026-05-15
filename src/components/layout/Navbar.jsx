"use client";

import Link from 'next/link'
import { FiSearch, FiHeart, FiUser, FiMenu, FiGift } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { BsPostcard } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { useEffect, useState } from "react";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { HiChevronDown } from 'react-icons/hi';
import { usePathname } from "next/navigation";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (href) => pathname === href;
    // Example categories - you can map these from your data
    const categories = [
        { name: 'All Categories', href: '/categories' },
        { name: 'Electronics', href: '/categories/electronics' },
        { name: 'Women\'s Fashion', href: '/categories/womens-fashion' },
        { name: 'Men\'s Fashion', href: '/categories/mens-fashion' },
        { name: 'Beauty & Health', href: '/categories/beauty-health' },
    ];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [token, setToken] = useState(
        typeof window !== "undefined"
            ? localStorage.getItem("token")
            : null


    );
    return (
        <div>
            {/* MAIN NAVBAR */}
            <nav className="bg-white w-full border-b border-gray-200 shadow-sm">
                <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 lg:px-10">
                    <div className="h-14 sm:h-16 lg:h-18 flex items-center justify-between gap-2 sm:gap-3 lg:gap-6">
                        {/* LOGO */}
                        <div className="flex items-center shrink-0">
                            <Link href="/" className="flex items-center">
                                <button className="relative mx-1 -left-1 text-green-600 transition">
                                    <TiShoppingCart
                                        size={30}
                                        className="transform  scale-x-[-1]"
                                    />
                                </button>

                                <span className="text-[18px] sm:text-[24px] lg:text-[28px] font-bold">
                                    FreshCart
                                </span>
                            </Link>
                        </div>

                        {/* SEARCH */}
                        <div className=" hidden lg:flex flex-col lg:flex-row flex-1 max-w-xl xl:max-w-2xl text-black mx-4 xl:mx-8">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder="Search for products, brands and more..."
                                    className="w-full h-11 border border-gray-300 rounded-full pl-5 pr-14 text-sm outline-none focus:border-green-500"
                                />

                                <button className="absolute right-1 top-1 w-9 h-9 rounded-full bg-green-600 flex items-center justify-center text-white">
                                    <FiSearch size={18} />
                                </button>
                            </div>
                        </div>

                        {/* MENU */}
                        <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-[14px] xl:text-[15px] font-medium text-gray-700">
                            <Link href="/" className={`transition ${isActive("/") ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
                                }`}>
                                Home
                            </Link>

                            <Link href="/products" className={`transition ${isActive("/products") ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
                                }`}>
                                Shop
                            </Link>

                            <div
                                className="relative inline-block"
                                onMouseEnter={() => setIsOpen(true)}
                                onMouseLeave={() => setIsOpen(false)}
                            >
                                {/* Trigger Link */}
                                <Link
                                    href="/categories"
                                    className={`flex items-center gap-1 font-medium transition-colors py-2 ${isActive("/categories")
                                        ? "text-green-600"
                                        : "text-gray-700 hover:text-green-600"
                                        }`}
                                >
                                    Categories
                                    <HiChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                </Link>

                                {/* Dropdown Menu */}
                                {isOpen && (
                                    <div className="absolute left-0 top-full w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <ul className="flex flex-col">
                                            {categories.map((cat, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={cat.href}
                                                        className="block px-6 py-3 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors font-medium"
                                                    >
                                                        {cat.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <Link href="brands" className={`transition ${isActive("/brands") ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
                                }`}>
                                Brands
                            </Link>
                        </div>

                        {/* SUPPORT */}
                        <div className="hidden xl:flex items-center gap-2">
                            <span className="p-3 hidden sm:block  bg-green-100 rounded-full">
                                <MdHeadsetMic size={18} className="text-green-600" />
                            </span>

                            <div className="leading-tight">
                                <button className="block text-sm font-medium text-gray-400 cursor-pointer hover:bg-gray-100 transition-all duration-150 ease-in-out">
                                    Support
                                </button>

                                <span className="text-xs text-gray-500 font-bold">
                                    24/7 Help
                                </span>
                            </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                            <button className="relative hidden sm:block text-gray-700 hover:text-green-600 transition">
                                <FiHeart className="text-[18px]  sm:text-[22px]" />
                            </button>
                            <button>
                                <FiShoppingCart className="text-[18px] sm:text-[22px]" />
                            </button>

                            <button className="hidden sm:block">
                                <BsPostcard className="text-[18px] sm:text-[22px]" />
                            </button>
                            <ShoppingCart />

                            {/* MOBILE MENU */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2  bg-green-600 rounded-full text-white"
                            >
                                <FiMenu size={20} />
                            </button>
                        </div>
                    </div>

                    {/* MOBILE MENU */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden fixed inset-x-0 top-16 z-50 bg-white shadow-md">

                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center justify-between px-5 py-3 font-medium transition ${isActive("/")
                                        ? "text-green-600 bg-green-100"
                                        : "text-gray-700 hover:text-green-600"
                                    }`}
                            >
                                Home
                            </Link>

                            <Link
                                href="/products"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center justify-between px-5 py-3 font-medium transition ${isActive("/products")
                                        ? "text-green-600 bg-green-100"
                                        : "text-gray-700 hover:text-green-600"
                                    }`}
                            >
                                Shop
                            </Link>

                            <Link
                                href="/categories"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center justify-between px-5 py-3 font-medium transition ${isActive("/categories")
                                        ? "text-green-600 bg-green-100"
                                        : "text-gray-700 hover:text-green-600"
                                    }`}
                            >
                                Categories
                                <HiChevronDown className="text-gray-400" />
                            </Link>

                            <Link
                                href="/brands"
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center justify-between px-5 py-3 font-medium transition ${isActive("/brands")
                                        ? "text-green-600 bg-green-100"
                                        : "text-gray-700 hover:text-green-600"
                                    }`}
                            >
                                Brands
                            </Link>

                            {/* Auth */}
                            {token ? (
                                <Link
                                    href="/Signout"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2 px-5 py-3 text-red-500 hover:text-red-600 transition"
                                >
                                    <FiLogOut size={16} />
                                    <span>Sign Out</span>
                                </Link>
                            ) : (
                                <Link
                                    href="/auth/register"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-2 px-5 py-3 text-gray-700 hover:text-green-600 transition"
                                >
                                    <FiLogIn size={16} />
                                    <span>Sign In</span>
                                </Link>
                            )}

                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}
