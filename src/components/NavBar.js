import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = ({ onFormSubmit }) => {
  const [query, setQuery] = React.useState("");
  return (
    <div className="is-flex  is-justify-content-space-between is-align-items-center py-4 mx-5">
      <Link
        className="  has-text-black is-family-monospace is-size-4 has-text-weight-semibold"
        to="/"
      >
        course'x'plorer
      </Link>

      {onFormSubmit && (
        <form
          className="is-flex is-align-items-center"
          action=""
          onSubmit={(event) => {
            event.preventDefault();
            onFormSubmit((prev) => ({ ...prev, query }));
          }}
        >
          <input
            className="mr-2 input is-primary"
            type="text"
            placeholder="Search for a course..."
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      )}
      {onFormSubmit ? (
        <Link className="button is-primary is-light" to="/saved">
          saved
        </Link>
      ) : (
        <Link className="button is-primary " to="/saved">
          saved
        </Link>
      )}
    </div>
  );
};

export default NavBar;
