import React from "react";
import CourseCard from "./CourseCard";

const CardGrid = ({ onModalOpen, courses, setFavCourses, favCourses }) => {
  return (
    <div className="fixed-grid has-12-cols has-6-cols-mobile">
      <div className="grid ">
        {courses.map((course) => (
          <CourseCard
            onModalOpen={onModalOpen}
            className="cell is-col-span-6"
            course={course}
            setFavCourses={setFavCourses}
            key={course.id}
            favourite={favCourses.some((fav) => fav.id === course.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
