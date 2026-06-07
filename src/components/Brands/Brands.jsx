import { getBrands } from '@/Services/brands.services';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { HiOutlineArchive } from 'react-icons/hi';

export default async function Brands() {
    const brands = await getBrands() || [];
    return (
        <div className="w-full px-4 md:px-10 lg:px-20 py-8  ">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4 gap-6  p-4 rounded-lg transition">
                {brands.length > 0 ? (
                    brands.map((brand) => (
                        <div
                            key={brand._id}
                            className="group flex flex-col  items-center gap-4 p-4 border rounded-lg hover:shadow-lg hover:scale-95 transition duration-300">
                            {/* Wrap the image in a container with 'overflow-hidden' */}
                            <Link href={`/brands/${brand._id}`}>
                                <div className="w-24 h-24 overflow-hidden group-hover:scale-125 transition-transform duration-300">
                                    <Image
                                        src={brand.image}
                                        alt={brand.name}
                                        width={400}
                                        height={400}
                                        // Apply scale to the image itself, triggered by the parent 'group'
                                        className="w-full h-full object-contain transition-transform duration-300  group-hover:scale-125"
                                    />
                                    <Image
                                        src={brand.image}
                                        alt={brand.name}
                                        width={400}
                                        height={400}
                                        // Apply scale to the image itself, triggered by the parent 'group'
                                        className="w-full h-full object-contain transition-transform duration-300  group-hover:scale-125"
                                    />
                                </div>
                            </Link>
                            <span className="text-sm font-medium">{brand.name}</span>
                        </div>
                    ))
                ) : (
                    // No brands Style 
                    <div className="container">
                        <div className="w-7xl d-flex align-middle items-center justify-center mx-auto px-6 md:px-12">
                            <div className="flex flex-col items-center   align-middle  justify-center gap-6 py-12">
                                <HiOutlineArchive className="text-gray-400 text-6xl" />
                                <h2 className="text-2xl font-semibold text-gray-700">No Brands Found</h2>
                                <p className="text-gray-500">We couldn't find any brands to show here.</p>
                            </div>
                        </div>
                    </div>
                )}

            </ div>
        </div>
    )
}
