import React, { useState } from "react";
import { Container } from "./style";
import PropTypes from "prop-types";

export const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Container checked={checked}>
      <input type="checkbox" onClick={() => setChecked((prev) => !prev)} />
      <label>{label}</label>
    </Container>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};
