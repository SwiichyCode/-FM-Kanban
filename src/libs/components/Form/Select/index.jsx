import React, { useState } from "react";
import PropTypes from "prop-types";
import { useToggle } from "../../../../hooks/useToggle";
import chevronDown from "../../../../assets/icon-chevron-down.svg";
import { CustomSelect, Wrapper, Error } from "./style";
import { Label } from "../Label";

export const Select = ({
  label,
  columns,
  currentItem,
  setStatus,
  onChange,
  error,
  register,
}) => {
  const [open, isOpen] = useToggle(false);
  const [currentValue, setCurrentValue] = useState("");

  const handleClick = (id, name) => {
    setCurrentValue(name);
    setStatus(id);

    // onChange();
    isOpen(false);
  };

  return (
    <Wrapper>
      <CustomSelect open={open}>
        <Label labelText={label} />

        <div className="current-select" onClick={() => isOpen((prev) => !prev)}>
          <span>{currentItem || currentValue || "Choose a status"}</span>
          <img src={chevronDown} alt="" />
        </div>

        {open && (
          // Change this div by select
          <div className="current-items" {...register}>
            <ul>
              {columns.map((item, index) => {
                return (
                  <option
                    value={item.name}
                    key={index}
                    onClick={() => handleClick(item.id, item.name)}
                  >
                    {item.name}
                  </option>
                );
              })}
            </ul>
          </div>
        )}
      </CustomSelect>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  currentItem: PropTypes.string,
};
