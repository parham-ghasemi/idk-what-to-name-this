import "./LoginSignupPage.scss";

const LoginSignupPage = ({ onBack }) => {
  return (
    <div className="login-signup-modal-page">
      <div className="login-signup-modal-page__head">
        <button onClick={onBack}>
          <img src="/icons/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
      <div className="login-signup-modal-page__body">
        <p>برای ادامه مراحل دریافت نوبت، وارد شوید</p>
        <button>ورود/ ثبت نام</button>
      </div>
    </div>
  );
};

export default LoginSignupPage;
