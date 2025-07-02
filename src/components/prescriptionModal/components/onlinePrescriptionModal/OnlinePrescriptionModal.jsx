import { useState } from "react";
import { Modal } from "../modal/Modal";
import "./OnlinePrescriptionModal.scss";
import { onlineSteps } from "../../PrescriptionModalData";
import ModalSteps from "../modalSteps/ModalSteps";
import StepInfo from "./onlinePrescriptionModalPages/stepInfo/StepInfo";
import StepPrescriptionCheck from "./onlinePrescriptionModalPages/stepPrescriptionCheck/StepPrescriptionCheck";
import StepAvailablePharmacy from "./onlinePrescriptionModalPages/stepAvailablePharmacy/StepAvailablePharmacy";
import StepLast from "./onlinePrescriptionModalPages/stepLast/StepLast";

const OnlinePrescriptionModal = ({ isOpen, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [onAvailablePharmacy, setOnAvailablePharmacy] = useState(false);

  const [selectedDrugs, setSelectedDrugs] = useState({});

  return (
    <div className="online-prescription-modal-container">
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="online-prescription-modal-container__online-prescription-modal">
          <p className="online-prescription-modal-container__online-prescription-modal__header">
            نسخه آنلاین
          </p>

          <ModalSteps steps={onlineSteps} currentStepIndex={currentStepIndex} />

          {currentStepIndex === 0 && (
            <StepInfo setCurrentStepIndex={setCurrentStepIndex} />
          )}

          {currentStepIndex === 1 && !onAvailablePharmacy && (
            <StepPrescriptionCheck
              onClose={onClose}
              setCurrentStepIndex={setCurrentStepIndex}
              setOnAvailablePharmacy={setOnAvailablePharmacy}
            />
          )}

          {currentStepIndex === 1 && onAvailablePharmacy && (
            <StepAvailablePharmacy
              selectedDrugs={selectedDrugs}
              setSelectedDrugs={setSelectedDrugs}
              onClose={onClose}
              setCurrentStepIndex={setCurrentStepIndex}
            />
          )}

          {currentStepIndex === 2 && (
            <StepLast selectedDrugs={selectedDrugs} onClose={onClose} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default OnlinePrescriptionModal;
