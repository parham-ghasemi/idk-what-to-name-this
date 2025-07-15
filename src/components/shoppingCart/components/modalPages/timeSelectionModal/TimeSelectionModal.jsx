import { useState } from "react";
import ModalHeader from "../components/modalHeader/ModalHeader";
import "./TimeSelectionModal.scss";
import { times } from "../../../data";
import { useModal } from "../../../../../context/messanger";
import { useScrollDrag } from "../../../../../hooks/useScrollDrag";

const TimeSelectionModal = ({ shippingCost = 7000, setSelectedTime }) => {
  const { closeModal } = useModal();
  const scrollRef = useScrollDrag();

  const [selectedDateIndex, setSelectedDateIndex] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const handleDateSelect = (index) => {
    setSelectedDateIndex(index);
    setSelectedHour(null);
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
    if (selectedDateIndex !== null) {
      const { day, date } = times[selectedDateIndex];
      setSelectedTime({ day, date, selectedHour: hour });
      closeModal();
    }
  };

  return (
    <div className="time-selection-modal">
      <ModalHeader title="انتخاب زمان ارسال" />
      <p className="time-selection-modal__price">
        <span>هزینه ارسال: </span>
        {` ${shippingCost} تومان`}
      </p>
      <div className="time-selection-modal__dates-container" ref={scrollRef}>
        {times.map((time, index) => {
          const isSelected = selectedDateIndex === index;
          return (
            <div
              key={index}
              className={`time-selection-modal__dates-container__date ${
                isSelected
                  ? "time-selection-modal__dates-container__date--selected"
                  : ""
              }`}
              onClick={() => handleDateSelect(index)}
            >
              <div className="time-selection-modal__dates-container__date__card">
                <p className="time-selection-modal__dates-container__date__card__day">
                  {time.day}
                </p>
                <p className="time-selection-modal__dates-container__date__card__date">
                  {time.date}
                </p>
              </div>

              {isSelected && (
                <div className="time-selection-modal__dates-container__date__time-container">
                  {time.hours.map((option, i) => (
                    <div
                      className="time-selection-modal__dates-container__date__time-container__time"
                      key={`hour-option-${i}`}
                    >
                      <input
                        type="radio"
                        name={`time-${index}`}
                        id={`time-${index}-${i}`}
                        checked={selectedHour === option}
                        onChange={() => handleHourSelect(option)}
                      />
                      <label htmlFor={`time-${index}-${i}`}>{option}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeSelectionModal;
