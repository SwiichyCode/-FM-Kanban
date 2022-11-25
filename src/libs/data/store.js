import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { recoilPersist } from "recoil-persist";
import data from "./data.json";

const { persistAtom } = recoilPersist();

// Store all data
export const boardState = atom({
  key: "boardState",
  default: data,
  effects_UNSTABLE: [persistAtom],
});
