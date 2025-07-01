import "./PrescriptionTable.scss";

const PrescriptionTable = ({ rows }) => {
  return (
    <div className="prescription-table">
      <div className="prescription-table__columns-layout">
        <div className="prescription-table__column">
          <div className="prescription-table__column__header">
            نام دارو
            <img src="/icons/medicine 1.svg" alt="icon" />
          </div>
          <div className="prescription-table__column__cells-container">
            {rows.map((row, i) => (
              <div
                key={`name-${i}`}
                className="prescription-table__column__cells-container__cell"
              >
                {row.name}
              </div>
            ))}
          </div>
        </div>

        <div className="prescription-table__column">
          <div className="prescription-table__column__header">
            قیمت
            <img src="/icons/medicines-time 1.svg" alt="icon" />
          </div>
          <div className="prescription-table__column__cells-container">
            {rows.map((row, i) => (
              <div
                key={`price-${i}`}
                className="prescription-table__column__cells-container__cell"
              >
                {row.price.toLocaleString()} تومان
              </div>
            ))}
          </div>
        </div>

        <div className="prescription-table__column">
          <div className="prescription-table__column__header">
            تعداد
            <img src="/icons/medical-price 1.svg" alt="icon" />
          </div>
          <div className="prescription-table__column__cells-container">
            {rows.map((row, i) => (
              <div
                key={`amount-${i}`}
                className="prescription-table__column__cells-container__cell"
              >
                {row.amount} عدد
              </div>
            ))}
          </div>
        </div>

        <div className="prescription-table__column">
          <div className="prescription-table__column__header">
            روش مصرف
            <img src="/icons/dosage 1.svg" alt="icon" />
          </div>
          <div className="prescription-table__column__cells-container">
            {rows.map((row, i) => (
              <div
                key={`use-${i}`}
                className="prescription-table__column__cells-container__cell"
              >
                {row.use}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionTable;
