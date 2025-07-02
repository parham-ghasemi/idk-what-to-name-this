import { useState } from "react";
import Button from "../../../button/Button";
import './StepPrescriptionCheck.scss'

const StepPrescriptionCheck = ({
  onClose,
  setCurrentStepIndex,
  setOnAvailablePharmacy,
}) => {
  const [foundPharmacy, setFoundPharmacy] = useState(true);
  const [foundFullPrescription, setFoundFullPrescription] = useState(false);
  const [invalidData, setInvalidData] = useState(false);

  return (
    <>
      <div className="prescription-check-container">
        <p className="prescription-check-container__title">
          بررسی نسخه
          <span>
            <img src="/icons/task-square(small).svg" alt="img" />
          </span>
        </p>

        <p className="prescription-check-container__body">
          {invalidData ? (
            <>
              نسخه‌ای با مشخصات واردشده یافت نشد. لطفاً اطلاعات را بررسی کنید
              <img src="/icons/warning 1.svg" alt="warning" />
            </>
          ) : foundPharmacy ? (
            foundFullPrescription ? (
              <>
                به محض تایید و آماده شدن نسخه، از طریق پیامک به شما اطلاع داده
                می‌شود
                <img src="/icons/notification 1.svg" alt="notif" />
              </>
            ) : (
              <>
                برخی از داروهای نسخه شما در حال حاضر موجود نیستند، آیا مایل به
                دریافت نسخه هستید؟
                <img src="/icons/warning 1.svg" alt="warning" />
              </>
            )
          ) : (
            <>
              متأسفیم، هیچ داروخانه‌ای در نزدیکی شما موفق به تأمین این نسخه نشد
              <img src="/icons/warning 1.svg" alt="warning" />
            </>
          )}
        </p>
      </div>

      <div className="button-container">
        {invalidData ? (
          <>
            <Button onClick={() => setCurrentStepIndex(0)}>
              ویرایش اطلاعات
            </Button>
            <Button onClick={handleCancel}>انصراف</Button>
          </>
        ) : foundPharmacy ? (
          foundFullPrescription ? (
            <Button onClick={() => setCurrentStepIndex(2)}>پشتیبانی</Button>
          ) : (
            <>
              <Button onClick={() => setOnAvailablePharmacy(true)}>
                انتخاب داروخانه
              </Button>
            </>
          )
        ) : (
          <>
            <Button onClick={() => setCurrentStepIndex(2)}>ویرایش آدرس</Button>
          </>
        )}
        <Button onClick={onClose}>انصراف</Button>
      </div>
    </>
  );
};

export default StepPrescriptionCheck;
