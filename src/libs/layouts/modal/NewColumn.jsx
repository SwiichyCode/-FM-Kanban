import React from "react";
import styled from "styled-components";
import { EditBoard } from "./EditBoard";
import { useToggle } from "../../../hooks/useToggle";

export const NewColumn = () => {
  const [open, setOpen] = useToggle(false);

  return (
    <>
      <Container onClick={setOpen}>+ New Column</Container>
      <EditBoard openEdit={open} setOpenEdit={setOpen} trigger={false} />
    </>
  );
};

const Container = styled.div`
  /* width: 100%; */
  min-width: 28rem;
  max-width: 28rem;
  height: calc(100vh - var(--header-h) - 100px);

  /* height: 814px; */
  ${({ theme }) => theme.mixins.flexCenter}
  border-radius: var(--borderR-md);
  font-weight: var(--font-bold);
  font-size: var(--fz-xxl);
  color: var(--color-grey);
  margin-top: 4.4rem;
  background: ${({ theme }) => theme.theme.newColumn};
  cursor: pointer;

  &:hover {
    color: var(--main-purple);
    transition: all 0.2s ease-in-out;
  }
`;
