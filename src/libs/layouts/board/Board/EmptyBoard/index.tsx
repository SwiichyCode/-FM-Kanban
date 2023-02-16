import React from "react";
import { Button } from "../../../../components/Button";
import * as S from "./styles";

export const EmptyBoard = () => {
  return (
    <S.Container>
      <p>This board is empty. Create a new column to get started.</p>
      <Button text="+ Add New Column" theme="primary" maxW={174} size="xl" />
    </S.Container>
  );
};
