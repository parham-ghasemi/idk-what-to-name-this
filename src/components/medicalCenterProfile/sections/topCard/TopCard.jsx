import ImageCarousel from "../imageCarousel/ImageCarousel";
import "./TopCard.scss";

const TopCard = ({ data }) => {
  return (
    <div className="medical-center-top-card">
      <div className="medical-center-top-card__left">
        <div className="medical-center-top-card__left__appointment-container">
          <div className="medical-center-top-card__left__appointment-container__top">
            <p className="medical-center-top-card__left__appointment-container__top__item">
              <img src="/icons/calendar-tick-blue.svg" alt="calendar-tick" />
              {data.days}
            </p>
            <p className="medical-center-top-card__left__appointment-container__top__item">
              <img src="/icons/clock-blue.svg" alt="calendar-tick" />
              {data.hours}
            </p>
          </div>
          <div className="medical-center-top-card__left__appointment-container__bottom">
            <p className="medical-center-top-card__left__appointment-container__bottom__item">
              <img src="/icons/location.svg" alt="calendar-tick" />
              <span className="medical-center-top-card__left__appointment-container__bottom__item__text">
                {data.address}
              </span>
            </p>
            <p className="medical-center-top-card__left__appointment-container__bottom__item">
              <img src="/icons/call-full.svg" alt="calendar-tick" />
              <span className="medical-center-top-card__left__appointment-container__bottom__item__text">
                {data.phoneNumber}
              </span>
            </p>
          </div>
          <button
            type="button"
            className="medical-center-top-card__left__appointment-container__button"
          >
            نوبت بگیرید
          </button>
        </div>
        <div className="medical-center-top-card__left__carousel-container">
          <ImageCarousel images={data.imageURLs} />
        </div>
      </div>
      <div className="medical-center-top-card__right">
        <div className="medical-center-top-card__right__top">
          <img src={data.iconURL} alt="profile-pic" />
          <div className="medical-center-top-card__right__top__title-container">
            <p className="medical-center-top-card__right__top__title-container__title">
              {data.name}
            </p>
            <p className="medical-center-top-card__right__top__title-container__subtitle">
              {data.subtitle}
            </p>
          </div>
        </div>
        <div className="medical-center-top-card__right__appointment-kind">
          {data.appointmentKind}
        </div>

        <div className="medical-center-top-card__right__rating-container">
          <div className="medical-center-top-card__right__rating-container__raters">
            {`(${data.reviewsCount}نظر)`}
          </div>
          <div className="medical-center-top-card__right__rating-container__rating">
            {data.rating}
          </div>
          <img src="/icons/star.svg" alt="star" />
        </div>

        <div className="medical-center-top-card__right__tags-container">
          {data.tags.map((tag, index) => (
            <div
              className="medical-center-top-card__right__tags-container__tag"
              key={`tag-${index}`}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCard;
