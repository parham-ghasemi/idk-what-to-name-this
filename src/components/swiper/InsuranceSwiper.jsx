import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/scss";
import "./InsuranceSwiper.scss";

const insuranceImages = [
  "/images/insurance-ayande-sazan-hafez.png",
  "/images/insurance-dana 2.png",
  "/images/insurance-asia.png",
  "/images/insurance-iran 2.png",
  "/images/reinsurance-iranian 2.png",
  "/images/insurance-melat 2.png",
  "/images/insurance-hafez 2.png",
  // duplicate because the number of slides was not enough
  "/images/insurance-ayande-sazan-hafez.png",
  "/images/insurance-dana 2.png",
  "/images/insurance-asia.png",
  "/images/insurance-iran 2.png",
  "/images/reinsurance-iranian 2.png",
  "/images/insurance-melat 2.png",
  "/images/insurance-hafez 2.png",
];

const InsuranceSwiper = () => {
  return (
    <div className="insurance-swiper-container">
      <div className="insurance-swiper-container__title">
        <p>بیمه‌های طرف قرارداد</p>
        <img src="/icons/insurance-icons.svg" alt="insurance-icons" />
      </div>
      <div className="insurance-swiper-container__swiper">
        <Swiper
          spaceBetween={24}
          slidesPerView={9}
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
        >
          {insuranceImages.map((image, index) => (
            <SwiperSlide
              key={`image-${index}`}
              className="insurance-swiper-container__swiper__item"
            >
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InsuranceSwiper;
