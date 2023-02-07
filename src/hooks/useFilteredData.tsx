import { useParams } from "react-router-dom";
import { urlSplit } from "../helpers/urlSplit";

export const useFilteredData = (initialData: any) => {
  let { name } = useParams();

  const filteredData = initialData.filter(
    (item: any) => urlSplit(item.name) === name
  );

  return filteredData;
};
