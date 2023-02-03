import React from "react";
import { Button } from "../../Button";
import { Input } from "../Input";
import { Container } from "./style";
import { Label } from "../Label";
import { v4 as uuidv4 } from "uuid";
import hexaGenerator from "../../../../helpers/hexaGenerator";
import iconClose from "../../../../assets/icon-cross.svg";

export const InputGenerator = ({ labelText, inputFields, setInputFields }) => {
  const handleFormChange = (index, event) => {
    let data = [...inputFields];

    if (event.target.name === "name") {
      data[index] = { ...data[index], name: event.target.value };
    }
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = {
      id: uuidv4(),
      name: "",
      color: hexaGenerator(),
      tasks: [],
    };

    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <Container>
      <Label labelText={labelText} />

      <div className="input-container">
        {inputFields.map((input, index) => {
          return (
            <div key={index} className="input-wrapper">
              <Input
                name="name"
                defaultValue={input.name}
                placeholder={input.placeholder}
                onChange={(event) => handleFormChange(index, event)}
                maxW={385}
              />
              <img src={iconClose} alt="" onClick={() => removeFields(index)} />
            </div>
          );
        })}
        <Button
          onClick={addFields}
          text="+Add New Column"
          theme="secondary"
          type="button"
        />
      </div>
    </Container>
  );
};
