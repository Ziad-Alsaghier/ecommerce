'use client';
import Link from 'next/link';
import { HiOutlineShoppingCart, HiHome, HiArrowLeft } from 'react-icons/hi';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
            {/* 404 Illustration Area */}
            <div className="relative mb-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <HiOutlineShoppingCart size={64} className="text-green-500" />
                </div>
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    404
                </div>
            </div>

            {/* Text Content */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Oops! Nothing Here</h1>
            <p className="text-gray-500 mb-8 max-w-sm">
                Looks like this page went out of stock! Don't worry, there's plenty more fresh content to explore.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-12">
                <Link
                    href="/"
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors"
                >
                    <HiHome size={20} />
                    Go to Homepage
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                    <HiArrowLeft size={20} />
                    Go Back
                </button>
            </div>

            {/* Popular Destinations */}
            <div className="w-full max-w-md border-t border-gray-200 pt-8">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Popular Destinations</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {['products', 'categories', "Today's Deals", 'Contact Us'].map((item) => (
                        <Link key={item} href={`/${item.toLowerCase().replace(" ", "-")}`} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-green-500 transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}