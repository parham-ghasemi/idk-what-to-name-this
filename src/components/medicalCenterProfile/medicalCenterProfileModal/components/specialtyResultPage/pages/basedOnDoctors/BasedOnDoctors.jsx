import "./BasedOnDoctors.scss";
import { data } from "../../../../../data";
import SpecialistsResults from "../../../../../components/specialistsResults/SpecialistsResults";

const BasedOnDoctors = () => {
  return (
    <div className="based-on-docs">
      <SpecialistsResults specialists={data.specialists} />
    </div>
  );
};

export default BasedOnDoctors;
