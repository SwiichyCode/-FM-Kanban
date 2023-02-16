import React from "react";
import * as S from "./styles";

interface ColumnTitleProps {
  title: string;
  item: any;
}

export const ColumnTitle = ({ title, item }: ColumnTitleProps) => {
  return (
    <S.Container>
      <h2>
        {title} ({item.tasks ? item.tasks.length : "0"})
      </h2>
    </S.Container>
  );
};
