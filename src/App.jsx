import { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import CardRow from "./components/cardRow/CardRow";
import SpecialOfferRow from "./components/specialOfferRow/SpecialOfferRow";
import DoctorCard from "./components/doctorsPage/doctorsPageComponents/doctorCard/DoctorCard";
import doctors from "./components/doctorsPage/doctorsPageComponents/data";
import DoctorsPage from "./components/doctorsPage/DoctorsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-fa">
      {/* <CardRow title="جدیدترین محصولات" />
    <SpecialOfferRow />
    <CardRow title="پرفروش‌ترین محصولات" /> */}
    <DoctorsPage />

    </div>
  );
}

export default App;
