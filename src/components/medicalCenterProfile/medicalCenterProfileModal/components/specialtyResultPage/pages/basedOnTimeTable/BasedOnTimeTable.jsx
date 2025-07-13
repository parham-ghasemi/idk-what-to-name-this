import "./BasedOnTimeTable.scss";
import { useModal } from "../../../../../../../context/messanger";
import WeekdayAppointment from "../../../weekdayAppointment/WeekdayAppointment";

const weekDays = [
  {
    day: "saturday",
    label: "شنبه",
    date: "28 اردیبهشت",
    appointments: [
      {
        time: "8-10",
        numberOfAppointments: "5",
      },
      {
        time: "14-18",
        numberOfAppointments: "20",
      },
    ],
  },
  {
    day: "sunday",
    label: "یکشنبه",
    date: "28 اردیبهشت",
    appointments: [],
  },
  {
    day: "monday",
    label: "دوشنبه",
    date: "28 اردیبهشت",
    appointments: [
      {
        time: "8-10",
        numberOfAppointments: "",
      },
      {
        time: "14-18",
        numberOfAppointments: "20",
      },
    ],
  },
  {
    day: "tuesday",
    label: "سهشنبه",
    date: "28 اردیبهشت",
    appointments: [
      {
        time: "8-10",
        numberOfAppointments: "",
      },
      {
        time: "14-18",
        numberOfAppointments: "20",
      },
    ],
  },
  {
    day: "wednesday",
    label: "چهارشنبه",
    date: "28 اردیبهشت",
    appointments: [],
  },
  {
    day: "thursday",
    label: "پنجشنبه",
    date: "28 اردیبهشت",
    appointments: [
      {
        time: "8-10",
        numberOfAppointments: "",
      },
      {
        time: "14-18",
        numberOfAppointments: "20",
      },
      {
        time: "14-18",
        numberOfAppointments: "20",
      },
    ],
  },
  {
    day: "friday",
    label: "جمعه",
    date: "28 اردیبهشت",
    appointments: [],
  },
];

const BasedOnTimeTable = ({ onItemClick }) => {
  return (
    <div className="based-tt-container">
      {weekDays.map((day, index) => (
        <div className="based-tt-container__day-row" key={`day-${index}`}>
          <div className="based-tt-container__day-row__day-card">
            <div className="based-tt-container__day-row__day-card__label">
              {day.label}
            </div>
            <div className="based-tt-container__day-row__day-card__date">
              {day.date}
            </div>
          </div>
          <div className="based-tt-container__day-row__appointment-card-container">
            {day.appointments && day.appointments.length > 0 ? (
              day.appointments.map((item, index) => (
                <div
                  key={`appointment-card-${index}`}
                  onClick={onItemClick}
                  className="based-tt-container__day-row__appointment-card-container__appointment-card"
                >
                  <p className="based-tt-container__day-row__appointment-card-container__appointment-card__time">
                    {item.time}
                  </p>
                  <p className="based-tt-container__day-row__appointment-card-container__appointment-card__noa">
                    {`${item.numberOfAppointments} نوبت `}
                  </p>
                </div>
              ))
            ) : (
              <div
                key={`appointment-card-${index}`}
                className="based-tt-container__day-row__appointment-card-container__no-appointments"
              >
                <p>بدون نوبت</p>
                <span>-</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BasedOnTimeTable;
