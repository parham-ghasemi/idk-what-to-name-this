import { useState } from "react";
import "./ServicesSection.scss";

const ServicesSection = ({ items }) => {
  const [active, SetActive] = useState(0);
  return (
    <div className="services-section-container">
      <div className="services-section-container__title-container">
        <img src="/icons/Line arrow-left.svg" alt="" />
        <p>خدمات و امکانات بیمارستان</p>
      </div>

      <div className="services-section-container__body">
        {items.map((item, index) => (
          <div
            key={`service-${index}`}
            onClick={() => SetActive(index)}
            className={`services-section-container__body__item ${
              index === active
                ? "services-section-container__body__item--active"
                : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
