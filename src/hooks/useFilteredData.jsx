import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { urlSplit } from "../helpers/urlSplit";
import { boardState } from "../store/store";

export const useFilteredData = () => {
  let { name } = useParams();
  const data = useRecoilValue(boardState);

  const filteredData = data.filter((item) => urlSplit(item.name) === name);

  return filteredData;
};
