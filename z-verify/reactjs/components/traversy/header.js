import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="flex justify-between mb-6">
      <h1 className="text-xl font-bold">{title}</h1>
      {location.pathname === "/" && (
        <Button
          color="c_green"
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

// props default value
Header.defaultProps = {
  title: "Task tracker",
};

// define props type
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
