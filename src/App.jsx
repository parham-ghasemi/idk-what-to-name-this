import { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import DoctorsPage from "./components/DoctorsPage/DoctorsPage";
import PrescriptionModalPage from "./components/prescriptionModal/PrescriptionModalPage";
import InsuranceSwiper from "./components/swiper/InsuranceSwiper";
import MedicalCenterProfile from "./components/medicalCenterProfile/MedicalCenterProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-fa">
      {/* <DoctorsPage /> */}
      {/* <PrescriptionModalPage /> */}
      {/* <InsuranceSwiper /> */}
      <MedicalCenterProfile />
    </div>
  );
}

export default App;
