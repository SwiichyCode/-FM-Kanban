import { useState } from "react";

export const useSubtasks = () => {
  const [columns, setColumns] = useState([
    { task: [{ name: "" }], placeholder: "e.g. Make coffee" },
    { task: [{ name: "" }], placeholder: "e.g. Drink coffee & smile" },
  ]);

  const handleChange = (i, e) => {
    let newFormValues = [...columns];
    newFormValues[i][e.target.name] = e.target.value;
    setColumns(newFormValues);
  };

  let addFormFields = () => {
    setColumns([
      ...columns,

      {
        task: [],
        placeholder: "e.g. Make coffee",
      },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...columns];
    newFormValues.splice(i, 1);
    setColumns(newFormValues);
  };

  return { columns, handleChange, addFormFields, removeFormFields };
};
