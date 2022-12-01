import React, { useState } from "react";
import chevronDown from "../../../../assets/icon-chevron-down.svg";
import { useToggle } from "../../../../hooks/useToggle";
import { CustomSelect } from "./style";

export const Select = ({ label, columns, currentItem }) => {
  const [open, isOpen] = useToggle(false);
  const [currentValue, setCurrentValue] = useState("");

  console.log(currentValue);
  return (
    <CustomSelect>
      <label className="select-label">{label}</label>

      <div className="current-select" onClick={() => isOpen((prev) => !prev)}>
        <span>{currentValue || currentItem}</span>
        <img src={chevronDown} alt="" />

        {open && (
          // Change this div by select
          <div className="current-items">
            <ul>
              {columns.map((item, index) => {
                return (
                  <option
                    value={item.name}
                    key={index}
                    onClick={(e) => setCurrentValue(e.target.value)}
                  >
                    {item.name}
                  </option>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </CustomSelect>
  );
};
