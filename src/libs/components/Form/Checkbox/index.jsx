import React, { useState } from "react";
import { Container } from "./style";
import PropTypes from "prop-types";

export const Checkbox = ({ label, completed, onChange }) => {
  const [isChecked, setIsChecked] = useState(completed);

  // const handleCheck = () => {
  //   setIsChecked((prev) => !prev);
  // };

  const handleClick = () => {
    setIsChecked((prev) => !prev);

    onChange();
  };

  return (
    <Container isChecked={isChecked} onClick={handleClick}>
      <input
        type="checkbox"
        checked={isChecked}
        // onClick={handleClick}
        onChange={onChange}
      />
      <label>{label}</label>
    </Container>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};
