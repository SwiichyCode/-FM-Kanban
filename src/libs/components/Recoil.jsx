import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { dataState, textState } from "../data/store";
import { charCountState } from "../data/store";

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export const Recoil = () => {
  const [text, setText] = useRecoilState(textState);
  const [data, setData] = useRecoilState(dataState);

  console.log(data);
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};
