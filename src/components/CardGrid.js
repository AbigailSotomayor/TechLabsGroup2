import React from "react";
import CourseCard from "./CourseCard";

const CardGrid = ({ onModalOpen, courses }) => {
  return (
    <div className="fixed-grid has-12-cols">
      <div className="grid ">
        {courses.map((course) => (
          <CourseCard
            onModalOpen={onModalOpen}
            className="cell is-col-span-6"
            course={course}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
