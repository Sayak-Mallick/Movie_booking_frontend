"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Keyboard,
  EffectFade,
} from "swiper/modules";
import MovieCard from "./MovieCard";
import { MovieCardType } from "@/app/types";

const Movies: MovieCardType[] = [
  {
    title: "Jawan",
    imageUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMC4zSysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424340-rexvhzupyz-portrait.jpg",
    _id: "1",
    rating: 8.5,
    type: "Action/Thriller",
  },
  {
    title: "Animal",
    imageUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMC4zSysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424340-rexvhzupyz-portrait.jpg",
    _id: "2",
    rating: 7.8,
    type: "Action/Drama",
  },
  {
    title: "Pathaan",
    imageUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMC4zSysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424340-rexvhzupyz-portrait.jpg",
    _id: "3",
    rating: 9.0,
    type: "Action/Spy",
  },
  {
    title: "Rocky Aur Rani",
    imageUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMC4zSysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424340-rexvhzupyz-portrait.jpg",
    _id: "4",
    rating: 7.5,
    type: "Romance/Drama",
  },
  {
    title: "Dunki",
    imageUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMC4zSysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424340-rexvhzupyz-portrait.jpg",
    _id: "5",
    rating: 8.1,
    type: "Comedy/Drama",
  },
  {
    title: "Tiger 3",
    imageUrl:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMC4zSysgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424340-rexvhzupyz-portrait.jpg",
    _id: "6",
    rating: 7.9,
    type: "Action/Spy",
  },
];

const MovieSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Navigation, Autoplay, Mousewheel, Keyboard, EffectFade]}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {Movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <MovieCard {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
