"use client";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

const slides = [
  {
    image: slider1,
    tag: "Now Showing · Blockbuster",
    title: "Book Your\nTickets Now",
    subtitle:
      "The biggest movies of the season — reserve your seats before they sell out.",
    cta: "Book Tickets",
    accent: "#E8183D",
  },
  {
    image: slider2,
    tag: "Live Events · This Weekend",
    title: "Concerts &\nLive Shows",
    subtitle:
      "From chart-toppers to indie legends — catch them live, near you.",
    cta: "Explore Events",
    accent: "#F5A623",
  },
  {
    image: slider3,
    tag: "Coming Soon · Premieres",
    title: "Sports &\nStadium Nights",
    subtitle: "Cheer for your team in the stands. Book premium seats today.",
    cta: "Get Tickets",
    accent: "#4FC3F7",
  },
  {
    image: slider4,
    tag: "Exclusive Offer · Members",
    title: "Stream &\nExperience More",
    subtitle: "New releases, special screenings, and member-only early access.",
    cta: "Join Now",
    accent: "#A8D5BA",
  },
];

const HomeSlider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      autoplay={true}
      modules={[
        Navigation,
        Pagination,
        Mousewheel,
        Keyboard,
        Autoplay,
        EffectFade,
      ]}
      className="mySwiper"
    >
      {slides.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              <Image
                src={banner.image}
                alt=""
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
