import React from "react";

const Badge = ({ text, color }) => {
  return <span className={`tag is-${color} is-light mr-3`}>{text}</span>;
};

export default Badge;
