import "./DoctorsPage.scss";
import { useState } from "react";
import { doctors, hospitals } from "./doctorsPageComponents/data";
import DoctorCard from "./doctorsPageComponents/doctorCard/DoctorCard";
import TabAndSortBar from "./doctorsPageComponents/tabAndSortBar/TabAndSortBar";
import { Filters } from "./doctorsPageComponents/filters/Filters";
import MedicalCenterCard from "./doctorsPageComponents/medicalCenterCard/MedicalCenterCard";

const DoctorsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabToIndexMap = {
    All: 0,
    Online: 1,
    Phone: 2,
  };
  const tabToTypeMap = {
    All: null,
    Online: "Online",
    Phone: "Phone",
  };

  const renderDoctors = (tabKey) => {
    const tabType = tabToTypeMap[tabKey];

    const filteredDoctors =
      tabType === null
        ? doctors
        : doctors.filter((doctor) =>
            doctor.tabs.some((tab) => tab.type === tabType)
          );

    return filteredDoctors.map((doctor, index) => {
      const initialTabIndex =
        tabType === null
          ? 0
          : doctor.tabs.findIndex((tab) => tab.type === tabType);

      return (
        <DoctorCard
          key={`${tabKey.toLowerCase()}-${doctor.name}-${index}`}
          doctor={doctor}
          initialTabIndex={initialTabIndex}
        />
      );
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "All":
      case "Online":
      case "Phone":
        return renderDoctors(activeTab);
      case "Clinics":
        return hospitals.map((hospital, index) => (
          <MedicalCenterCard
            key={`clinic-${hospital.id || index}`}
            hospital={hospital}
          />
        ));
      default:
        return <p>{activeTab}</p>;
    }
  };

  return (
    <div className="doctors-page">
      <div className="doctors-page__right">
        <Filters />
      </div>
      <div className="doctors-page__left">
        <TabAndSortBar updateTab={setActiveTab} />
        {renderContent()}
      </div>
    </div>
  );
};

export default DoctorsPage;
