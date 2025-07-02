import Button from "../../../button/Button";
import './StepReview.scss'

const StepReview = ({ setCurrentStepIndex }) => {
  return (
    <>
      <div className="review__body">
        <div className="review__body__title-container">
          <p>بررسی نسخه</p>
          <img src="/icons/task-square(small).svg" alt="task-square" />
        </div>

        <div className="review__body__content">
          <p>
            به محض تایید و آماده شدن نسخه، از طریق پیامک به شما اطلاع داده
            می‌شود
          </p>
          <img src="/icons/notification 1.svg" alt="notification" />
        </div>
      </div>

      <div className="button-container">
        <Button onClick={() => setCurrentStepIndex(2)}>پشتیبانی</Button>
      </div>
    </>
  );
};

export default StepReview;
