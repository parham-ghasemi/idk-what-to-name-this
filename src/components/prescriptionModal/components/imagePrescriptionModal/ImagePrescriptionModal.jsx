import "./ImagePrescriptionModal.scss";
import { useState, useRef } from "react";
import ModalSteps from "../modalSteps/ModalSteps";
import { imageSteps, ImageTestTableRows } from "../../PrescriptionModalData";
import StepUpload from "./imagePrescriptionModalSteps/stepUpload/StepUpload";
import StepReview from "./imagePrescriptionModalSteps/stepReview/StepReview";
import StepSubmit from "./imagePrescriptionModalSteps/stepSubmit/StepSubmit";
import { useModal } from "../../../../context/messanger";

const ImagePrescriptionModal = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);
  const { closeModal } = useModal(); // ✅ get closeModal from context

  const totalPrice = ImageTestTableRows.reduce(
    (sum, row) => sum + row.price * row.amount,
    0
  );
  const insuranceDiscount = Math.floor(totalPrice * 0.2);
  const shippingCost = 45000;
  const finalPrice = totalPrice - insuranceDiscount + shippingCost;

  return (
    <div className="image-prescription-modal-container">
      <p className="image-prescription-modal-container__title">نسخه تصویری</p>

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
          tableRows={ImageTestTableRows}
          totalPrice={totalPrice}
          insuranceDiscount={insuranceDiscount}
          shippingCost={shippingCost}
          finalPrice={finalPrice}
          description={description}
          setDescription={setDescription}
          onClose={closeModal} // ✅ use context-based close
        />
      )}
    </div>
  );
};

export default ImagePrescriptionModal;
