import { useState } from "react";
import "./DepartmentsSection.scss";

const deps = [
  {
    title: "بخش جراحی و اتاق عمل",
    img: "/images/clinic-img.jpg",
    items: [
      "اتاق عمل جنرال",
      "اتاق عمل قلب",
      "اتاق عمل زنان",
      "لاپاراسکوپی",
      "توراکس",
    ],
  },
  {
    title: "بخش اورژانس",
    img: "/images/clinic-img.jpg",
    items: [
      "اتاق عمل جنرال",
      "اتاق عمل قلب",
      "اتاق عمل زنان",
      "لاپاراسکوپی",
      "توراکس",
    ],
  },
  {
    title: "بخش بستری",
    img: "/images/clinic-img.jpg",
    items: [
      "اتاق عمل جنرال",
      "اتاق عمل قلب",
      "اتاق عمل زنان",
      "لاپاراسکوپی",
      "توراکس",
    ],
  },
  {
    title: "بخش پزشکی هسته‌ای",
    img: "/images/clinic-img.jpg",
    items: [
      "اتاق عمل جنرال",
      "اتاق عمل قلب",
      "اتاق عمل زنان",
      "لاپاراسکوپی",
      "توراکس",
    ],
  },
  {
    title: "بخش پرتونگاری و تصویربرداری",
    img: "/images/clinic-img.jpg",
    items: [
      "اتاق عمل جنرال",
      "اتاق عمل قلب",
      "اتاق عمل زنان",
      "لاپاراسکوپی",
      "توراکس",
    ],
  },
  {
    title: "بخش آزمایشگاه و آسیب‌شناسی",
    img: "/images/clinic-img.jpg",
    items: [
      "اتاق عمل جنرال",
      "اتاق عمل قلب",
      "اتاق عمل زنان",
      "لاپاراسکوپی",
      "توراکس",
    ],
  },
];

const DepartmentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="departments-section-container">
      <p className="departments-section-container__title">
        <img src="/icons/Line arrow-left.svg" alt="square???" />
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
