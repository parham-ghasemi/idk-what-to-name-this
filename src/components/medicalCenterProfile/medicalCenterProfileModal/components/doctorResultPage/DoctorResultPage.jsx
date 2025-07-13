import SpecialistsResults from "../../../components/specialistsResults/SpecialistsResults";
import { data } from "../../../data";
import "./DoctorResultPage.scss";

const DoctorResultPage = ({ onBack }) => {
  return (
    <div className="doctor-res-page-container">
      <div className="doctor-res-page-container__head">
        <button onClick={onBack}>
          <img src="/icons/arrow-right.svg" alt="arrow-right" />
        </button>
        <div className="doctor-res-page-container__head__title">
          <p>
            <span>نتایج جستجوی: </span>
            دکتر اکبری
          </p>
        </div>
      </div>
      <div className="doctor-res-page-container__docs-res-items">
        <SpecialistsResults specialists={data.specialists} />
      </div>
    </div>
  );
};

export default DoctorResultPage;
