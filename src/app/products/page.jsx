import Products from '@/components/Products/Products';
import React from 'react';
import { HiOutlineArchive } from 'react-icons/hi'; // Importing a clean box icon
export const metadata = {
  title: "Products",
};

export default function AllProductsHeader() {
    return (
        <>
            <section className="w-full bg-gradient-to-r mb-6 from-emerald-500 to-green-400 py-12 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6">
                        <span className="hover:text-white cursor-pointer transition">Home</span>
                        <span>/</span>
                        <span className="font-semibold text-white">All Products</span>
                    </nav>

                    {/* Hero Content */}
                    <div className="flex items-center gap-6">
                        {/* Icon Container */}
                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-inner border border-white/30">
                            <HiOutlineArchive className="text-white text-4xl md:text-5xl" />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                All Products
                            </h1>
                            <p className="text-white/90 mt-1 md:text-lg">
                                Explore our complete product collection
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Products />
        </>

    );
}