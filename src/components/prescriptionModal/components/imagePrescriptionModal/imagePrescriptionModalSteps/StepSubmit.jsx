import PrescriptionTable from "../../prescriptionTable/PrescriptionTable";
import Button from "../../button/Button";

const StepSubmit = ({
  tableRows,
  totalPrice,
  insuranceDiscount,
  shippingCost,
  finalPrice,
  description,
  setDescription,
  onClose,
}) => {
  return (
    <>
      <div className="image-prescription-modal-container__submit__body">
        <div className="image-prescription-modal-container__submit__body__title">
          <p>تایید و پرداخت</p>
          <img src="/icons/wallet-check.svg" alt="wallet-check" />
        </div>

        <PrescriptionTable rows={tableRows} />

        <div className="image-prescription-modal-container__submit__body__price-details">
          <div className="image-prescription-modal-container__submit__body__price-details__price-sum">
            <p className="__price">{totalPrice.toLocaleString()} تومان</p>
            <p className="__title">:قیمت کل نسخه</p>
            <img src="/icons/receipt-text.svg" alt="receipt-text" />
          </div>

          <div className="image-prescription-modal-container__submit__body__price-details__price-sum">
            <p className="__price">
              {insuranceDiscount.toLocaleString()} تومان
            </p>
            <p className="__title">:هزینه کسر بیمه</p>
            <img src="/icons/receipt-discount.svg" alt="receipt-discount" />
          </div>

          <div className="image-prescription-modal-container__submit__body__price-details__price-sum">
            <p className="__price">{shippingCost.toLocaleString()} تومان</p>
            <p className="__title">:هزینه ارسال</p>
            <img src="/icons/truck-fast.svg" alt="truck-fast" />
          </div>
        </div>

        <div className="image-prescription-modal-container__submit__body__price-full-sum">
          <p className="__price">{finalPrice.toLocaleString()} تومان</p>
          <p className="__title">:قیمت نهایی نسخه</p>
          <img src="/icons/receipt-text-blue.svg" alt="receipt-text-blue" />
        </div>
      </div>

      <div className="image-prescription-modal-container__submit__body__description-container">
        <p className="__title">توضیحات</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="button-container">
        <Button onClick={onClose}>پرداخت و ثبت نهایی</Button>
      </div>
    </>
  );
};

export default StepSubmit;
