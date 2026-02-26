"use client";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import "./HomeSlider.css";

const slides = [
  {
    image: slider1,
    tag: "Now Showing · Blockbuster",
    title: "Book Your\nTickets Now",
    subtitle: "The biggest movies of the season — reserve your seats before they sell out.",
    cta: "Book Tickets",
    accent: "#E8183D",
  },
  {
    image: slider2,
    tag: "Live Events · This Weekend",
    title: "Concerts &\nLive Shows",
    subtitle: "From chart-toppers to indie legends — catch them live, near you.",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const currentAccent = slides[activeIndex]?.accent || "#E8183D";

  return (
    <div className="home-slider-root" style={{ "--accent": currentAccent }}>

      {/* Progress bar */}
      <div className="hs-progress">
        <div className="hs-progress-fill" key={activeIndex} />
      </div>

      {/* Brand */}
      <div className="hs-brand">
        Book<span>My</span>Show
      </div>

      <Swiper
        ref={swiperRef}
        className="hs-swiper"
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="hs-slide">

            {/* Image */}
            <div className="hs-slide-image">
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                fill
                priority={i === 0}
                quality={90}
              />
            </div>

            {/* Gradient overlay */}
            <div className="hs-gradient" />

            {/* Accent stripe */}
            <div className="hs-accent-stripe" style={{ "--accent": slide.accent }} />

            {/* Content */}
            <div className="hs-content">
              <span className="hs-tag" style={{ "--accent": slide.accent }}>
                {slide.tag}
              </span>
              <h2 className="hs-title" style={{ "--accent": slide.accent }}>
                {slide.title}
              </h2>
              <p className="hs-subtitle">{slide.subtitle}</p>
              <a href="#" className="hs-cta" style={{ "--accent": slide.accent }}>
                {slide.cta}
                <span className="hs-cta-arrow" />
              </a>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Side dot indicators */}
      <div className="hs-dots">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`hs-dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => swiperRef.current?.swiper?.slideToLoop(i)}
          />
        ))}
      </div>

      {/* Bottom bar: counter + nav */}
      <div className="hs-bottom-bar">
        <div className="hs-counter">
          <span className="hs-counter-current">0{activeIndex + 1}</span>
          <span className="hs-counter-sep" />
          <span>0{slides.length}</span>
        </div>

        <div className="hs-nav">
          <button
            className="hs-nav-btn"
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="hs-nav-btn"
            onClick={() => swiperRef.current?.swiper?.slideNext()}
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24">
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
};

export default HomeSlider;