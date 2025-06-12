import { useEffect, useState } from "react";
import "./TabsAndSortBar.scss";

const TabAndSortBar = ({ updateTab }) => {
  const tabs = [
    { value: "All", title: "همه", icon: "/icons/Medical Symbol.svg" },
    { value: "In-person", title: "حضوری", icon: "/icons/Stethoscope.svg" },
    { value: "Phone", title: "تلفنی", icon: "/icons/Healthcare Call.svg" },
    { value: "Online", title: "آنلاین", icon: "/icons/messages-2.svg" },
    {
      value: "Clinics",
      title: "مراکز درمانی",
      icon: "/icons/Hospital Symbol.svg",
    },
  ];

  const sortingOptions = [
    { value: "Default", label: "پیشفرض" },
    { value: "Most Successful Appointments", label: "بیشترین نوبت موفق" },
    { value: "Most Popular", label: "محبوب ترین" },
    { value: "Soonest Appointment", label: "نزدیک ترین نوبت" },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeSortingOption, setActiveSortingOption] = useState(0);

  useEffect(() => {
    updateTab(tabs[activeTabIndex].value);
  }, [activeTabIndex]);

  return (
    <div className="tab-and-sort-container">
      <div className="tab-and-sort-container__tab-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={
              "tab-and-sort-container__tab-container__tab" +
              (index === activeTabIndex ? " active" : "") +
              (index === 0 ? " first" : "") +
              (index === tabs.length - 1 ? " last" : "")
            }
            onClick={() => setActiveTabIndex(index)}
          >
            <img
              // src={tab.icon}
              src={index === activeTabIndex ? "/icons/tick.svg" : tab.icon}
              alt="icon"
              className="tab-and-sort-container__tab-container__tab__image"
            />
            <p className="tab-and-sort-container__tab-container__tab__text">
              {tab.title}
            </p>
          </div>
        ))}
      </div>
      <div className="tab-and-sort-container__sort-container">
        <div className="tab-and-sort-container__sort-container__sort-title">
          <img src="/icons/sort.svg" alt="sort icons" />
          <p>:چیدمان</p>
        </div>
        <div className="tab-and-sort-container__sort-container__sort-options">
          {sortingOptions.map((option, index) => (
            <p
              key={index}
              className={
                "tab-and-sort-container__sort-container__sort-options__option" +
                (index === activeSortingOption ? " active" : "")
              }
              onClick={() => setActiveSortingOption(index)}
            >
              {option.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabAndSortBar;
