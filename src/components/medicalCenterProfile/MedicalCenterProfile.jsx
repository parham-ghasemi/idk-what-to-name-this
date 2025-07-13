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
import { Modal } from "../prescriptionModal/components/modal/Modal";
import AppointmentFab from "./components/appointmentFab/AppointmentFab";

const MedicalCenterProfile = () => {
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

      <AppointmentFab />
    </div>
  );
};

export default MedicalCenterProfile;
