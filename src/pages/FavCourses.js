import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";
import CardGrid from "../components/CardGrid";
import Badge from "../components/Badge";
import NoResults from "../components/NoResults";

const FavCourses = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [favCourses, setFavCourses] = useState(undefined);

  const onModalClose = () => {
    setIsReadMore(!isReadMore);
  };
  const onModalOpen = (course) => {
    setModalContent(course);
    setIsReadMore(!isReadMore);
  };
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setFavCourses(JSON.parse(localStorage.getItem("favCourses") || "[]"));
  }, []);

  useEffect(() => {
    if (favCourses === undefined) {
      return;
    }

    const fetchCourses = async () => {
      setCourses(
        await Promise.all(
          favCourses.map(async (course) => {
            return fetch(`http://localhost:3003/courses/${course.id}`)
              .then((res) => res.json())
              .then((data) => {
                return data;
              });
          })
        )
      );
    };
    fetchCourses();
  }, [favCourses]);

  if (favCourses === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="is-flex-direction-column is-flex"
        style={{ minHeight: "100vh" }} //can be removed later
      >
        <NavBar />

        {courses.length === 0 ? (
          <NoResults text="No courses were saved" />
        ) : (
          <div className="is-flex mx-5 is-flex-grow-1 ">
            <div className="is-flex-grow-5">
              <CardGrid
                onModalOpen={onModalOpen}
                courses={courses}
                favCourses={favCourses}
              />
              {isReadMore ? (
                <div className="modal is-active">
                  <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className=" is-flex modal-card-head is-justify-content-space-between">
                      <div>
                        <p className="modal-card-title mb-4">
                          {modalContent.title}
                        </p>
                        <div>
                          <Badge
                            text={modalContent.university}
                            color="primary"
                          />
                          <Badge text={modalContent.degree} color="primary" />
                          <Badge text={modalContent.term} color="primary" />
                          <Badge text={modalContent.ects} color="primary" />
                          <Badge
                            text={modalContent.department}
                            color="primary"
                          />
                        </div>
                      </div>
                      <button
                        className="delete"
                        aria-label="close"
                        onClick={() => {
                          onModalClose();
                        }}
                      ></button>
                    </header>
                    <section className="modal-card-body">
                      {modalContent.description}
                    </section>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FavCourses;
