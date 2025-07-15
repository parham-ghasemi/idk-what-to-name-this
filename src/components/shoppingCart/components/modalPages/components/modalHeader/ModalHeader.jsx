import { useModal } from "../../../../../../context/messanger";
import "./ModalHeader.scss";

const ModalHeader = ({ title, blackTitle = false }) => {
  const { closeModal } = useModal();

  return (
    <div className="cart-modal-header">
      <p
        className={`cart-modal-header__title ${
          blackTitle && "cart-modal-header__title--black"
        }`}
      >
        {title}
      </p>
      <button onClick={closeModal}>
        <img src="/icons/close2.svg" alt="close" />
      </button>
    </div>
  );
};

export default ModalHeader;
