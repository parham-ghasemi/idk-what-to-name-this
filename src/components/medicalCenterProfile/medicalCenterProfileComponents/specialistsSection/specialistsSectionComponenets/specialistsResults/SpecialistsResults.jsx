import "./SpecialistsResults.scss";

const SpecialistsResults = ({ specialists }) => {
  return (
    <div className="specialists-results-container">
      <p className="specialists-results-container__title">
        <img src="/icons/Stethoscope.svg" alt="stethoscope" />
        <span>تخصص:</span>
        قلب و عروق
      </p>

      <div className="specialists-results-container__body">
        {specialists.map((specialist, index) => (
          <div
            className="specialists-results-container__body__item"
            key={`specialist-${index}`}
          >
            <div className="specialists-results-container__body__item__right">
              <div className="specialists-results-container__body__item__right__top">
                <img
                  src={specialist.image}
                  alt="specialist-image"
                  className="specialists-results-container__body__item__right__top__img"
                />
                <div className="specialists-results-container__body__item__right__top__title">
                  <p className="specialists-results-container__body__item__right__top__title__name">
                    {specialist.name}
                  </p>
                  <div className="specialists-results-container__body__item__right__top__title__specialties">
                    {specialist.specialties.map((item, index) => (
                      <p key={`spec-item-${index}`}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="specialists-results-container__body__item__right__rating-container">
                <img src="/icons/star.svg" alt="star" />
                <p className="specialists-results-container__body__item__right__rating-container__rating">
                  {specialist.rating}
                </p>
                <p className="specialists-results-container__body__item__right__rating-container__rater">
                  {`(${specialist.raters} نظر)`}
                </p>
              </div>
              <div className="specialists-results-container__body__item__right__tags-container">
                {specialist.tags.map((tag, index) => (
                  <p className="specialists-results-container__body__item__right__tags-container__tag">
                    {tag}
                  </p>
                ))}
              </div>
            </div>

            <div className="specialists-results-container__body__item__sep"></div>

            <div className="specialists-results-container__body__item__left">
              <p className="specialists-results-container__body__item__left__days">
                <img src="/icons/calendar.svg" alt="calendar" />
                <span>روزها حضور:</span>
                {specialist.days.join(" و ")}
              </p>
              <p className="specialists-results-container__body__item__left__hours">
                <img src="/icons/timer.svg" alt="timer" />
                <span>ساعت حضور:</span>
                {specialist.hours}
              </p>
              <p className="specialists-results-container__body__item__left__appointments">
                <img src="/icons/Medical Symbol green.svg" alt="timer" />
                {`${specialist.successfullAppointments} نوبت موفق`}
              </p>
              <p className="specialists-results-container__body__item__left__appointments-this-week">
                <span>نوبت‌های این هفته:</span>
                {/* <div className="specialists-results-container__body__item__left__appointments-this-week__cirlce" /> */}
                <span
                  className={`specialists-results-container__body__item__left__appointments-this-week__circle ${
                    specialist.hasAppointmentsThisWeek
                      ? "specialists-results-container__body__item__left__appointments-this-week__circle--green"
                      : "specialists-results-container__body__item__left__appointments-this-week__circle--red"
                  }`}
                />
                {specialist.hasAppointmentsThisWeek ? "درحال پذیرش" : "تکمیل"}
              </p>

              <div className="specialists-results-container__body__item__left__closest-container">
                <p className="specialists-results-container__body__item__left__closest-container__text">
                  {`نزدیکترین نوبت ${specialist.closestAppointment}`}
                  <img src="/icons/arrow-left2.svg" alt="" />
                </p>
                <button className="specialists-results-container__body__item__left__closest-container__button">
                  دریافت نوبت
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialistsResults;
