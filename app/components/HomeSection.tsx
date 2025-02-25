"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

const imagePaths = Array.from({ length: 6 }, (_, i) => `/All_Images/HomeSection/screen_show_img${i + 1}.png`);

export default function HomeSection() {
  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-xl pointer-events-auto border-2">
      {/* 3D Cube Swiper */}
      <Swiper
        modules={[EffectCube, Autoplay]}
        effect="cube"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        touchStartPreventDefault={false}
        passiveListeners={false}
      >
        {imagePaths.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-full pointer-events-none">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover w-full h-full rounded-xl"
              priority={index === 0}
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white px-6 rounded-xl z-40">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <span className="text-black">Welcome to </span>
          <span className="text-blue-800">ThinkViL</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl text-center">
          Unlock the world of interactive learning with our simulations in{" "}
          <span className="text-yellow-600">Physics</span>,{" "}
          <span className="text-green-600">Maths</span>, and{" "}
          <span className="text-red-600">Chemistry</span>.
        </p>
      </div>
    </div>
  );
}
