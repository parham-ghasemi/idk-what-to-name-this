import "./Modal.scss";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          <img src="/icons/close2.svg" alt="close" />
        </button>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};
