import "./TimeSelection.scss";

const TimeSelection = ({ chosenTime, openModal }) => {
  return (
    <div className="time-selection-container">
      <p className="time-selection-container__title">
        <img src="/icons/timer-outline-blue.svg" alt="location blue" />
        انتخاب زمان
      </p>
      <div className="time-selection-container__card">
        <p className="time-selection-container__card__title">زمان تحویل</p>
        <p className="time-selection-container__card__time">
          {chosenTime ? `${chosenTime.date} ${chosenTime.day} ${chosenTime.selectedHour}` : "زمان تحویل انتخاب نشده است."}
        </p>
        <p
          className="time-selection-container__card__change-time"
          onClick={openModal}
        >
          انتخاب زمان
          <img src="/icons/arrow-left-blue.svg" alt="arrow-left-blue" />
        </p>
      </div>
    </div>
  );
};

export default TimeSelection;
