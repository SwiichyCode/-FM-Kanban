import React, { useState } from "react";
import { Container } from "./style";
import PropTypes from "prop-types";

interface CheckboxProps {
  label: string;
  completed?: boolean;
  onChange: () => void;
}

export const Checkbox = ({
  label,
  completed = false,
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
    onChange();
  };

  return (
    <Container onClick={handleClick}>
      <input type="checkbox" checked={isChecked} />
      <label>{label}</label>
    </Container>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
};
