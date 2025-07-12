import { useState, useRef } from "react";
import "./insuranceSection.scss";
import { insurances } from "./InsuranceOptions";

const InsuranceSection = () => {
  const [selected, setSelected] = useState(0);
  const scrollRef = useRef(null);

  const scrollBySlide = (direction) => {
    const scrollContainer = scrollRef.current;
    const itemWidth = 152 + 20; // width + gap
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: direction === "left" ? -itemWidth * 3 : itemWidth * 3,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="insurance-container">
      <div className="insurance-container__title-container">
        <p className="insurance-container__title-container__title">
          <img src="/icons/square.svg" alt="square???" />
          بیمه‌ها
        </p>
        <div className="insurance-container__title-container__sep"></div>
      </div>

      <div className="insurance-container__insurance-scroll-container">
        <button
          className="insurance-container__insurance-scroll-container__arrow left"
          onClick={() => scrollBySlide("left")}
        >
          <img src="/icons/arrow-circle-left.svg" alt="" />
        </button>
        <div
          className="insurance-container__insurance-scroll-container__scroll"
          ref={scrollRef}
        >
          {insurances.map((insurance, index) => (
            <div
              key={`image-${index}`}
              onClick={() => setSelected(index)}
              className={`insurance-container__insurance-scroll-container__scroll__item ${
                index === selected
                  ? "insurance-container__insurance-scroll-container__scroll__item--active"
                  : ""
              }`}
            >
              <p>{insurance.title}</p>
              <img src={insurance.image} alt={`insurance-${index}`} />
            </div>
          ))}
        </div>
        <button
          className="insurance-container__insurance-scroll-container__arrow right"
          onClick={() => scrollBySlide("right")}
        >
          <img src="/icons/arrow-circle-right.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default InsuranceSection;
