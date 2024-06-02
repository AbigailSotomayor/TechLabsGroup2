import React from "react";

const FilterOptions = ({ title, filter, options, handleChange }) => {
  return (
    <div className="mb-4">
      <h1 className="is-size-5 has-text-weight-semibold">{title}</h1>
      <ul className="is-flex is-flex-direction-column">
        {options.map((option) => (
          <li key={option.value}>
            <label className="checkbox">
              <input
                className="mr-2"
                type="checkbox"
                name={option.value}
                onChange={(event) => handleChange(event, filter)}
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterOptions;
