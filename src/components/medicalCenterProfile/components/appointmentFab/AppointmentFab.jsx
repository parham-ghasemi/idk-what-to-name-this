import { useState } from "react";
import "./AppointmentFab.scss";
import { useModal } from "../../../../context/messanger";
import MedicalCenterSearchModal from "../../medicalCenterProfileModal/MedicalCenterSearchModal";

const AppointmentFab = () => {
  const [isFabActive, setIsFabActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { openModal } = useModal();

  return (
    <div className="appointment-fab-container">
      <div
        onMouseDown={() => setIsFabActive((prev) => !prev)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`appointment-fab-container__circle ${
          isFabActive ? "appointment-fab-container__circle--active" : ""
        }`}
      >
        {isHovering || isFabActive ? (
          <p className="appointment-fab-container__circle__text">دریافت نوبت</p>
        ) : (
          <img src="/icons/calendar-med-center.svg" alt="calendar-med-center" />
        )}
        <div
          className="appointment-fab-container__circle__all-appointments"
          onMouseDown={() => openModal(<MedicalCenterSearchModal />)}
        >
          مشاهده همه نوبت‌ها
        </div>
      </div>
    </div>
  );
};

export default AppointmentFab;
