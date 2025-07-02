import { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import DoctorsPage from "./components/DoctorsPage/DoctorsPage";
import PrescriptionModalPage from "./components/prescriptionModal/PrescriptionModalPage";
import InsuranceSwiper from "./components/swiper/InsuranceSwiper";
import MedicalCenterProfile from "./components/medicalCenterProfile/MedicalCenterProfile";
import MessangerContextProvider from "./context/messanger";
import { Modal } from "./components/prescriptionModal/components/modal/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MessangerContextProvider>
      <div className="font-fa">
        {/* <DoctorsPage /> */}
        {/* <PrescriptionModalPage /> */}
        {/* <InsuranceSwiper /> */}
        <MedicalCenterProfile />
      </div>
    </MessangerContextProvider>
  );
}

export default App;
