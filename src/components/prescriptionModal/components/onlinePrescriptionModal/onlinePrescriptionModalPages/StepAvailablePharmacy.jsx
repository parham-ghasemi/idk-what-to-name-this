import { availablePharmacies } from "../../../PrescriptionModalData";
import Button from "../../button/Button";

const StepAvailablePharmacy = ({ setSelectedDrugs, selectedDrugs, onClose, setCurrentStepIndex }) => {
  return (
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
          const selectedForPharmacy = selectedDrugs[pharmacyIndex] || [];
          const isPharmacySelected =
            selectedForPharmacy.length === pharmacy.availableDrugs.length &&
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
                    selectedDrugs[pharmacyIndex]?.includes(drug.name) ?? false;

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
          <Button onClick={onClose}>انصراف</Button>
        </div>
      </div>
    </div>
  );
};

export default StepAvailablePharmacy;
