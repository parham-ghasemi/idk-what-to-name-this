import { useState } from "react";
import "./DepartmentsSection.scss";


const DepartmentsSection = ({deps}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="departments-section-container">
      <p className="departments-section-container__title">
        <img src="/icons/Line arrow-left.svg" alt="arrow" />
        بخش های بیمارستان
      </p>
      <div className="departments-section-container__content">
        <div className="departments-section-container__content__cards">
          {deps.map((dep, index) => (
            <div
              key={`card-${index}`}
              onMouseDown={() => setActiveIndex(index)}
              className={`departments-section-container__content__cards__card ${
                index === activeIndex
                  ? "departments-section-container__content__cards__card--active"
                  : ""
              }`}
            >
              <img
                className="departments-section-container__content__cards__card__bg"
                alt="bg-img"
                src={dep.img}
              />
              <div
                className={`departments-section-container__content__cards__card__text ${
                  index !== activeIndex
                    ? "departments-section-container__content__cards__card__text--not-active"
                    : ""
                }`}
              >
                <p className="departments-section-container__content__cards__card__text__title ">
                  {dep.title}
                </p>
                <div
                  className={`departments-section-container__content__cards__card__text__body ${
                    index !== activeIndex
                      ? "departments-section-container__content__cards__card__text__body--not-active"
                      : ""
                  }`}
                >
                  <ul>
                    {dep.items.map((item, itemIndex) => (
                      <li key={`item-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsSection;
