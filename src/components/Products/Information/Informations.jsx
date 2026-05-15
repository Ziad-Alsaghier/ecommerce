'use client'
import { useState } from "react";
import { BsFillBagPlusFill, BsStarFill } from "react-icons/bs";
import { FiTruck, FiCheckCircle } from "react-icons/fi";

export default function Informations({ product }) {
    // State to handle tab switching (defaults to 'details')
    const [activeTab, setActiveTab] = useState('details');

    if (!product) return null;

    return (
        <div className="container w-full mx-auto px-4 py-10">
            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 w-full mb-8">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
                    <li className="me-2">
                        <button
                            onClick={() => setActiveTab('details')}
                            className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${activeTab === 'details'
                                    ? "text-green-600 border-green-600 bg-green-50"
                                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                                }`}
                        >
                            <BsFillBagPlusFill className={`w-4 h-4 me-2 ${activeTab === 'details' ? "text-green-600" : "text-gray-400"}`} />
                            Product Details
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${activeTab === 'reviews'
                                    ? "text-green-600 border-green-600 bg-green-50"
                                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                                }`}
                        >
                            <BsStarFill className="w-4 h-4 me-2 text-gray-400 group-hover:text-green-600" />
                            Reviews ({product.ratingsQuantity})
                        </button>
                    </li>
                    <li className="me-2">
                        <button
                            className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg text-gray-400 cursor-not-allowed"
                            disabled
                        >
                            <FiTruck className="w-4 h-4 me-2" />
                            Shipping & Returns
                        </button>
                    </li>
                </ul>
            </div>

            {/* Tab Content */}
            {activeTab === 'details' && (
                <div className="animate-fadeIn">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">About this Product</h2>
                    <p className="text-gray-600 mb-8 whitespace-pre-line">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Information Card */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-800 mb-4">Product Information</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Category</span>
                                    <span className="font-semibold text-gray-800">{product.category?.name}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Subcategory</span>
                                    <span className="font-semibold text-gray-800">{product.subcategory?.[0]?.name || "N/A"}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Brand</span>
                                    <span className="font-semibold text-gray-800">{product.brand?.name}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Items Sold</span>
                                    <span className="font-semibold text-gray-800">{product.sold} sold</span>
                                </div>
                            </div>
                        </div>

                        {/* Key Features Card */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-800 mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {["Premium Quality Product", "100% Authentic Guarantee", "Fast & Secure Packaging", "Quality Tested"].map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-700">
                                        <FiCheckCircle className="text-green-500 me-2 w-4 h-4" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'reviews' && (
                <div className="py-10 text-center text-gray-500">
                    Showing {product.reviews?.length} reviews for {product.title}...
                </div>
            )}
        </div>
    );
}