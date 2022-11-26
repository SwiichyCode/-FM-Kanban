import React from "react";
import PropTypes from "prop-types";
import { ToggleSwitchContainer } from "./style";

export const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <ToggleSwitchContainer>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </label>
    </ToggleSwitchContainer>
  );
};

ToggleSwitch.propTypes = { isOn: PropTypes.bool, handleToggle: PropTypes.func };
