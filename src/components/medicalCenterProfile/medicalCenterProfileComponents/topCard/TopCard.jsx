import "./TopCard.scss";

const TopCard = ({ data }) => {
  return (
    <div className="medical-center-top-card">
      <div className="medical-center-top-card__left">
        <div className="medical-center-top-card__left__gallery-container"></div>
        <div className="medical-center-top-card__left__appointment-container"></div>
      </div>
      <div className="medical-center-top-card__right">
        <div className="medical-center-top-card__right__top">
          <div className="medical-center-top-card__right__top__title-container">
            <p className="medical-center-top-card__right__top__title-container__title">
              {data.name}
            </p>
            <p className="medical-center-top-card__right__top__title-container__subtitle">
              {data.subtitle}
            </p>
          </div>
          <img src={data.imageURL} alt="profile-pic" />
        </div>
      <div className="medical-center-top-card__right__appointment-kind">
        {data.appointmentKind}
      </div>

      </div>
    </div>
  );
};

export default TopCard;
