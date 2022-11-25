import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
// import { StyledInput } from "../Form/Input";
// import { StyledButton } from "../Button/Button";
// import InputLabel from "@mui/material/InputLabel";
import { Input } from "../Input/index";
import { Label } from "../Label";
export const SubtasksGenerator = ({
  labelText,
  columns,
  subtasks,
  handleChange,
  addFormFields,
  removeFormFields,
}) => {
  return (
    <SubtasksGeneratorContainer>
      <Label labelText="Columns" />
      <div className="subtasks-container">
        {subtasks ||
          columns.map((item, index) => (
            <div className="input-container" key={index}>
              <Input
                value={item.name || ""}
                onChange={(e) => handleChange(index, e)}
                placeholder={item.placeholder}
                maxW={385}
              />
              <MdClose
                color="#828FA3"
                size={"1.5em"}
                onClick={() => removeFormFields(index)}
              />
            </div>
          ))}
        <button type="button" onClick={addFormFields}>
          Add new Column
        </button>
      </div>
    </SubtasksGeneratorContainer>
  );
};

const SubtasksGeneratorContainer = styled.div`
  width: 100%;
  max-width: 416px;
  display: flex;
  flex-direction: column;

  .subtasks-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #828fa3;
  text-transform: capitalize;
  padding-bottom: 8px;
`;
