import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="is-flex  is-justify-content-space-between is-align-items-center py-4 mx-5">
      <button className="is-family-monospace is-size-4 has-text-weight-semibold">
        course'x'plorer
      </button>
      <form className="is-flex is-align-items-center" action="">
        <input
          className="mr-2 input is-primary"
          type="text"
          placeholder="Search for a course..."
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <button className="button is-primary">sign up</button>
    </div>
  );
};

export default NavBar;
