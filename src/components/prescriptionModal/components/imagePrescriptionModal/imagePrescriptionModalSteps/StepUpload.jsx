import Button from "../../button/Button";

const StepUpload = ({
  fileInputRef,
  setCurrentStepIndex,
  description,
  setDescription,
}) => {
  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) console.log("Selected file:", file);
  };

  return (
    <>
      <div className="image-prescription-modal-container__info__body">
        <div className="image-prescription-modal-container__info__body__title">
          <p> اطلاعات نسخه</p>
          <img
            src="/icons/medical-prescription 1(smal).svg"
            alt="medical-prescription"
          />
        </div>

        <div className="image-prescription-modal-container__info__body__uploader-container">
          <p className="image-prescription-modal-container__info__body__uploader-container__title">
            آپلود تصویر نسخه
          </p>

          <div
            className="image-prescription-modal-container__info__body__uploader-container__upload"
            onClick={handleUploadClick}
          >
            <img src="/icons/document-upload-black.svg" alt="document-upload" />
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        <div className="image-prescription-modal-container__info__body__phone-number-container">
          <p>شماره تماس</p>
          <input type="tel" />
        </div>

        <div className="image-prescription-modal-container__info__body__desc">
          <p>توضیحات</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="button-container">
        <Button onClick={() => setCurrentStepIndex(1)}>ثبت نسخه</Button>
      </div>
    </>
  );
};

export default StepUpload;
