import React from "react";
import Badge from "./Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faArrowRightLong,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({
  onModalOpen,
  className,
  course,
  setFavCourses,
  favourite,
}) => {
  const [isFavourite, setIsFavourite] = React.useState(favourite);

  const cutText = (txt, len) => {
    if (txt.length > len) {
      return txt.substring(0, len) + "...";
    }
  };

  const saveFunction = () => {
    setIsFavourite(!isFavourite);
    console.log(isFavourite);
    if (!isFavourite) {
      setFavCourses((prev) => [
        ...prev.filter((item) => item.id !== course.id),
        { id: course.id, isFavourite: !isFavourite },
      ]);
    } else {
      setFavCourses((prev) => [
        ...prev.filter((item) => item.id !== course.id),
      ]);
    }
  };

  return (
    <div className={className}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4 is-flex is-justify-content-space-between">
                {course.title}
                {setFavCourses && (
                  <button onClick={saveFunction}>
                    {isFavourite ? (
                      <FontAwesomeIcon icon={faStarSolid} color="orange" />
                    ) : (
                      <FontAwesomeIcon icon={faStar} color="orange" />
                    )}
                  </button>
                )}
              </p>
              <div>
                <Badge text={course.university} color="primary" />
                <Badge text={course.degree} color="primary" />
                <Badge text={course.term} color="primary" />
                <Badge text={course.ects} color="primary" />
                <Badge text={course.department} color="primary" />
              </div>
            </div>
          </div>

          <div className="content">
            {course.description && cutText(course.description, 250)}{" "}
            <div className="mt-2">
              <a
                className="has-text-primary is-flex is-align-items-center"
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  onModalOpen(course);
                }}
              >
                read more{" "}
                <FontAwesomeIcon className="ml-2" icon={faArrowRightLong} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
