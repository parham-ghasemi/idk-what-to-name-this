import "./ImagePrescriptionModal.scss";
import { Modal } from "../modal/Modal";
import { useState, useRef } from "react";
import ModalSteps from "../modalSteps/ModalSteps";
import { imageSteps } from "../../PrescriptionModalData";
import StepUpload from "./imagePrescriptionModalSteps/StepUpload";
import StepReview from "./imagePrescriptionModalSteps/StepReview";
import StepSubmit from "./imagePrescriptionModalSteps/StepSubmit";
import { ImageTestTableRows } from "../../PrescriptionModalData";

const ImagePrescriptionModal = ({ isOpen, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);

  const totalPrice = ImageTestTableRows.reduce(
    (sum, row) => sum + row.price * row.amount,
    0
  );
  const insuranceDiscount = Math.floor(totalPrice * 0.2);
  const shippingCost = 45000;
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
            <StepUpload
              fileInputRef={fileInputRef}
              setCurrentStepIndex={setCurrentStepIndex}
              description={description}
              setDescription={setDescription}
            />
          )}

          {currentStepIndex === 1 && (
            <StepReview setCurrentStepIndex={setCurrentStepIndex} />
          )}

          {currentStepIndex === 2 && (
            <StepSubmit
              tableRows={tableRows}
              totalPrice={totalPrice}
              insuranceDiscount={insuranceDiscount}
              shippingCost={shippingCost}
              finalPrice={finalPrice}
              description={description}
              setDescription={setDescription}
              onClose={onClose}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ImagePrescriptionModal;
