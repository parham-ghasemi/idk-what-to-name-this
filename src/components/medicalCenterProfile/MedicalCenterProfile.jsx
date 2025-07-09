import { useState } from "react";
import { data } from "./data";
import AboutSection from "./medicalCenterProfileComponents/aboutSection/AboutSection";
import DepartmentsSection from "./medicalCenterProfileComponents/departmetnsSection/DepartmentsSection";
import InsuranceSection from "./medicalCenterProfileComponents/insuranceSection/InsuranceSection";
import NavBar from "./medicalCenterProfileComponents/navBar/NavBar";
import ServicesSection from "./medicalCenterProfileComponents/servicesSection/ServicesSection";
import SpecialistsSection from "./medicalCenterProfileComponents/specialistsSection/SpecialistsSection";
import TopCard from "./medicalCenterProfileComponents/topCard/TopCard";
import "./MedicalProfile.scss";

const MedicalCenterProfile = () => {
  const [isFabActive, setIsFabActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="medical-center-profile-container">
      <TopCard data={data} />
      <NavBar />
      <div id="about">
        <AboutSection desc={data.description} />
      </div>
      <div id="departments">
        <DepartmentsSection deps={data.departments} />
      </div>
      <div id="services">
        <ServicesSection items={data.services} />
      </div>
      <div id="specialists">
        <SpecialistsSection specialists={data.specialists} />
      </div>
      <div id="insurance">
        <InsuranceSection />
      </div>

      <div className="medical-center-profile-container__appointment-fab-container">
        <div
          onMouseDown={() => setIsFabActive((prev) => !prev)}
          className={`medical-center-profile-container__appointment-fab-container__circle ${
            isFabActive
              ? "medical-center-profile-container__appointment-fab-container__circle--active"
              : ""
          }`}
        >
          <p className="medical-center-profile-container__appointment-fab-container__circle__text">
            دریافت نوبت
          </p>
          <div
            className="medical-center-profile-container__appointment-fab-container__circle__all-appointments"
            onMouseDown={() => setIsModalOpen(true)}
          >
            مشاهده همه نوبت‌ها
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenterProfile;
