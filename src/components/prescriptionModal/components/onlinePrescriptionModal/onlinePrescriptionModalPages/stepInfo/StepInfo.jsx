import { useState } from "react";
import { insuranceOptions } from "../../../../PrescriptionModalData";
import Button from "../../../button/Button";
import './StepInfo.scss';

const StepInfo = ({ setCurrentStepIndex }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nationalCode, setNationalCode] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="prescription-info-container">
        <p className="prescription-info-container__text">
          <span>
            <img src="/icons/medical-prescription 1(smal).svg" alt="img" />
          </span>
          اطلاعات نسخه
        </p>

        <div className="prescription-info-container__dropdown-container">
          <div className="prescription-info-container__dropdown-container__title">
            نوع بیمه
          </div>

          <div className="prescription-info-container__dropdown-container__dropdown">
            <div
              className="prescription-info-container__dropdown-container__dropdown__header"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span>{selectedInsurance?.label || "نوع بیمه"}</span>
              <img
                src="/icons/chevron-down.svg"
                alt="dropdown"
                className={`prescription-info-container__dropdown-container__dropdown__icon${
                  dropdownOpen ? "--open" : ""
                }`}
              />
            </div>

            <div className="prescription-info-container__dropdown-container__dropdown__list-wrapper">
              <div
                className={`prescription-info-container__dropdown-container__dropdown__list${
                  dropdownOpen ? "--open" : ""
                }`}
              >
                {insuranceOptions.map((option) => (
                  <div
                    key={option.label}
                    className="prescription-info-container__dropdown-container__dropdown__list__item"
                    onClick={() => {
                      setSelectedInsurance(option);
                      setDropdownOpen(false);
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="prescription-info-container__codes-container">
          <div className="prescription-info-container__codes-container__national-code">
            <p className="prescription-info-container__codes-container__national-code__title">
              کدملی
            </p>
            <input
              type="number"
              value={nationalCode}
              onChange={(e) => setNationalCode(e.target.value)}
            />
          </div>

          <div className="prescription-info-container__codes-container__tracking-number">
            <p className="prescription-info-container__codes-container__tracking-number__title">
              کد رهگیری نسخه
            </p>
            <input
              type="number"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="prescription-info-container__description-container">
          <p className="prescription-info-container__description-container__title">
            توضیحات
          </p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="button-container">
        <Button onClick={() => setCurrentStepIndex(1)}>ثبت نسخه</Button>
      </div>
    </>
  );
};

export default StepInfo;
