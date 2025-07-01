import { useState } from "react";
import { availablePharmacies } from "../../../PrescriptionModalData";
import PrescriptionTable from "../../prescriptionTable/PrescriptionTable";
import Button from "../../button/Button";

const StepLast = ({ selectedDrugs, onClose }) => {
  const [chosenPharmacy, setChosenPharmacy] = useState(" داروخانه شماره یک");
  const [description, setDescription] = useState('')

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
  const insuranceDiscount = Math.floor(totalPrice * 0.2);

  // Fixed shipping cost
  const shippingCost = 45000;

  const finalPrice = totalPrice - insuranceDiscount + shippingCost;
  return (
    <div className="online-prescription-modal-container__online-prescription-modal__last-page">
      <p className="online-prescription-modal-container__online-prescription-modal__last-page__title">
        تایید و پرداخت
        <span>
          <img src="/icons/wallet-check.svg" alt="" />
        </span>
      </p>
      <div className="online-prescription-modal-container__online-prescription-modal__last-page__body">
        <p className="online-prescription-modal-container__online-prescription-modal__last-page__body__title">
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
            <img src="/icons/receipt-discount.svg" alt="receipt-discount" />
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
          <img src="/icons/receipt-text-blue.svg" alt="receipt-text-blue" />
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
        <Button onClick={onClose}>پرداخت و ثبت نهایی</Button>
      </div>
    </div>
  );
};

export default StepLast;
