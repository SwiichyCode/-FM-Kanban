import React from "react";
import styled from "styled-components";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useToggle } from "../../hooks/useToggle";
import { NewBoard } from "../Modal/NewBoard";

export const SidebarModal = () => {
  const [isOpen, setIsOpen] = useToggle();

  return (
    <>
      {/* Maybe refactor this compenent need button for better access */}
      <SidebarModalContainer className="nav-item" onClick={setIsOpen}>
        <MdOutlineSpaceDashboard size={"1.5em"} className="btn-icon" />
        <span className="nav-newBoard">+ create new board</span>
      </SidebarModalContainer>

      <NewBoard isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const SidebarModalContainer = styled.li``;
