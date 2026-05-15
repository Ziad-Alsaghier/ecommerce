import Categories from '@/components/Category/Categories';
import Image from "next/image";

import React from 'react';
import { BiCategory } from 'react-icons/bi'; // Clean category-specific icon
import { FiArrowRight } from 'react-icons/fi';
import { HiChevronRight } from 'react-icons/hi'; // For a cleaner breadcrumb separator
import { getCategories } from "@/Services/categories.services";
import Link from 'next/link';
export const metadata = {
  title: "Categories",
};

export default async function AllCategoriesPage() {
      const categories = await getCategories();
    
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <section className="w-full bg-gradient-to-r from-emerald-500 to-green-400 py-12 px-6 md:px-12 shadow-md">
                <div className="max-w-7xl mx-auto">

                    {/* Clean Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-white/80 mb-8">
                        <span className="hover:text-white cursor-pointer transition">Home</span>
                        <HiChevronRight className="text-white/50" />
                        <span className="font-semibold text-white">All Categories</span>
                    </nav>

                    {/* Hero Content */}
                    <div className="flex items-center gap-6">
                        {/* Glassmorphism Icon Container */}
                        <div className="bg-white/20 backdrop-blur-lg p-4 rounded-2xl shadow-xl border border-white/30 flex items-center justify-center">
                            <BiCategory className="text-white text-4xl md:text-5xl" />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                All Categories
                            </h1>
                            <p className="text-white/90 mt-1 md:text-lg max-w-md">
                                Discover our products organized by category to find exactly what you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Component Section */}
      
            <div className="w-full py-12">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between mb-10">
                    {/* Left Side */}
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-green-500 rounded-full"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            Shop By <span className="text-green-500">Category</span>
                        </h2>
                    </div>

                    {/* Right Side */}
                    <Link
                        href="/categories"
                        className="flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all group"
                    >
                        View All Categories
                        <FiArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Categories Grid */}
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {categories?.map((cat) => (
                            <Link
                                href={`/categories/${cat.slug || cat._id}`}
                                key={cat._id}
                                className="group cursor-pointer"
                            >
                                <div className="flex flex-col items-center">
                                    {/* Image Container - Matches the soft-colored box in your image */}
                                    <div className="relative w-full aspect-square bg-[#F3F9F5] rounded-3xl overflow-hidden mb-4 border border-gray-100/50 group-hover:border-green-200 transition-colors">
                                        <Image
                                            src={cat.image}
                                            alt={cat.name}
                                            fill
                                            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Category Name */}
                                    <p className="text-base font-bold text-gray-800 text-center transition-colors group-hover:text-green-600">
                                        {cat.name}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>



    );
}