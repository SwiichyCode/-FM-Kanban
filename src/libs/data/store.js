import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import data from "./data.json";

// Store all data
export const boardState = atom({
  key: "boardState",
  default: data,
});
