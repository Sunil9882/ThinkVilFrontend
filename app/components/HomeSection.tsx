"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
  "/ScreenRotate/screen_show_img1.png",
  "/ScreenRotate/screen_show_img2.png",
  "/ScreenRotate/screen_show_img3.png",
  "/ScreenRotate/screen_show_img4.png",
  "/ScreenRotate/screen_show_img5.png",
  "/ScreenRotate/screen_show_img6.png",
  "/ScreenRotate/screen_show_img7.png",
];

export default function HomeSection() {
  return (
    <section className="relative text-center py-10 px-6 w-full min-h-[50vh] rounded-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="absolute inset-0 w-full h-full rounded-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/50 to-transparent rounded-xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Welcome to <span className="text-sky-300">ThinkVil</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Unlock the world of interactive learning with our simulations in{" "}
          <span className="text-yellow-300">Physics</span>,{" "}
          <span className="text-green-300">Maths</span>, and{" "}
          <span className="text-red-300">Chemistry</span>.
        </p>
      </div>
    </section>
  );
}