import React from "react";
import FilterOptions from "./FilterOptions";

const OPTIONS = [
  {
    title: "University",
    value: "university",
    options: [
      { value: "dtu", label: "DTU" },
      { value: "cbs", label: "CBS" },
      { value: "ku", label: "KU" },
      { value: "itu", label: "ITU" },
    ],
  },
  {
    title: "Term",
    value: "term",
    options: [
      { value: "fall", label: "Fall" },
      { value: "spring", label: "Spring" },
    ],
  },
  {
    title: "ECTS",
    value: "ects",
    options: [
      { value: "5", label: "5 ECTS" },
      { value: "10", label: "10 ECTS" },
      { value: "15", label: "15 ECTS" },
    ],
  },
  {
    title: "Degree",
    value: "degree",
    options: [
      { value: "bachelor", label: "Bachelor" },
      { value: "master", label: "Master" },
    ],
  },
];
const FilterMenu = ({ setFilters }) => {
  const handleChange = (event, filter) => {
    if (event.target.checked) {
      setFilters((prev) => ({
        ...prev,
        [filter]: [
          ...((prev[filter] || []).filter((opt) => opt !== event.target.name) ||
            []),
          event.target.name,
        ],
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [filter]: (prev[filter] || []).filter(
          (opt) => opt !== event.target.name
        ),
      }));
    }
  };
  return (
    <div
      className="is-flex-grow-1 is-flex is-flex-direction-column"
      style={{ height: "100%" }}
    >
      {OPTIONS.map((option) => (
        <FilterOptions
          key={option.title}
          filter={option.value}
          title={option.title}
          options={option.options}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default FilterMenu;
