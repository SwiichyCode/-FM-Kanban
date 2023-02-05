import React from "react";
import { EditBoard } from "../EditBoard";
import { useToggle } from "../../../../hooks/useToggle";
import * as S from "./styles";

export const NewColumn = () => {
  const [open, setOpen] = useToggle(false);

  return (
    <>
      <S.Container onClick={setOpen}>+ New Column</S.Container>
      <EditBoard openEdit={open} setOpenEdit={setOpen} trigger={false} />
    </>
  );
};
