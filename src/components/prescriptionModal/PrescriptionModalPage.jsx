import ImagePrescriptionModal from "./components/imagePrescriptionModal/ImagePrescriptionModal";
import { Modal } from "./components/modal/Modal";
import OnlinePrescriptionModal from "./components/onlinePrescriptionModal/OnlinePrescriptionModal";
import "./PrescriptionModalPage.scss";
import PrescriptionModalType from "./components/prescriptionModalType/PrescriptionModalType";
import { useModal } from "../../context/messanger";

const PrescriptionModalPage = () => {
  const { openModal } = useModal(); 

  const handlePrescriptionType = (type) => {
    if (type === "online") {
      openModal(<OnlinePrescriptionModal />);
    } else if (type === "image") {
      openModal(<ImagePrescriptionModal />);
    }
  };

  return (
    <div className="prescription-modal-page">
      <Modal />
      <button
        className="prescription-modal-page__button"
        onClick={() =>
          openModal(
            <PrescriptionModalType
              handlePrescriptionType={handlePrescriptionType}
            />
          )
        }
      >
        سفارش از طریق نسخه
      </button>
    </div>
  );
};

export default PrescriptionModalPage;
