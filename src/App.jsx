import { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import DoctorsPage from "./components/DoctorsPage/DoctorsPage";
import PrescriptionModalPage from "./components/prescriptionModal/PrescriptionModalPage";
import InsuranceSwiper from "./components/swiper/InsuranceSwiper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-fa">
      {/* <DoctorsPage /> */}
      {/* <PrescriptionModalPage /> */}
      <InsuranceSwiper />
    </div>
  );
}

export default App;
