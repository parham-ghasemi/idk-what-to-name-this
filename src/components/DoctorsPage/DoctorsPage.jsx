import "./DoctorsPage.scss";
import { useState } from "react";
import { doctors, hospitals } from "./doctorsPageComponents/data";
import DoctorCard from "./doctorsPageComponents/doctorCard/DoctorCard";
import TabAndSortBar from "./doctorsPageComponents/tabAndSortBar/TabAndSortBar";
import { Filters } from "./doctorsPageComponents/filters/Filters";
import MedicalCenterCard from "./doctorsPageComponents/medicalCenterCard/MedicalCenterCard";

const DoctorsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="doctors-page">
      <div className="doctors-page__right">
        <Filters />
      </div>
      <div className="doctors-page__left">
        <TabAndSortBar updateTab={setActiveTab} />
        {activeTab === "All" ? (
          doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))
        ) : activeTab === "Clinics" ? (
          hospitals.map((hospital, index) => (
            <MedicalCenterCard hospital={hospital} />
          ))
        ) : (
          <p>{activeTab}</p>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
