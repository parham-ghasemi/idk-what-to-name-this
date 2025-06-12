import { useState } from "react";
import Dropdown from "./dropDown/DropDown";
import "./Filters.scss";

export const Filters = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedServices, setSelectedServices] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [gender, setGender] = useState("");
  const [onlyOnline, setOnlyOnline] = useState(false);
  const [selectedAcademicRank, setSelectedAcademicRank] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState("");
  const [selectedDoctorDetails, setSelectedDoctorDetails] = useState("");

  const specialtyOptions = ["کودکان", "داخلی", "قلب", "چشم", "زنان و زایمان"];
  const serviceOptions = [
    "نوبت حضوری",
    "مشاوره تلفنی",
    "ویزیت آنلاین",
    "دریافت نسخه",
    "آزمایش در منزل",
    "ارسال مدارک",
    "پشتیبانی",
  ];
  const cityOptions = [
    "تهران",
    "اصفهان",
    "مشهد",
    "شیراز",
    "تبریز",
    "اهواز",
    "رشت",
  ];
  const academicRankOptions = ["استاد", "دانشیار", "استادیار", "پزشک عمومی"];
  const insuranceOptions = [
    { label: "تأمین اجتماعی", image: "/icons/taamin.svg" },
    { label: "سلامت", image: "/icons/salamat.svg" },
    { label: "آتیه‌سازان", image: "/icons/atiyeh.svg" },
    { label: "بانک‌ها", image: "/icons/bank.svg" },
  ];

  const doctorDetailsOptions = [
    "دارای مطب",
    "دارای نسخه الکترونیک",
    "دارای ویزیت آنلاین",
  ];

  const areaOptions = [
    {
      name: "تهران",
      areas: ["مرزداران", "ونک", "پاسداران", "سعادت‌آباد", "تهرانپارس"],
    },
    {
      name: "اصفهان",
      areas: [
        "سپاهان‌شهر",
        "عباس‌آباد",
        "خانه‌اصفهان",
        "احمدآباد",
        "حکیم‌نظامی",
      ],
    },
    {
      name: "مشهد",
      areas: ["احمدآباد", "بلوار سجاد", "الهیه", "قاسم‌آباد", "وکیل‌آباد"],
    },
    {
      name: "شیراز",
      areas: ["قصرالدشت", "معالی‌آباد", "فرزانگان", "زرهی", "بلوار جمهوری"],
    },
    { name: "تبریز", areas: ["ولیعصر", "خیام", "شاه‌گلی", "باغمیشه", "منجم"] },
    { name: "اهواز", areas: ["کیانپارس", "پاداد", "زیتون", "کوروش", "گلستان"] },
    {
      name: "رشت",
      areas: ["گلسار", "معلم", "رشت‌نو", "سبزه‌میدان", "ساغریسازان"],
    },
  ];

  const selectedFilters = [
    selectedSpecialty,
    selectedServices,
    selectedCity,
    selectedArea,
    ...selectedAcademicRank,
    selectedInsurance,
    selectedDoctorDetails,
    onlyOnline ? "فقط پزشکان آنلاین" : "",
    gender === "male" ? "مرد" : gender === "female" ? "زن" : "",
  ].filter(Boolean);

  const handleRemoveFilter = (filter) => {
    if (filter === selectedCity) {
      setSelectedCity("");
      setSelectedArea("");
    } else if (filter === selectedArea) {
      setSelectedArea("");
    } else if (filter === selectedServices) {
      setSelectedServices("");
    } else if (filter === selectedSpecialty) {
      setSelectedSpecialty("");
    } else if (selectedAcademicRank.includes(filter)) {
      setSelectedAcademicRank((prev) => prev.filter((item) => item !== filter));
    } else if (filter === selectedInsurance) {
      setSelectedInsurance("");
    } else if (filter === selectedDoctorDetails) {
      setSelectedDoctorDetails("");
    } else if (filter === "فقط پزشکان آنلاین") {
      setOnlyOnline(false);
    } else if (filter === "مرد" || filter === "زن") {
      setGender("");
    }
  };

  const currentAreas =
    areaOptions.find((c) => c.name === selectedCity)?.areas || [];

  return (
    <div className="filters">
      <div className="filters__top-card">
        <div className="filters__top-card__header">
          <img src="/icons/filter.svg" alt="filter icon" />
          <p>فیلترها</p>
        </div>

        <div className="filters__top-card__separator"></div>

        <div className="filters__top-card__selected">
          {selectedFilters.map((filter, index) => (
            <div key={index} className="filters__top-card__selected__item">
              <p>{filter}</p>
              <img
                src="/icons/close.svg"
                alt="delete filter"
                onClick={() => handleRemoveFilter(filter)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="filters__content">
        <Dropdown
          label="تخصص‌ها"
          items={specialtyOptions}
          onSelect={setSelectedSpecialty}
        />
        <Dropdown
          label="خدمات"
          items={serviceOptions}
          onSelect={setSelectedServices}
        />

        <div className="filters__content__location">
          <Dropdown
            label="شهر"
            items={cityOptions}
            onSelect={(val) => {
              setSelectedCity(val);
              setSelectedArea("");
            }}
          />
          <Dropdown
            label="محدوده"
            items={currentAreas}
            onSelect={setSelectedArea}
          />
        </div>

        <div className="filters__content__gender">
          <label className="filters__content__gender__option">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <span>مرد</span>
          </label>
          <label className="filters__content__gender__option">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            <span>زن</span>
          </label>
          <span className="filters__content__gender__label">جنسیت پزشک</span>
        </div>

        <div className="filters__content__online-switch">
          <label className="label">
            <input
              type="checkbox"
              className="checkbox"
              checked={onlyOnline}
              onChange={() => setOnlyOnline(!onlyOnline)}
            />
            فقط پزشکان آنلاین
          </label>
        </div>

        <Dropdown
          label="درجه علمی"
          items={academicRankOptions}
          onSelect={setSelectedAcademicRank}
          multi
        />
        <Dropdown
          label="بیمه"
          items={insuranceOptions}
          onSelect={setSelectedInsurance}
        />
        <Dropdown
          label="جزئیات پزشک"
          items={doctorDetailsOptions}
          onSelect={setSelectedDoctorDetails}
        />
      </div>
    </div>
  );
};
