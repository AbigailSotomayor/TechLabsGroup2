import React from "react";
import FilterOptions from "./FilterOptions";

const OPTIONS = [
  {
    title: "University",
    options: [
      { value: "dtu", label: "DTU" },
      { value: "cbs", label: "CBS" },
      { value: "ku", label: "KU" },
      { value: "itu", label: "ITU" },
    ],
  },
  {
    title: "Term",
    options: [
      { value: "fall", label: "Fall" },
      { value: "spring", label: "Spring" },
    ],
  },
  {
    title: "ECTS",
    options: [
      { value: "5", label: "5 ECTS" },
      { value: "10", label: "10 ECTS" },
      { value: "15", label: "15 ECTS" },
    ],
  },
  {
    title: "Degree",
    options: [
      { value: "bachelor", label: "Bachelor" },
      { value: "master", label: "Master" },
    ],
  },
];
const FilterMenu = () => {
  return (
    <div
      className="is-flex-grow-1 is-flex is-flex-direction-column"
      style={{ height: "100%" }}
    >
      {OPTIONS.map((option) => (
        <FilterOptions
          key={option.title}
          title={option.title}
          options={option.options}
        />
      ))}
    </div>
  );
};

export default FilterMenu;
