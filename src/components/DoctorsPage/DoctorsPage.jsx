import './DoctorsPage.scss';
import { useState } from "react";
import doctors from "./doctorsPageComponents/data";
import DoctorCard from "./doctorsPageComponents/doctorCard/DoctorCard";
import TabAndSortBar from "./doctorsPageComponents/tabAndSortBar/TabAndSortBar";
import { Filters } from './doctorsPageComponents/filters/Filters';

const DoctorsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="doctors-page">
      <div className="doctors-page__right"><Filters /></div>
      <div className="doctors-page__left">
        <TabAndSortBar updateTab={setActiveTab} />
        {activeTab === "All"
          ? doctors.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))
          : <p>{activeTab}</p>}
      </div>
    </div>
  );
};

export default DoctorsPage;
