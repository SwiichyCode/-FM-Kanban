import React from "react";
import styled from "styled-components";
import { Input } from "../Input/index";
import { Label } from "../Label";
import { Button } from "../../Button";
import iconCross from "../../../../assets/icon-cross.svg";
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
              <IconClose
                src={iconCross}
                onClick={() => removeFormFields(index)}
                alt=""
              />
            </div>
          ))}
        <Button
          type="button"
          text="Add new Column"
          theme="primary"
          onClick={addFormFields}
        />
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

const IconClose = styled.img``;
