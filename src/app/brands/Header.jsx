import React from 'react'
import { HiTag } from 'react-icons/hi'

export default function Header() {
    return (
        <section className="w-full bg-gradient-to-r mb-6 from-violet-600 to-purple-400 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6">
                    <span className="hover:text-white cursor-pointer transition">Home</span>
                    <span>/</span>
                    <span className="font-semibold text-white">Brands</span>
                </nav>

                {/* Hero Content */}
                <div className="flex items-center gap-6">
                    {/* Icon Container */}
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-inner border border-white/30">
                        <HiTag className="text-white text-4xl md:text-5xl" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            All Brands
                        </h1>
                        <p className="text-white/90 mt-1 md:text-lg">
                            Shop from your favorite brands
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
