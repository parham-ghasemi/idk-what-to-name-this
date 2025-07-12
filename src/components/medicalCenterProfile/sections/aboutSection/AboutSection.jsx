import "./AboutSection.scss";

const AboutSection = ({ desc }) => {
  return (
    <div className="about-section-container">
      <div className="about-section-container__title-container">
        <p className="about-section-container__title-container__title">
          <img src="/icons/square.svg" alt="square???" />
          معرفی مرکز
        </p>
        <div className="about-section-container__title-container__sep"></div>
      </div>
      <div className="about-section-container__content-container">
        <p className="about-section-container__content-container__text">
          {desc}
        </p>
        <div className="about-section-container__content-container__img">
          <img src="/images/about-pic.png" alt="about-pic" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
