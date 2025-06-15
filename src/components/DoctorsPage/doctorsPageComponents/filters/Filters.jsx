import { useState } from "react";
import Dropdown from "./dropDown/DropDown";
import {
  areaOptions,
  serviceOptions,
  specialtyOptions,
  insuranceOptions,
  cityOptions,
  doctorDetailsOptions,
  academicRankOptions,
} from "./dropDownOptions";
import "./Filters.scss";

const labelMap = {
  male: "مرد",
  female: "زن",
  "only-online": "فقط پزشکان آنلاین",
};

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

  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const selectedFilters = [
    selectedSpecialty && { value: selectedSpecialty, label: selectedSpecialty },
    selectedServices && { value: selectedServices, label: selectedServices },
    selectedCity.label && {
      value: selectedCity.label,
      label: selectedCity.label,
    },
    selectedArea && { value: selectedArea, label: selectedArea },
    ...selectedAcademicRank.map((item) => ({ value: item, label: item })),
    selectedInsurance.label && {
      value: selectedInsurance.label,
      label: selectedInsurance.label,
    },
    selectedDoctorDetails && {
      value: selectedDoctorDetails,
      label: selectedDoctorDetails,
    },
    onlyOnline && { value: "only-online", label: labelMap["only-online"] },
    gender && { value: gender, label: labelMap[gender] },
  ].filter(Boolean);

  const handleRemoveFilter = (filter) => {
    if (filter === selectedCity.label) {
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
    } else if (filter === selectedInsurance.label) {
      setSelectedInsurance("");
    } else if (filter === selectedDoctorDetails) {
      setSelectedDoctorDetails("");
    } else if (filter === "only-online") {
      setOnlyOnline(false);
    } else if (filter === "male" || filter === "female") {
      setGender("");
    }
  };

  const currentAreas =
    areaOptions.find((c) => c.name === selectedCity?.label)?.areas || [];

  return (
    <div className="filters">
      <div className="filters__top-card">
        <div className="filters__top-card__header">
          <img src="/icons/filter.svg" alt="filter icon" />
          <p>فیلترها</p>
        </div>

        <div className="filters__top-card__separator"></div>

        <div className="filters__top-card__selected">
          {selectedFilters.map(({ value, label }, index) => (
            <div key={index} className="filters__top-card__selected__item">
              <p>{label}</p>
              <img
                src="/icons/close.svg"
                alt="delete filter"
                onClick={() => handleRemoveFilter(value)}
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
          value={selectedSpecialty}
          isOpen={openDropdown === "specialty"}
          onToggle={() => toggleDropdown("specialty")}
        />

        <Dropdown
          label="خدمات"
          items={serviceOptions}
          onSelect={setSelectedServices}
          value={selectedServices}
          isOpen={openDropdown === "services"}
          onToggle={() => toggleDropdown("services")}
        />

        <div className="filters__content__location">
          <Dropdown
            label="شهر"
            items={cityOptions}
            onSelect={(val) => {
              setSelectedCity(val);
              setSelectedArea("");
            }}
            value={selectedCity}
            isOpen={openDropdown === "city"}
            onToggle={() => toggleDropdown("city")}
          />

          <Dropdown
            label="محدوده"
            items={currentAreas}
            onSelect={setSelectedArea}
            value={selectedArea}
            isOpen={openDropdown === "area"}
            onToggle={() => toggleDropdown("area")}
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
          <label className="filters__content__online-switch__label">
            <input
              type="checkbox"
              checked={onlyOnline}
              onChange={() => setOnlyOnline(!onlyOnline)}
            />
            <span className="switch-slider" />
            <span className="switch-text">فقط پزشکان آنلاین</span>
          </label>
        </div>

        <Dropdown
          label="درجه علمی"
          items={academicRankOptions}
          onSelect={setSelectedAcademicRank}
          value={selectedAcademicRank}
          multi
          isOpen={openDropdown === "rank"}
          onToggle={() => toggleDropdown("rank")}
        />

        <Dropdown
          label="بیمه"
          items={insuranceOptions}
          onSelect={setSelectedInsurance}
          value={selectedInsurance}
          isOpen={openDropdown === "insurance"}
          onToggle={() => toggleDropdown("insurance")}
        />

        <Dropdown
          label="جزئیات پزشک"
          items={doctorDetailsOptions}
          onSelect={setSelectedDoctorDetails}
          value={selectedDoctorDetails}
          isOpen={openDropdown === "details"}
          onToggle={() => toggleDropdown("details")}
        />
      </div>
    </div>
  );
};
