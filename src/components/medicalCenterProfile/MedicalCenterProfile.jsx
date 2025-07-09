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
    </div>
  );
};

export default MedicalCenterProfile;
