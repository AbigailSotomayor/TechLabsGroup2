import React from "react";

const FilterOptions = ({ title, options }) => {
  return (
    <div className="mb-4">
      <h1 className="is-size-5 has-text-weight-semibold">{title}</h1>
      <ul className="is-flex is-flex-direction-column">
        {options.map((option) => (
          <li key={option.value}>
            <label className="checkbox">
              <input className="mr-2" type="checkbox" />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterOptions;
