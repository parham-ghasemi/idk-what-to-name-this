import AvailableSpecialties from "./components/availableSpecialties/AvailableSpecialties";
import SearchBar from "./components/searchBar/SearchBar";
import "./MedicalCenterSearchModal.scss";
import { useModal } from "../../../context/messanger";
import { useState } from "react";
import SearchResult from "./components/searchResult/SearchResult";
import SpecialtyResultPage from "./components/specialtyResultPage/SpecialtyResultPage";
import DoctorResultPage from "./components/doctorResultPage/DoctorResultPage";
import WeekdayAppointment from "./components/weekdayAppointment/WeekdayAppointment";
import LoginSignupPage from "./components/loginSignupPage/LoginSignupPage";

const MedicalCenterSearchModal = () => {
  const { closeModal } = useModal();
  const [page, setPage] = useState(0);

  return (
    <div className="medical-center-search-modal">
      {page === 1 || page === 0 || page === 4 ? (
        <div
          className="medical-center-search-modal__close-btn"
          onMouseDown={closeModal}
        >
          <img src="/icons/close-circle.svg" alt="close-circle" />
        </div>
      ) : (
        ""
      )}
      {page === 1 || page === 0 ? <SearchBar /> : ""}

      {page === 0 && <AvailableSpecialties onItemClick={() => setPage(1)} />}
      {page === 1 && <SearchResult onItemClick={() => setPage(2)} />}
      {page === 2 && (
        <SpecialtyResultPage
          onBack={() => setPage(1)}
          onDocClick={() => setPage(3)}
          onTimeCardClick={() => setPage(4)}
        />
      )}
      {page === 3 && <DoctorResultPage onBack={() => setPage(1)} />}
      {page == 4 && <WeekdayAppointment onSubmit={() => setPage(5)} />}
      {page === 5 && <LoginSignupPage onBack={() => setPage(4)} />}
    </div>
  );
};

export default MedicalCenterSearchModal;
