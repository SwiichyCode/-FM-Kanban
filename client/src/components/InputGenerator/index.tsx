import { v4 as uuidv4 } from "uuid";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import { InputGeneratorProps } from "./types";
import { InputGeneratorWrapper } from "./styles";
import hexaGenerator from "../../helpers/hexaGenerator";

export const InputGenerator = ({
  labelText,
  inputFields,
  setInputFields,
  register,
}: InputGeneratorProps) => {
  const handleFormChange = (index: number, event: any) => {
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

  const removeFields = (index: number) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <InputGeneratorWrapper>
      <Label labelText={labelText} />

      <div className="input-container">
        {inputFields.map((input: any, index: number) => {
          return (
            <div key={index} className="input-wrapper">
              <Input
                name="name"
                defaultValue={input.name}
                placeholder={input.placeholder}
                onChange={(event) => handleFormChange(index, event)}
                maxW={385}
                {...register}
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
          );
        })}
        <Button
          onClick={addFields}
          text="+Add New Column"
          theme="secondary"
          type="button"
        />
      </div>
    </InputGeneratorWrapper>
  );
};
