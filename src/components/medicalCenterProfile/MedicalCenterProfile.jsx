import AboutSection from "./medicalCenterProfileComponents/aboutSection/AboutSection";
import DepartmentsSection from "./medicalCenterProfileComponents/departmetnsSection/DepartmentsSection";
import TopCard from "./medicalCenterProfileComponents/topCard/TopCard";
import "./MedicalProfile.scss";

const data = {
  name: "بیمارستان امیراعلم",
  subtitle: "بیمارستان تخصصی و فوق تخصصی",
  iconURL: "/images/hospital profile photo.png",
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
  phoneNumber: "3371771914-77881578",
  imageURLs: [
    "./images/clinic-img.jpg",
    "./images/clinic-img2.jpg",
    "./images/clinic-img.jpg",
    "./images/clinic-img2.jpg",
  ],
  description:
    "بیمارستان امیر اعلم تهران، یکی از قدیمی‌ترین و مجهزترین مراکز درمانی کشور، با بیش از 80 سال سابقه در ارائه خدمات پزشکی تخصصی و فوق‌تخصصی فعالیت می‌کند. این بیمارستان با دارا بودن بخش‌های پیشرفته‌ای همچون ENT، جراحی، داخلی، تصویربرداری و آزمایشگاه‌های دقیق، مرجع درمانی بسیاری از بیماران در سطح کشور است.",
};

const MedicalCenterProfile = () => {
  return (
    <div className="medical-center-profile-container">
      <TopCard data={data} />
      <AboutSection desc={data.description}/>
      <DepartmentsSection />
    </div>
  );
};

export default MedicalCenterProfile;
