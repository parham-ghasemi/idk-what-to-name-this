import { useState } from "react";
import { Modal } from "../modal/Modal";
import "./OnlinePrescriptionModal.scss";
import { insuranceOptions } from "../../PrescriptionModalData";

const steps = [
  {
    deActiveIcon: "",
    activeIcon: "/icons/medical-prescription (1) 1 (active).svg",
    currentIcon: "/icons/medical-prescription 1(current).svg",
    title: " اطلاعات نسخه",
  },
  {
    deActiveIcon: "/icons/task-square(deactive).svg",
    activeIcon: "/icons/task-square(active).svg",
    currentIcon: "/icons/task-square(current).svg",
    title: "بررسی نسخه",
  },
  {
    deActiveIcon: "/icons/wallet-check(deactive).svg",
    activeIcon: "/icons/medical-prescription (1) 1 (active).svg",
    currentIcon: "/icons/wallet-check(current).svg",
    title: "تایید و پرداخت",
  },
];

const availablePharmacies = [
  {
    name: "داروخانه شماره یک",
    unAvailableDrugs: ["آموکسی سیلین 250"],
    availableDrugs: ["استامینوفن 500", "قطره چشمی اشک مصنوعی سینا"],
  },
  {
    name: "داروخانه شماره دو",
    unAvailableDrugs: ["آموکسی سیلین 250"],
    availableDrugs: ["استامینوفن 500", "قطره چشمی اشک مصنوعی سینا"],
  },
];

