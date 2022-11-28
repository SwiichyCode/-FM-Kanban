import React from "react";
import styled from "styled-components";
import { useToggle } from "../../../../hooks/useToggle";
import { NewBoard } from "./NewBoard";
import { IconBoard } from "../IconBoard";

export const SidebarModal = () => {
  const [isOpen, setIsOpen] = useToggle();

  return (
    <>
      {/* Maybe refactor this compenent need button for better access */}
      <SidebarModalContainer className="nav-item" onClick={setIsOpen}>
        <IconBoard />
        <span className="nav-newBoard">+ create new board</span>
      </SidebarModalContainer>

      <NewBoard isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const SidebarModalContainer = styled.li`
  img {
    padding-right: 16px;
  }
`;
