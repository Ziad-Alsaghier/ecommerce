"use client";

import { useState } from "react";
import Image from "next/image";
import Thumbnails from "@/components/Products/Thumbnails/Thumbnails";

export default function ProductView({ product }) {
    const [selectedImage, setSelectedImage] = useState(
        product?.imageCover
    );
    console.log("productView" + product);

    return (
        <div className="lg:col-span-4 space-y-4 md:col-span-1">

            {/* Main Image */}
            <div className="border rounded-xl p-4 bg-white">
                <div className="relative w-full h-105">
                    <Image
                        src={selectedImage}
                        alt={product?.title || "Product image"+ product?._id}
                        className="object-contain "
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>

            {/* Thumbnails */}
            <Thumbnails
                images={product?.images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
        </div>
    );
}