import React, { useState } from "react";
import { Container } from "./style";
import PropTypes from "prop-types";

export const Checkbox = ({ label, completed }) => {
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <Container
      isChecked={isChecked}
      onClick={() => setIsChecked((prev) => !prev)}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onClick={() => setIsChecked((prev) => !prev)}
      />
      <label>{label}</label>
    </Container>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};
