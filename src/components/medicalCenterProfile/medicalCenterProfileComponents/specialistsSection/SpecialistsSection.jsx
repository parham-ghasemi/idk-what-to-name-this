import "./SpecialistsSection.scss";
import SpecialistsResults from "./specialistsSectionComponenets/specialistsResults/SpecialistsResults";
import SpecialistsSearch from "./specialistsSectionComponenets/specialistsSearch/SpecialistsSearch";
const SpecialistsSection = () => {
  return (
    <div className="specialists-section">
      <div className="specialists-section__title-container">
        <p className="specialists-section__title-container__title">
          <img src="/icons/square.svg" alt="square???" />
          متخصصان
        </p>
        <div className="specialists-section__title-container__sep"></div>
      </div>

      <div className="specialists-section__body">
        <div className="specialists-section__body__search-container">
          <SpecialistsSearch />
        </div>
        <div className="specialists-section__body__specialists-container">
          <SpecialistsResults />
        </div>
      </div>
    </div>
  );
};

export default SpecialistsSection;