const OnlinePrescriptionModal = ({ isOpen, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [nationalCode, setNationalCode] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [description, setDescription] = useState("");

  const [foundPharmacy, setFoundPharmacy] = useState(true);
  const [foundFullPrescription, setFoundFullPrescription] = useState(false);
  const [onAvailablePharmacy, setOnAvailablePharmacy] = useState(false);

  const [selectedDrugs, setSelectedDrugs] = useState({});

  return (
    <div className="online-prescription-modal-container">
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="online-prescription-modal-container__online-prescription-modal">
          <p className="online-prescription-modal-container__online-prescription-modal__header">
            نسخه آنلاین
          </p>

          <div className="online-prescription-modal-container__online-prescription-modal__steps">
            {steps.map((step, index) => {
              const isCurrent = index === currentStepIndex;
              const isDeactive = index > currentStepIndex;
              const imageClass = isCurrent
                ? "current"
                : isDeactive
                ? "deactive"
                : "active";

              const icon = isCurrent
                ? step.currentIcon
                : isDeactive
                ? step.deActiveIcon
                : step.activeIcon;

              return (
                <div
                  key={`step-${index}`}
                  className="online-prescription-modal-container__online-prescription-modal__steps__item-wrapper"
                >
                  <div className="online-prescription-modal-container__online-prescription-modal__steps__item">
                    <div
                      className={`online-prescription-modal-container__online-prescription-modal__steps__item__image-${imageClass}`}
                    >
                      <img src={icon} alt="icon" />
                    </div>
                    <div
                      className={`online-prescription-modal-container__online-prescription-modal__steps__item__text-${imageClass}`}
                    >
                      {step.title}
                    </div>
                  </div>
                  <div className="online-prescription-modal-container__online-prescription-modal__steps__item__sep" />
                </div>
              );
            })}
          </div>

          {currentStepIndex === 0 && (
            <>
              <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container">
                <p className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__text">
                  <span>
                    <img
                      src="/icons/medical-prescription 1(smal).svg"
                      alt="img"
                    />
                  </span>
                  اطلاعات نسخه
                </p>

                <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container">
                  <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container__title">
                    نوع بیمه
                  </div>

                  <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container__dropdown">
                    <div
                      className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container__dropdown__header"
                      onClick={() => setDropdownOpen((prev) => !prev)}
                    >
                      <span>{selectedInsurance?.label || "نوع بیمه"}</span>
                      <img
                        src="/icons/chevron-down.svg"
                        alt="dropdown"
                        className={`online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container__dropdown__icon${
                          dropdownOpen ? "--open" : ""
                        }`}
                      />
                    </div>

                    <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container__dropdown__list-wrapper">
                      <div
                        className={`online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container__dropdown__list${
                          dropdownOpen
                            ? " online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container__dropdown__list--open"
                            : ""
                        }`}
                      >
                        {insuranceOptions.map((option) => (
                          <div
                            key={option.label}
                            className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__dropdown-container__dropdown__list__item"
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

                <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__codes-container">
                  <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__codes-container__national-code">
                    <p className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__codes-container__national-code__title">
                      کدملی
                    </p>
                    <input
                      type="number"
                      value={nationalCode}
                      onChange={(e) => setNationalCode(e.target.value)}
                    />
                  </div>

                  <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__codes-container__tracking-number">
                    <p className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__codes-container__tracking-number__title">
                      کد رهگیری نسخه
                    </p>
                    <input
                      type="number"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__description-container">
                  <p className="online-prescription-modal-container__online-prescription-modal__prescription-info-container__description-container__title">
                    توضیحات
                  </p>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="online-prescription-modal-container__online-prescription-modal__button-container">
                <button
                  onClick={() => setCurrentStepIndex(1)}
                  className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                >
                  ثبت نسخه
                </button>
              </div>
            </>
          )}

          {currentStepIndex === 1 && !onAvailablePharmacy && (
            <>
              <div className="online-prescription-modal-container__online-prescription-modal__prescription-check-container">
                <p className="online-prescription-modal-container__online-prescription-modal__prescription-check-container__title">
                  بررسی نسخه
                  <span>
                    <img src="/icons/task-square(small).svg" alt="img" />
                  </span>
                </p>

                <p className="online-prescription-modal-container__online-prescription-modal__prescription-check-container__body">
                  {!trackingNumber || !nationalCode || !selectedInsurance ? (
                    <>
                      نسخه‌ای با مشخصات واردشده یافت نشد. لطفاً اطلاعات را بررسی
                      کنید
                      <img src="/icons/warning 1.svg" alt="warning" />
                    </>
                  ) : foundPharmacy ? (
                    foundFullPrescription ? (
                      <>
                        به محض تایید و آماده شدن نسخه، از طریق پیامک به شما
                        اطلاع داده می‌شود
                        <img src="/icons/notification 1.svg" alt="notif" />
                      </>
                    ) : (
                      <>
                        برخی از داروهای نسخه شما در حال حاضر موجود نیستند، آیا
                        مایل به دریافت نسخه هستید؟
                        <img src="/icons/warning 1.svg" alt="warning" />
                      </>
                    )
                  ) : (
                    <>
                      متأسفیم، هیچ داروخانه‌ای در نزدیکی شما موفق به تأمین این
                      نسخه نشد
                      <img src="/icons/warning 1.svg" alt="warning" />
                    </>
                  )}
                </p>
              </div>

              <div className="online-prescription-modal-container__online-prescription-modal__button-container">
                {!trackingNumber || !nationalCode || !selectedInsurance ? (
                  <>
                    <button
                      onClick={() => setCurrentStepIndex(0)}
                      className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                    >
                      ویرایش اطلاعات
                    </button>
                    <button
                      onClick={onClose}
                      className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                    >
                      انصراف
                    </button>
                  </>
                ) : foundPharmacy ? (
                  foundFullPrescription ? (
                    <button
                      onClick={() => setCurrentStepIndex(2)}
                      className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                    >
                      پشتیبانی
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => setOnAvailablePharmacy(true)}
                        className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                      >
                        انتخاب داروخانه
                      </button>

                      <button
                        onClick={onClose}
                        className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                      >
                        انصراف
                      </button>
                    </>
                  )
                ) : (
                  <>
                    <button
                      onClick={() => setCurrentStepIndex(2)}
                      className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                    >
                      ویرایش آدرس
                    </button>

                    <button
                      onClick={onClose}
                      className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                    >
                      انصراف
                    </button>
                  </>
                )}
              </div>
            </>
          )}

          {currentStepIndex === 1 && onAvailablePharmacy && (
            <div className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container">
              <div className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__title-container">
                <p>
                  داروخانه‌هایی که بخشی از نسخه را دارند، در لیست زیر نمایش داده
                  شده‌اند، آیتم‌های مورد نظر خود را انتخاب کنید
                </p>
                <span>
                  <img src="/icons/warning 1.svg" alt="warning" />
                </span>
              </div>

              <div className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container">
                {availablePharmacies.map((pharmacy, pharmacyIndex) => {
                  const selectedForPharmacy =
                    selectedDrugs[pharmacyIndex] || [];
                  const isPharmacySelected =
                    selectedForPharmacy.length ===
                    pharmacy.availableDrugs.length;

                  return (
                    <div
                      key={`pharma-${pharmacyIndex}`}
                      className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card"
                    >
                      <div
                        className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card__card-tick"
                        onClick={() => {
                          const allSelected =
                            selectedForPharmacy.length ===
                            pharmacy.availableDrugs.length;
                          setSelectedDrugs((prev) => ({
                            ...prev,
                            [pharmacyIndex]: allSelected
                              ? []
                              : [...pharmacy.availableDrugs],
                          }));
                        }}
                      >
                        <img
                          src={
                            isPharmacySelected
                              ? "/icons/tick-square.svg"
                              : "/icons/tick-square(not-selected).svg"
                          }
                          alt="tick-square"
                        />
                      </div>

                      <div className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card__top">
                        <div className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card__top__title">
                          <p className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card__top__title__name">
                            {pharmacy.name}
                          </p>
                          <p className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card__top__title__unavailable-drugs">
                            {`داروی ${pharmacy.unAvailableDrugs.join(
                              "، "
                            )} از نسخه شما موجود نیست. از بین داروهای موجود انتخاب کنید`}
                          </p>
                        </div>
                        <img src="/icons/pharmacy (1) 2.svg" alt="pharmacy" />
                      </div>

                      <div className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card__bottom">
                        {pharmacy.availableDrugs.map((drug, drugIndex) => {
                          const isDrugSelected =
                            selectedDrugs[pharmacyIndex]?.includes(drug) ??
                            false;

                          return (
                            <div
                              key={`drug-${drugIndex}`}
                              className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card__bottom__drug"
                              onClick={() => {
                                setSelectedDrugs((prev) => {
                                  const prevDrugs = prev[pharmacyIndex] || [];
                                  const newDrugs = prevDrugs.includes(drug)
                                    ? prevDrugs.filter((d) => d !== drug)
                                    : [...prevDrugs, drug];

                                  return {
                                    ...prev,
                                    [pharmacyIndex]: newDrugs,
                                  };
                                });
                              }}
                            >
                              <img
                                src={
                                  isDrugSelected
                                    ? "/icons/tick-square.svg"
                                    : "/icons/tick-square(not-selected).svg"
                                }
                                alt="tick-square"
                              />
                              <p>{drug}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <div className="online-prescription-modal-container__online-prescription-modal__button-container">
                  <button
                    className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                    onClick={() => setCurrentStepIndex(2)}
                  >
                    تایید 
                  </button>
                  <button
                    className="online-prescription-modal-container__online-prescription-modal__button-container__button"
                    onClick={onClose}
                  >
                    انصراف
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStepIndex === 2 && (
            <div>{/* Your final step content here */}</div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default OnlinePrescriptionModal;
