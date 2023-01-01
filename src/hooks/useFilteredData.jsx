import React from "react";
import { useParams } from "react-router-dom";
import { urlSplit } from "../helpers/urlSplit";

export const useFilteredData = (initialData) => {
  let { name } = useParams();

  const filteredData = initialData.filter(
    (item) => urlSplit(item.name) === name
  );

  return filteredData;
};
