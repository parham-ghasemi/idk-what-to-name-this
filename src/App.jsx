import { useState } from "react";
import "./App.css";
import "./styles/index.scss";
import DoctorsPage from "./components/DoctorsPage/DoctorsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-fa">
      <DoctorsPage />
    </div>
  );
}

export default App;
