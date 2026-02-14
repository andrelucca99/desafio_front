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
      className="w-full h-fit bg-[#00502A]"
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
                className="object-cover rounded-b-[45px]"
              />
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5 text-left md:items-start justify-around md:justify-between py:8px md:py-16 px-6 lg:px-35 text-center md:text-left text-white mt-4">
              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl md:text-5xl font-bold mb-4 uppercase">
                  {slide.title}
                </h2>
              </div>
              <div className="w-full lg:w-1/2 mb-15 lg:mb-5">
                <p className="text-sm md:text-[20px] font-bold mb-4 uppercase">
                  {slide.subtitle}
                </p>
                <p className="max-w-2xl text-[12px] md:text-[27px] mx-auto md:mx-0 mb-6">
                  {slide.description}
                </p>

                <button className="w-[200px] bg-[#FED203] text-black text-sm px-6 py-1 rounded-[4px] font-semibold hover:cursor-pointer hover:shadow-lg hover:shadow-black/30 transition uppercase">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <button className="hidden md:block prev-slide absolute left-[10%] -bottom-[10px] -translate-y-1/2 z-10 text-white hover:cursor-pointer p-2 rounded-full shadow">
        <FaArrowLeft className="w-6 h-6" />
      </button>

      <button className="hidden md:block next-slide absolute right-[10%] -bottom-[10px] -translate-y-1/2 z-10 text-white hover:cursor-pointer p-2 rounded-full shadow">
        <FaArrowRight className="w-6 h-6" />
      </button>
    </Swiper>
  );
}
