import { useThemeStore } from "../../stores/themeStore";
import { ToggleSwitchContainer } from "./styles";

export const ToggleSwitch = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <ToggleSwitchContainer>
      <input
        // checked={isOn}
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
