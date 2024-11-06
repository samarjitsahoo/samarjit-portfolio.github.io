import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImageSwiper = ({ images }) => (
  <Swiper
    modules={[Pagination, Autoplay]}
    loop={true}
    speed={600}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    slidesPerView="auto"
    pagination={{
      clickable: true,
      el: ".swiper-pagination",
      type: "bullets",
    }}
    className="portfolio-details-slider"
  >
    {images.map((image, idx) => (
      <SwiperSlide key={idx}>
        <img src={image.src} alt={image.alt} />
      </SwiperSlide>
    ))}
    <div className="swiper-pagination"></div>
  </Swiper>
);

export default ImageSwiper;
