import "./BasedOnDoctors.scss";
import { data } from "../../../../../data";
import SpecialistsResults from "../../../../../components/specialistsResults/SpecialistsResults";

const BasedOnDoctors = ({ onItemClick }) => {
  return (
    <div className="based-on-docs">
      <SpecialistsResults specialists={data.specialists} onButtonClick={onItemClick} />
    </div>
  );
};

export default BasedOnDoctors;
