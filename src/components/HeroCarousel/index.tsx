"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { slides } from "../../utils/slides.json";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".next-slide",
        prevEl: ".prev-slide",
      }}
      loop
      className="w-full bg-[#00502A]"
    >
      {slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover rounded-b-4xl"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5 text-left md:items-start justify-around py-8 px-6 md:px-12 text-center md:text-left text-white">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {slide.title}
                </h2>
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {slide.subtitle}
                </h2>
                <p className="max-w-2xl mx-auto md:mx-0 mb-6">
                  {slide.description}
                </p>

                <button className="bg-[#FED203] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <button className="prev-slide absolute left-[10%] bottom-1 -translate-y-1/2 z-10 text-white hover:cursor-pointer p-2 rounded-full shadow">
        <FaArrowLeft className="w-6 h-6" />
      </button>

      <button className="next-slide absolute right-[10%] bottom-1 -translate-y-1/2 z-10 text-white hover:cursor-pointer p-2 rounded-full shadow">
        <FaArrowRight className="w-6 h-6" />
      </button>
    </Swiper>
  );
}
