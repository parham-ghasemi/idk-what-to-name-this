import { useState } from "react";
import "./AvailableSpecialties.scss";

const AvailableSpecialties = ({onItemClick}) => {
  const [active, setActive] = useState(0);
  const testArray = new Array(10).fill(" قلب و عروق");

  return (
    <div className="available-specialties">
      <p className="available-specialties__title">
        تخصصهای موجود در مرکز درمانی:
      </p>
      <div className="available-specialties__options">
        {testArray.map((item, index) => (
          <div
            key={`item-index:${index}`}
            onClick={onItemClick}
            className={`available-specialties__options__item ${
              active === index
                ? "available-specialties__options__item--active"
                : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableSpecialties;
