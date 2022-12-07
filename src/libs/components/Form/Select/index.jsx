import React, { useState } from "react";
import PropTypes from "prop-types";
import { useToggle } from "../../../../hooks/useToggle";
import chevronDown from "../../../../assets/icon-chevron-down.svg";
import { CustomSelect } from "./style";

export const Select = ({ label, columns, currentItem, setStatus }) => {
  const [open, isOpen] = useToggle(false);
  const [currentValue, setCurrentValue] = useState("");

  const handleClick = (e) => {
    setCurrentValue(e.target.value);
    setStatus(e.target.value);
    isOpen(false);
  };

  return (
    <CustomSelect open={open}>
      <label className="select-label">{label}</label>

      <div className="current-select" onClick={() => isOpen((prev) => !prev)}>
        <span>{currentItem || currentValue || "Choose a status"}</span>
        <img src={chevronDown} alt="" />
      </div>

      {open && (
        // Change this div by select
        <div className="current-items">
          <ul>
            {columns.map((item, index) => {
              return (
                <option
                  value={item.name}
                  key={index}
                  onClick={(e) => handleClick(e)}
                >
                  {item.name}
                </option>
              );
            })}
          </ul>
        </div>
      )}
    </CustomSelect>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  currentItem: PropTypes.string,
};
