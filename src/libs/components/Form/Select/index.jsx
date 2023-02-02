import React, { useState } from "react";
import PropTypes from "prop-types";
import { useToggle } from "../../../../hooks/useToggle";
import chevronDown from "../../../../assets/icon-chevron-down.svg";
import { CustomSelect } from "./style";

export const Select = ({ label, columns, currentItem }) => {
  const [open, isOpen] = useToggle(false);
  const [currentValue, setCurrentValue] = useState("");

  const handleClick = (id) => {
    setCurrentValue(id);
    // setStatus(e.target.value);
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
                  onClick={(e) => handleClick(item.id)}
                >
                  {item.name}
                </option>
              );
            })}
            {/* <option value="To Do" onClick={(e) => handleClick(e)}>
              To Do
            </option>
            <option value="In Progress" onClick={(e) => handleClick(e)}>
              In Progress
            </option>
            <option value="Done" onClick={(e) => handleClick(e)}>
              Done
            </option> */}
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
