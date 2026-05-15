"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Fresh Products Delivered to your Door",
    desc: "Get 20% off your first order",
    image: "/images/slide1.png",
    href: '/products',
  },
  {
    title: "Organic Fruits & Vegetables",
    desc: "Healthy choices for your family",
    image: "/images/slide1.png",
  },
  {
    title: "Best Deals Every Day",
    desc: "Save more on your grocery shopping",
    image: "/images/slide1.png",
  },
];

export default function Carousle() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  };

  const next = () => {
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  };

  return (
    <div className="relative w-full h-105 overflow-hidden">

      {/* SLIDES */}
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="min-w-full h-full relative">

            {/* الخلفية (IMAGE) */}
            <Image

              src={s.image}
              alt={`slide ${i}`}
              fill
              priority
              className="object-cover w-auto"
            />

            {/* overlay أخضر زي الصورة */}
            <div className="absolute inset-0 bg-green-500/70"></div>

            {/* المحتوى */}
            <div className="relative z-10 flex items-center h-full px-10">
              <div className="text-white ms-20 max-w-md space-y-5">

                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  {s.title}
                </h1>

                <p className="text-sm opacity-90">{s.desc}</p>

                {/* BUTTONS */}
                {/*  I add Href Dynamic Based On Object Slider and If Not Avillable => # */}
                <div className="flex gap-3">
                  <Link href={s.href || '#'} className="bg-white text-green-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                    Shop Now
                  </Link>

                  <button className="border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-green-600 transition">
                    View Deals
                  </button>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow"
      >
        <FiChevronLeft className="text-black" size={20} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow"
      >
        <FiChevronRight className="text-black" size={20} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition ${current === i ? "bg-white w-6" : "bg-white/50"
              }`}
          />
        ))}
      </div>

    </div>
  );
}