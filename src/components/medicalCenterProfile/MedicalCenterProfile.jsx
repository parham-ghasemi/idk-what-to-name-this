import { useEffect, useState } from "react";
import { data } from "./data";
import AboutSection from "./sections/aboutSection/AboutSection";
import DepartmentsSection from "./sections/departmetnsSection/DepartmentsSection";
import InsuranceSection from "./sections/insuranceSection/InsuranceSection";
import NavBar from "./sections/navBar/NavBar";
import ServicesSection from "./sections/servicesSection/ServicesSection";
import SpecialistsSection from "./sections/specialistsSection/SpecialistsSection";
import TopCard from "./sections/topCard/TopCard";
import "./MedicalProfile.scss";
import { useModal } from "../../context/messanger";
import MedicalCenterSearchModal from "./medicalCenterProfileModal/MedicalCenterSearchModal";
import { Modal } from "../prescriptionModal/components/modal/Modal";

const MedicalCenterProfile = () => {
  const [isFabActive, setIsFabActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openModal } = useModal();

  return (
    <div className="medical-center-profile-container">
      <Modal />
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
            onMouseDown={() => openModal(<MedicalCenterSearchModal />)}
          >
            مشاهده همه نوبت‌ها
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenterProfile;
