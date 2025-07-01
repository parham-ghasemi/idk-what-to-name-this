import "./ModalSteps.scss";

const ModalSteps = ({ steps, currentStepIndex }) => {
  return (
    <div className="modal-steps">
      {steps.map((step, index) => {
        const isCurrent = index === currentStepIndex;
        const isDeactive = index > currentStepIndex;
        const imageClass = isCurrent
          ? "current"
          : isDeactive
          ? "deactive"
          : "active";

        const icon = isCurrent
          ? step.currentIcon
          : isDeactive
          ? step.deActiveIcon
          : step.activeIcon;

        return (
          <div
            key={`step-${index}`}
            className="modal-steps__item-wrapper"
          >
            <div className="modal-steps__item">
              <div
                className={`modal-steps__item__image-${imageClass}`}
              >
                <img src={icon} alt="icon" />
              </div>
              <div
                className={`modal-steps__item__text-${imageClass}`}
              >
                {step.title}
              </div>
            </div>
          </div>
        );
      })}

      <div className="modal-steps__item__sep" />
    </div>
  );
};

export default ModalSteps;
