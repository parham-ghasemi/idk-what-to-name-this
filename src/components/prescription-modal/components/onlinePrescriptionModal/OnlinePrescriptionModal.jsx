import { useState } from "react";
import { Modal } from "../modal/Modal";
import "./OnlinePrescriptionModal.scss";
import { insuranceOptions } from "../../PrescriptionModalData";
import Button from "../button/Button";
import PrescriptionTable from "../../../prescriptionTable/PrescriptionTable";

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
    availableDrugs: [
      { name: "استامینوفن 500", price: 5000, amount: 30, use: "هر 8 ساعت" },
      {
        name: "قطره چشمی اشک مصنوعی سینا",
        price: 5000,
        amount: 30,
        use: "هر 8 ساعت",
      },
    ],
  },
  {
    name: "داروخانه شماره دو",
    unAvailableDrugs: ["آموکسی سیلین 250"],
    availableDrugs: [
      { name: "استامینوفن 500", price: 5000, amount: 30, use: "هر 8 ساعت" },
      {
        name: "قطره چشمی اشک مصنوعی سینا",
        price: 5000,
        amount: 30,
        use: "هر 8 ساعت",
      },
    ],
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
  const [foundFullPrescription, setFoundFullPrescription] = useState(true);

  const [onAvailablePharmacy, setOnAvailablePharmacy] = useState(false);
  const [selectedDrugs, setSelectedDrugs] = useState({});

  const [chosenPharmacy, setChosenPharmacy] = useState(" داروخانه شماره یک");

  const tableRows = Object.entries(selectedDrugs).flatMap(
    ([pharmacyIndex, drugNames]) => {
      const pharmacy = availablePharmacies[pharmacyIndex];
      return drugNames
        .map((drugName) => {
          const drug = pharmacy.availableDrugs.find((d) => d.name === drugName);
          if (!drug) return null;
          return {
            name: drug.name,
            price: drug.price,
            amount: drug.amount,
            use: drug.use,
          };
        })
        .filter(Boolean);
    }
  );

  const totalPrice = tableRows.reduce(
    (sum, row) => sum + row.price * row.amount,
    0
  );

  // Sample logic: 20% insurance discount
  const insuranceDiscount = selectedInsurance
    ? Math.floor(totalPrice * 0.2)
    : 0;

  // Fixed shipping cost
  const shippingCost = 45000;

  // Final price
  const finalPrice = totalPrice - insuranceDiscount + shippingCost;

  const handleCancel = () => {
    onClose();
    setCurrentStepIndex(0);
    setDropdownOpen(false);
    setSelectedInsurance(null);
    setNationalCode("");
    setTrackingNumber("");
    setDescription("");
    setFoundPharmacy(true);
    setFoundFullPrescription(false);
    setOnAvailablePharmacy(false);
    setSelectedDrugs({});
    setChosenPharmacy(" داروخانه شماره یک");
  };

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
                </div>
              );
            })}

            <div className="online-prescription-modal-container__online-prescription-modal__steps__item__sep" />
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

              <div className="button-container">
                <Button onClick={() => setCurrentStepIndex(1)}>ثبت نسخه</Button>
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

              <div className="button-container">
                {!trackingNumber || !nationalCode || !selectedInsurance ? (
                  <>
                    <Button onClick={() => setCurrentStepIndex(0)}>
                      ویرایش اطلاعات
                    </Button>
                    <Button onClick={handleCancel}>انصراف</Button>
                  </>
                ) : foundPharmacy ? (
                  foundFullPrescription ? (
                    <Button onClick={() => setCurrentStepIndex(2)}>
                      پشتیبانی
                    </Button>
                  ) : (
                    <>
                      <Button onClick={() => setOnAvailablePharmacy(true)}>
                        انتخاب داروخانه
                      </Button>

                      <Button onClick={handleCancel}>انصراف</Button>
                    </>
                  )
                ) : (
                  <>
                    <Button onClick={() => setCurrentStepIndex(2)}>
                      ویرایش آدرس
                    </Button>

                    <Button onClick={handleCancel}>انصراف</Button>
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
                      pharmacy.availableDrugs.length &&
                    pharmacy.availableDrugs.every((drug) =>
                      selectedForPharmacy.includes(drug.name)
                    );

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
                              : pharmacy.availableDrugs.map((d) => d.name),
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
                            selectedDrugs[pharmacyIndex]?.includes(drug.name) ??
                            false;

                          return (
                            <div
                              key={`drug-${drugIndex}`}
                              className="online-prescription-modal-container__online-prescription-modal__available-pharmacies-container__card-container__card__bottom__drug"
                              onClick={() => {
                                setSelectedDrugs((prev) => {
                                  const prevDrugs = prev[pharmacyIndex] || [];
                                  const newDrugs = prevDrugs.includes(drug.name)
                                    ? prevDrugs.filter((d) => d !== drug.name)
                                    : [...prevDrugs, drug.name];

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
                              <p>{drug.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <div className="button-container">
                  <Button onClick={() => setCurrentStepIndex(2)}>تایید</Button>
                  <Button onClick={handleCancel}>انصراف</Button>
                </div>
              </div>
            </div>
          )}

          {currentStepIndex === 2 && (
            <div className="online-prescription-modal-container__online-prescription-modal__last-page">
              <p className="online-prescription-modal-container__online-prescription-modal__last-page__title">
                تایید و پرداخت
                <span>
                  <img src="/icons/wallet-check.svg" alt="" />
                </span>
              </p>
              <div className="online-prescription-modal-container__online-prescription-modal__last-page__body">
                <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__title">
                  تایید شده توسط{}
                  {`تایید شده توسط${chosenPharmacy}`}
                  <span>
                    <img src="/icons/check-box 1.svg" alt="check-box" />
                  </span>
                </p>

                <div className="online-prescription-modal-container__online-prescription-modal__last-page__body__table-container">
                  <PrescriptionTable rows={tableRows} />
                </div>

                <div className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details">
                  <div className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum">
                    <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum__price">
                      {totalPrice.toLocaleString()} تومان
                    </p>
                    <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum__title">
                      :قیمت کل نسخه
                    </p>
                    <img src="/icons/receipt-text.svg" alt="receipt-text" />
                  </div>

                  <div className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum">
                    <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum__price">
                      {insuranceDiscount.toLocaleString()} تومان
                    </p>
                    <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum__title">
                      :هزینه کسر بیمه
                    </p>
                    <img
                      src="/icons/receipt-discount.svg"
                      alt="receipt-discount"
                    />
                  </div>

                  <div className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum">
                    <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum__price">
                      {shippingCost.toLocaleString()} تومان
                    </p>
                    <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-details__price-sum__title">
                      :هزینه ارسال
                    </p>
                    <img src="/icons/truck-fast.svg" alt="truck-fast" />
                  </div>
                </div>

                <div className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-full-sum">
                  <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-full-sum__price">
                    {finalPrice.toLocaleString()} تومان
                  </p>
                  <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__price-full-sum__title">
                    :قیمت نهایی نسخه
                  </p>
                  <img
                    src="/icons/receipt-text-blue.svg"
                    alt="receipt-text-blue"
                  />
                </div>

                <div className="online-prescription-modal-container__online-prescription-modal__last-page__body__description-container">
                  <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__description-container__title">
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
                <Button onClick={() => setCurrentStepIndex(1)}>
                  پرداخت و ثبت نهایی
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default OnlinePrescriptionModal;
