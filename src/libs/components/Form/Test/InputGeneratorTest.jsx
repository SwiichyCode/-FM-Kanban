import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import hexaGenerator from "../../../../helpers/hexaGenerator";
import { Label } from "../Label";
import { Container } from "./styles";
import iconClose from "../../../../assets/icon-cross.svg";
import { Input } from "../Input";
import { Button } from "../../Button";

export const InputGeneratorTest = ({
  inputFields = [],
  setInputFields,
  labelText,
}) => {
  const [fields, setFields] = useState(inputFields);

  const handleAddField = useCallback(() => {
    let newfield = {
      id: uuidv4(),
      name: "",
      color: hexaGenerator(),
      tasks: [],
    };
    setFields([...fields, newfield]);
    setInputFields([...inputFields, newfield]);
  }, [fields, inputFields]);

  const handleInputChange = (e, index) => {
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], name: e.target.value };
    setFields(newFields);
    setInputFields(newFields);
  };

  return (
    <Container>
      <Label labelText={labelText} />
      <div className="input-container">
        {fields.map((field, index) => (
          <div key={field.id} className="input-wrapper">
            <Input
              name="name"
              value={field.name}
              onChange={(e) => handleInputChange(e, index)}
              maxW={385}
            />
            <img src={iconClose} alt="" onClick={() => removeFields(index)} />
          </div>
        ))}
      </div>
      <Button
        onClick={handleAddField}
        text="+Add New Column"
        theme="secondary"
        type="button"
      />
    </Container>
  );
};
