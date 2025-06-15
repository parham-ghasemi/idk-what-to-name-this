import "./medicalCenterCard.scss";

const HospitalCard = ({ hospital }) => {
  return (
    <div className="medical-center-card">
      <div className="medical-center-card__right">
        <div className="medical-center-card__right__top">
          <img src={hospital.imageURL} alt="image" />
          <div className="medical-center-card__right__top__title">
            <a href="">
              <img src="/icons/arrow-left.svg" alt="" />
              <p>{hospital.name}</p>
            </a>
            <p>بیمارستان تخصصی و فوق تخصصی</p>
          </div>
        </div>
        <div className="medical-center-card__right__tags">
          <div className="medical-center-card__right__tags__appointment-kind">
            {hospital.appointmentKind}
          </div>

          <div className="medical-center-card__right__tags__rating-container">
            <img src="/icons/star.svg" alt="" />
            <p className="medical-center-card__right__tags__rating-container__rating">
              {hospital.rating}
            </p>
            <p className="medical-center-card__right__tags__rating-container__review-number">
              ({hospital.reviewsCount} نظر)
            </p>
          </div>

          <div className="medical-center-card__right__tags__hospital-tags">
            {hospital.tags.map((item, index) => (
              <p
                key={index}
                className="medical-center-card__right__tags__hospital-tags__tag"
              >
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="medical-center-card__separator" />

      <div className="medical-center-card__left">
        <div className="medical-center-card__left__address">
          <img src="/icons/location.svg" alt="location" />
          <p>{hospital.address}</p>
        </div>

        <div className="medical-center-card__left__appointment">
          <div className="medical-center-card__left__appointment__working-hours">
            <div className="medical-center-card__left__appointment__working-hours__item">
              <p>{hospital.hours}</p>
              <img src="/icons/clock.svg" alt="" />
            </div>
            <div className="medical-center-card__left__appointment__working-hours__item">
              <p>{hospital.days}</p>
              <img src="/icons/calendar-tick.svg" alt="" />
            </div>
          </div>

          <button className="medical-center-card__left__appointment__btn">
            مشاهده نوبت‌ها
          </button>
        </div>

        <div className="medical-center-card__left__separator"></div>

        <div className="medical-center-card__left__departments">
          <img src="/icons/Hospital Symbol - fill.svg" alt="" />
          <p className="medical-center-card__left__departments__title">
            بخش‌های اصلی
          </p>
          <p className="medical-center-card__left__departments__body">
            {hospital.departments}
          </p>
        </div>

        <div className="medical-center-card__left__specialServices">
          <img src="/icons/X-Ray Symbol.svg" alt="" />
          <p className="medical-center-card__left__specialServices__title">
            خدمات و امکانات ویژه
          </p>
          <p className="medical-center-card__left__specialServices__body">
            {hospital.specialServices}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
