import "./ImagePrescriptionModal.scss";
import { Modal } from "../modal/Modal";
import { useState } from "react";
import { useRef } from "react";
import Button from "../button/Button";
import PrescriptionTable from "../../../prescriptionTable/PrescriptionTable";
import ModalSteps from "../modalSteps/ModalSteps";
import { imageSteps } from "../../PrescriptionModalData";

const tableRows = [
  {
    name: "استامینوفن 500",
    price: 50000,
    amount: 30,
    use: "هر 8 ساعت",
  },
  {
    name: "آموکسی‌سیلین 250",
    price: 50000,
    amount: 30,
    use: "هر 8 ساعت",
  },
  {
    name: "قطره چشمی اشک مصنوعی سینا",
    price: 50000,
    amount: 30,
    use: "هر 8 ساعت",
  },
];

const ImagePrescriptionModal = ({ isOpen, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [description, setDescription] = useState("");

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // handle the file (e.g., upload it or preview)
      console.log("Selected file:", file);
    }
  };

  const totalPrice = tableRows.reduce(
    (sum, row) => sum + row.price * row.amount,
    0
  );

  // Sample logic: 20% insurance discount
  const insuranceDiscount = Math.floor(totalPrice * 0.2);

  // Fixed shipping cost
  const shippingCost = 45000;

  // Final price
  const finalPrice = totalPrice - insuranceDiscount + shippingCost;

  return (
    <div className="image-prescription-modal-container">
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="image-prescription-modal-container">
          <p className="image-prescription-modal-container__title">
            نسخه تصویری
          </p>

          <ModalSteps steps={imageSteps} currentStepIndex={currentStepIndex} />

          {currentStepIndex === 0 && (
            <>
              <div className="image-prescription-modal-container__info__body">
                <div className="image-prescription-modal-container__info__body__title">
                  <p> اطلاعات نسخه</p>
                  <img
                    src="/icons/medical-prescription 1(smal).svg"
                    alt="medical-prescription"
                  />
                </div>

                <div className="image-prescription-modal-container__info__body__uploader-container">
                  <p className="image-prescription-modal-container__info__body__uploader-container__title">
                    آپلود تصویر نسخه
                  </p>

                  <div
                    className="image-prescription-modal-container__info__body__uploader-container__upload"
                    onClick={handleUploadClick}
                  >
                    <img
                      src="/icons/document-upload-black.svg"
                      alt="document-upload"
                    />
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                </div>

                <div className="image-prescription-modal-container__info__body__phone-number-container">
                  <p>شماره تماس</p>
                  <input type="tel" />
                </div>
                <div className="image-prescription-modal-container__info__body__desc">
                  <p>توضیحات</p>
                  <input
                    type="text"
                    value={description}
                    onChange={(val) => setDescription(val.target.value)}
                  />
                </div>
              </div>

              <div className="button-container">
                <Button onClick={() => setCurrentStepIndex(1)}>ثبت نسخه</Button>
              </div>
            </>
          )}

          {currentStepIndex === 1 && (
            <>
              <div className="image-prescription-modal-container__review__body">
                <div className="image-prescription-modal-container__review__body__title-container">
                  <p>بررسی نسخه</p>
                  <img src="/icons/task-square(small).svg" alt="task-square" />
                </div>

                <div className="image-prescription-modal-container__review__body__content">
                  <p>
                    به محض تایید و آماده شدن نسخه، از طریق پیامک به شما اطلاع
                    داده می‌شود
                  </p>
                  <img src="/icons/notification 1.svg" alt="notification" />
                </div>
              </div>

              <div className="button-container">
                <Button onClick={() => setCurrentStepIndex(2)}>پشتیبانی</Button>
              </div>
            </>
          )}

          {currentStepIndex === 2 && (
            <>
              <div className="image-prescription-modal-container__submit__body">
                <div className="image-prescription-modal-container__submit__body__title">
                  <p>تایید و پرداخت</p>
                  <img src="/icons/wallet-check.svg" alt="wallet-check" />
                </div>
                <PrescriptionTable rows={tableRows} />

                <div className="image-prescription-modal-container__submit__body__price-details">
                  <div className="image-prescription-modal-container__submit__body__price-details__price-sum">
                    <p className="image-prescription-modal-container__submit__body__price-details__price-sum__price">
                      {totalPrice.toLocaleString()} تومان
                    </p>
                    <p className="image-prescription-modal-container__submit__body__price-details__price-sum__title">
                      :قیمت کل نسخه
                    </p>
                    <img src="/icons/receipt-text.svg" alt="receipt-text" />
                  </div>

                  <div className="image-prescription-modal-container__submit__body__price-details__price-sum">
                    <p className="image-prescription-modal-container__submit__body__price-details__price-sum__price">
                      {insuranceDiscount.toLocaleString()} تومان
                    </p>
                    <p className="image-prescription-modal-container__submit__body__price-details__price-sum__title">
                      :هزینه کسر بیمه
                    </p>
                    <img
                      src="/icons/receipt-discount.svg"
                      alt="receipt-discount"
                    />
                  </div>

                  <div className="image-prescription-modal-container__submit__body__price-details__price-sum">
                    <p className="image-prescription-modal-container__submit__body__price-details__price-sum__price">
                      {shippingCost.toLocaleString()} تومان
                    </p>
                    <p className="image-prescription-modal-container__submit__body__price-details__price-sum__title">
                      :هزینه ارسال
                    </p>
                    <img src="/icons/truck-fast.svg" alt="truck-fast" />
                  </div>
                </div>

                <div className="image-prescription-modal-container__submit__body__price-full-sum">
                  <p className="image-prescription-modal-container__submit__body__price-full-sum__price">
                    {finalPrice.toLocaleString()} تومان
                  </p>
                  <p className="image-prescription-modal-container__submit__body__price-full-sum__title">
                    :قیمت نهایی نسخه
                  </p>
                  <img
                    src="/icons/receipt-text-blue.svg"
                    alt="receipt-text-blue"
                  />
                </div>
              </div>

              <div className="image-prescription-modal-container__submit__body__description-container">
                <p className="image-prescription-modal-container__submit__body__description-container__title">
                  توضیحات
                </p>
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
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImagePrescriptionModal;
