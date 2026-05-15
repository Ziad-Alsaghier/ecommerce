"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({
    value = 0,
    size = 20,
    onChange,
}) {
    const [hoverValue, setHoverValue] = useState(null);
    const [rating, setRating] = useState(value);

    const handleClick = (val) => {
        setRating(val);
        onChange?.(val);
    };

    return (
        <div className="flex items-center gap-1 cursor-pointer">
            {Array.from({ length: 5 }).map((_, i) => {
                const starValue = i + 1;

                const active =
                    (hoverValue ?? rating) >= starValue;

                return (
                    <FaStar
                        key={i}
                        size={size}
                        onClick={() => handleClick(starValue)}
                        onMouseEnter={() => setHoverValue(starValue)}
                        onMouseLeave={() => setHoverValue(null)}
                        className={`transition-colors duration-150 ${active
                            ? "text-yellow-400"
                            : "text-gray-300"
                            }`}
                    />
                );
            })}
        </div>
    );
}