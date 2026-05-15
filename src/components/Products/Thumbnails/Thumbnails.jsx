"use client";

import Image from "next/image";

export default function Thumbnails({
    images,
    selectedImage,
    setSelectedImage
}) {
    return (
        <div className="flex gap-3 col-span-full ">

            {images?.map((img, i) => (
                <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`
                        w-20 h-20 border rounded-lg overflow-hidden cursor-pointer transition
                        ${selectedImage === img
                            ? "border-green-500"
                            : "border-gray-200"}
                    `}
                >
                    <Image
                        src={img}
                        alt="thumb"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                    />
                </button>
            ))}

        </div>
    );
}