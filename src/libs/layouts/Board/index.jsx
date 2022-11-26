import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { boardState } from "../../data/store";
import { urlSplit } from "../../utils/urlSplit";
import { ToggleSwitch } from "../../components/ToggleSwitch";

export const Board = () => {
  let { name } = useParams();
  const boardData = useRecoilValue(boardState);
  const [value, setValue] = useState(false);

  return (
    <BoardContainer>
      {boardData
        .filter((item) => urlSplit(item.name) === name)
        .map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      <ToggleSwitch isOn={value} handleToggle={() => setValue(!value)} />
    </BoardContainer>
  );
};

const BoardContainer = styled.div``;
