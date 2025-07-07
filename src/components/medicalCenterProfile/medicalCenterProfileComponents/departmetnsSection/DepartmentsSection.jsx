import { useState } from "react";
import "./DepartmentsSection.scss";

const deps = [
  {
    title: "بخش جراحی و اتاق عمل",
    img: "/images/d3193b76d24e8b35680f63b2bf38b74fa1978adf.jpg",
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
    img: "/images/b373425746e13840b4c587631090171cc2b68b13.jpg",
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
    img: "/images/217f009c4b52403869a98f7861f127afe12a4efd.jpg",
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
    img: "/images/961742c1484307906618e7fe8e410c1d4d5ac9b1.jpg",
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
    img: "/images/fe05cd718b453e228853ad1a7c0bca00f6909fca.jpg",
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
    img: "/images/f49d7e02c668788cf06af8a95d573ed0daefaf1b.jpg",
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
