import React, { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import hexaGenerator from "../../../../helpers/hexaGenerator";
import { Label } from "../Label";
import { Container } from "./styles";
import { Input } from "../Input";
import { Button } from "../../Button";

interface InputGeneratorTestProps {
  inputFields?: any[];
  setInputFields: (inputFields: any[]) => void;
  labelText: string;
}

export const InputGenerator = ({
  inputFields = [],
  setInputFields,
  labelText,
}: InputGeneratorTestProps) => {
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

  const removeFields = (index: any) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
    setInputFields(newFields);
  };

  const handleInputChange = (e: any, index: any) => {
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
            />
            <svg
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => removeFields(index)}
            >
              <g className="icon-close" fill="#828FA3" fill-rule="evenodd">
                <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
                <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
              </g>
            </svg>
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
