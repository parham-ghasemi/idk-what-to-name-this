import PrescriptionTable from "../../../prescriptionTable/PrescriptionTable";
import Button from "../../../button/Button";
import './StepSubmit.scss'

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
      <div className="submit__body">
        <div className="submit__body__title">
          <p>تایید و پرداخت</p>
          <img src="/icons/wallet-check.svg" alt="wallet-check" />
        </div>

        <PrescriptionTable rows={tableRows} />

        <div className="submit__body__price-details">
          <div className="submit__body__price-details__price-sum">
            <p className="submit__body__price-details__price-sum__price">
              {totalPrice.toLocaleString()} تومان
            </p>
            <p className="submit__body__price-details__price-sum__title">
              :قیمت کل نسخه
            </p>
            <img src="/icons/receipt-text.svg" alt="receipt-text" />
          </div>

          <div className="submit__body__price-details__price-sum">
            <p className="submit__body__price-details__price-sum__price">
              {insuranceDiscount.toLocaleString()} تومان
            </p>
            <p className="submit__body__price-details__price-sum__title">
              :هزینه کسر بیمه
            </p>
            <img src="/icons/receipt-discount.svg" alt="receipt-discount" />
          </div>

          <div className="submit__body__price-details__price-sum">
            <p className="submit__body__price-details__price-sum__price">
              {shippingCost.toLocaleString()} تومان
            </p>
            <p className="submit__body__price-details__price-sum__title">
              :هزینه ارسال
            </p>
            <img src="/icons/truck-fast.svg" alt="truck-fast" />
          </div>
        </div>

        <div className="submit__body__price-full-sum">
          <p className="submit__body__price-full-sum__price">
            {finalPrice.toLocaleString()} تومان
          </p>
          <p className="submit__body__price-full-sum__title">
            :قیمت نهایی نسخه
          </p>
          <img src="/icons/receipt-text-blue.svg" alt="receipt-text-blue" />
        </div>
      </div>

      <div className="submit__body__description-container">
        <p className="submit__body__description-container__title">توضیحات</p>
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
