import "./PrescriptionModalType.scss";

const PrescriptionModalType = ({handlePrescriptionType}) => {
  return (
    <div className="prescription-type-modal">
      <p className="prescription-type-modal__header">
        انتخاب نوع نسخه
      </p>
      <div className="prescription-type-modal__body">
        <div
          className="prescription-type-modal__body__item"
          onClick={() => handlePrescriptionType("image")}
        >
          <img src="/icons/prescription (1) 1.svg" alt="" />
          <p className="prescription-type-modal__body__item__text">
            نسخه تصویری
          </p>
        </div>
        <div
          className="prescription-type-modal__body__item"
          onClick={() => handlePrescriptionType("online")}
        >
          <img src="/icons/medical-prescription 1.svg" alt="" />
          <p className="prescription-type-modal__body__item__text">
            نسخه آنلاین
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionModalType;
