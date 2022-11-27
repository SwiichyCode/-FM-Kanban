import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { boardState } from "../../../../store/store";
import { urlSplit } from "../../../../helpers/urlSplit";

export const Board = () => {
  let { name } = useParams();
  const boardData = useRecoilValue(boardState);

  return (
    <BoardContainer>
      {boardData
        .filter((item) => item.name && item.name.split(" ").join("_") === name)
        .map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
    </BoardContainer>
  );
};

const BoardContainer = styled.div``;
