import "./WeekdayAppointment.scss";
import { appointment } from "../../../data";

const WeekdayAppointment = ({ onSubmit }) => {
  return (
    <div className="weekday-modal-container">
      <div className="weekday-modal-container__top-card">
        <div className="weekday-modal-container__top-card__right">
          <p className="weekday-modal-container__top-card__right__appointment-kind">
            {appointment.kind}
          </p>
          <div className="weekday-modal-container__top-card__right__name-img-container">
            <img
              className="weekday-modal-container__top-card__right__name-img-container__img"
              src={appointment.medicalCenter.img}
            />
            <div className="weekday-modal-container__top-card__right__name-img-container__name-type-container">
              <p className="weekday-modal-container__top-card__right__name-img-container__name-type-container__name">
                {appointment.medicalCenter.name}
              </p>
              <p className="weekday-modal-container__top-card__right__name-img-container__name-type-container__type">
                {appointment.medicalCenter.type}
              </p>
            </div>
          </div>
        </div>
        <div className="weekday-modal-container__top-card__left">
          <div className="weekday-modal-container__top-card__left__line" />
          <p className="weekday-modal-container__top-card__left__day">
            <img src="/icons/calendar-blue.svg" alt="calendar-blue" />
            <span>روز:</span>
            {appointment.day}
          </p>
          <p className="weekday-modal-container__top-card__left__hour">
            <img src="/icons/timer-blue.svg" alt="timer-blue" />
            <span>ساعت:</span>
            {appointment.hour}
          </p>
          <p className="weekday-modal-container__top-card__left__number">
            <img src="/icons/Stethoscope-white.svg" alt="Stethoscope-white" />
            <span>نوبت:</span>
            {appointment.number}
          </p>
        </div>
      </div>
      <div className="weekday-modal-container__doctor">
        <div className="weekday-modal-container__doctor__right">
          <img src={appointment.doctor.img} alt="doctor-img" />
          <div className="weekday-modal-container__doctor__right__name-spec-container">
            <p className="weekday-modal-container__doctor__right__name-spec-container__name">
              {appointment.doctor.name}
            </p>
            <p className="weekday-modal-container__doctor__right__name-spec-container__spec">
              {appointment.doctor.specialty}
            </p>
          </div>
        </div>
        <div className="weekday-modal-container__doctor__left">
          <img src="/icons/location.svg" alt="location-icon" />
          <p>{appointment.address}</p>
        </div>
      </div>
      <button className="weekday-modal-container__button" onClick={onSubmit}>
        تایید و پرداخت
      </button>
    </div>
  );
};

export default WeekdayAppointment;
