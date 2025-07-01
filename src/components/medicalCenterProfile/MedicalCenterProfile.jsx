import TopCard from "./medicalCenterProfileComponents/topCard/TopCard";
import "./MedicalProfile.scss";

const data = {
  name: "بیمارستان امیراعلم",
  subtitle: "بیمارستان تخصصی و فوق تخصصی",
  imageURL: "/images/hospital profile photo.png",
  address:
    "آدرس: تهران - تهران، بلوار شهران شمالی، بالاتر از فلکه دوم شهران، بعد از مسجد امام علی، ساختمان داروخانه شبانه روزی دکتر کریمان، طبقه سوم، بلوک شرقی، واحد 31",
  hours: "۲۴ ساعته",
  days: "همه روز",
  distance: "نزدیک من",
  appointmentKind: "گوش، حلق و بینی",
  departments: "درمانگاه فوق تخصصی، اورژانس، جراحی، بستری، پاراکلینیک",
  specialServices: "جراحی پلاستیک و ترمیمی صورت زیبایی صورت و گردن",
  rating: 4.5,
  reviewsCount: 145,
  tags: [
    { label: "دولتی", type: "gov" },
    { label: "آموزشی", type: "edu" },
  ],
};

const MedicalCenterProfile = () => {
  return (
    <div className="medical-center-profile-container">
      <TopCard data={data} />
    </div>
  );
};

export default MedicalCenterProfile;
