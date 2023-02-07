import React from "react";
import PropTypes from "prop-types";
import { ToggleSwitchContainer } from "./style";
import { useThemeStore } from "../../../store/themeStore";

interface ToggleSwitchProps {
  isOn: boolean;
}

export const ToggleSwitch = ({ isOn }: ToggleSwitchProps) => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <ToggleSwitchContainer>
      <input
        checked={isOn}
        onChange={toggleTheme}
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
