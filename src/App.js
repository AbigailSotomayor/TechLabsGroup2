import "bulma/css/bulma.min.css";
import NavBar from "./components/NavBar";
import FilterMenu from "./components/FilterMenu";
import CardGrid from "./components/CardGrid";
import { useEffect, useState } from "react";
import Badge from "./components/Badge";
import queryString from "query-string";

function App() {
  const [isReadMore, setIsReadMore] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const onModalClose = () => {
    setIsReadMore(!isReadMore);
  };
  const onModalOpen = (course) => {
    setModalContent(course);
    setIsReadMore(!isReadMore);
  };
  const [filters, setFilters] = useState({});

  const [courses, setCourses] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3003/courses?${queryString.stringify(filters)}`, {})
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, [filters]);
  if (!courses) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div
        className="is-flex-direction-column is-flex"
        style={{ minHeight: "100vh" }} //can be removed later
      >
        <NavBar onFormSubmit={setFilters} />
        <div className="is-flex mx-5 is-flex-grow-1 ">
          <FilterMenu setFilters={setFilters} />
          <div className="is-flex-grow-5">
            <CardGrid onModalOpen={onModalOpen} courses={courses} />
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
                        <Badge text={modalContent.university} color="primary" />
                        <Badge text={modalContent.degree} color="primary" />
                        <Badge text={modalContent.term} color="primary" />
                        <Badge text={modalContent.ects} color="primary" />
                        <Badge text={modalContent.department} color="primary" />
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
      </div>{" "}
    </>
  );
}
export default App;
