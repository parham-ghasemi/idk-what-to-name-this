import { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import DoctorsPage from "./components/DoctorsPage/DoctorsPage";
import PrescriptionModalPage from "./components/prescription-modal/PrescriptionModalPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-fa">
      {/* <DoctorsPage /> */}
      <PrescriptionModalPage />
    </div>
  );
}

export default App;
