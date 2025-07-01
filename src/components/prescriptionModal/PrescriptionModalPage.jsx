import ImagePrescriptionModal from "./components/imagePrescriptionModal/ImagePrescriptionModal";
import { Modal } from "./components/modal/Modal";
import OnlinePrescriptionModal from "./components/onlinePrescriptionModal/OnlinePrescriptionModal";
import "./PrescriptionModalPage.scss";
import { useState } from "react";

const PrescriptionModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prescriptionType, setPrescriptionType] = useState(null);

  const handlePrescriptionType = (type) => {
    setPrescriptionType(type);
    setIsOpen(false);
  };

  return (
    <div className="prescription-modal-page">
      <button
        className="prescription-modal-page__button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        سفارش از طریق نسخه
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="prescription-modal-page__pres-type-modal">
          <p className="prescription-modal-page__pres-type-modal__header">
            انتخاب نوع نسخه
          </p>
          <div className="prescription-modal-page__pres-type-modal__body">
            <div
              className="prescription-modal-page__pres-type-modal__body__item"
              onClick={() => handlePrescriptionType("image")}
            >
              <img src="/icons/prescription (1) 1.svg" alt="" />
              <p className="prescription-modal-page__pres-type-modal__body__item__text">
                نسخه تصویری
              </p>
            </div>
            <div
              className="prescription-modal-page__pres-type-modal__body__item"
              onClick={() => handlePrescriptionType("online")}
            >
              <img src="/icons/medical-prescription 1.svg" alt="" />
              <p className="prescription-modal-page__pres-type-modal__body__item__text">
                نسخه آنلاین
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <OnlinePrescriptionModal
        isOpen={prescriptionType === "online"}
        onClose={() => setPrescriptionType(null)}
      />
      <ImagePrescriptionModal
        isOpen={prescriptionType === "image"}
        onClose={() => setPrescriptionType(null)}
      />
    </div>
  );
};

export default PrescriptionModalPage;
