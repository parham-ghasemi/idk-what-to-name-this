import { useState } from "react";
import "./SpecialtyResultPage.scss";
import BasedOnDoctors from "./pages/basedOnDoctors/BasedOnDoctors";
import BasedOnTimeTable from "./pages/basedOnTimeTable/BasedOnTimeTable";

const SpecialtyResultPage = ({ onBack, onDocClick, onTimeCardClick }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["بر اساس جدول زمانی", "بر اساس پزشک"];
  return (
    <div className="specialty-res-page-container">
      <div className="specialty-res-page-container__head">
        <button onClick={onBack}>
          <img src="/icons/arrow-right.svg" alt="arrow-right" />
        </button>
        <div className="specialty-res-page-container__head__title">
          <img src="/icons/Stethoscope.svg" alt="stethoscope" />
          <p>
            <span>تخصص:</span>
            غدد
          </p>
        </div>
      </div>

      <div className="specialty-res-page-container__tab-container">
        {tabs.map((item, index) => (
          <div
            key={`tab-${index}`}
            onClick={() => setTabIndex(index)}
            className={`specialty-res-page-container__tab-container__tab ${
              tabIndex === index
                ? "specialty-res-page-container__tab-container__tab--active"
                : ""
            }`}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="specialty-res-page-container__content">
        {tabIndex === 0 && <BasedOnTimeTable onItemClick={onTimeCardClick} />}
        {tabIndex === 1 && <BasedOnDoctors onItemClick={onDocClick} />}
      </div>
    </div>
  );
};

export default SpecialtyResultPage;
