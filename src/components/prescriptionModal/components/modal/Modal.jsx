import "./Modal.scss";
import { useModal } from "../../../../context/messanger";

export const Modal = () => {
  const { open, closeModal, content } = useModal();

  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={closeModal} />
      <div className="modal__content">
        <button className="modal__close" onClick={closeModal}>
          <img src="/icons/close2.svg" alt="close" />
        </button>
        <div className="modal__body">{content}</div>
      </div>
    </div>
  );
};
