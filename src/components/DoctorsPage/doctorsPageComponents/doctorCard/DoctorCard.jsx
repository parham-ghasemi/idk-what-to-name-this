import { useState } from "react";
import "./DoctorCard.scss";

const DoctorCard = ({ doctor, initialTabIndex }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(initialTabIndex);

  const handleTabClick = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-card__right">
        <div className="doctor-card__right__top">
          <div className="doctor-card__right__top__image">
            <img
              src="/images/doc.jpg"
              alt="doctor's image"
              className="doctor-card__right__top__image__doctors-image"
            />
            <img
              src="/icons/online-status.svg"
              alt="online status"
              className="doctor-card__right__top__image__online-status"
            />
            <img
              src="/icons/messages.svg"
              alt="messages"
              className="doctor-card__right__top__image__messages"
            />
          </div>
          <div className="doctor-card__right__top__text">
            <div className="doctor-card__right__top__text__name">
              {doctor.name}
            </div>
            <div className="doctor-card__right__top__text__specialty">
              {doctor.specialty}
            </div>
          </div>
        </div>

        <div className="doctor-card__right__bottom">
          <div className="doctor-card__right__bottom__rating-container">
            <img
              src="/icons/star.svg"
              alt=""
              className="doctor-card__right__bottom__rating-container__star"
            />
            <p className="doctor-card__right__bottom__rating-container__rating">
              {doctor.rating}
            </p>
            <p className="doctor-card__right__bottom__rating-container__rater">
              ({doctor.reviewsCount} نظر)
            </p>
          </div>
          <div className="doctor-card__right__bottom__tags-container">
            {doctor.tags.map((tag, index) => (
              <div
                key={index}
                className="doctor-card__right__bottom__tags-container__tag"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="doctor-card__separator" />

      <div className="doctor-card__left">
        <div className="doctor-card__left__tabs-container">
          {doctor.tabs.map((tab, index) => (
            <div
              key={index}
              className={`doctor-card__left__tabs-container__tab ${
                selectedTabIndex === index ? "selected" : ""
              }`}
              onClick={() => handleTabClick(index)} 
            >
              {tab.title}
            </div>
          ))}
        </div>

        <div className="doctor-card__left__tab-content">
          {doctor.tabs[selectedTabIndex].content.title === "clinic" ? (
            doctor.tabs[selectedTabIndex].content.addresses.map(
              (address, index) => (
                <div
                  key={index}
                  className="doctor-card__left__tab-content__address-container"
                >
                  <img src="/icons/location.svg" alt="" />
                  <p className="doctor-card__left__tab-content__address-container__address">
                    {address}
                  </p>
                  <button className="doctor-card__left__tab-content__address-container__button">
                    مشاهده نوبت‌ها
                  </button>
                </div>
              )
            )
          ) : (
            // temporary
            <p className="tab-content">
              {doctor.tabs[selectedTabIndex].content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
