import React from "react";
import { LayoutModal } from "../../components/layouts/LayoutModal";

export const NewBoard = ({ isOpen, setIsOpen }) => {
  return (
    <LayoutModal isOpen={isOpen} onRequestClose={setIsOpen} title="new board">
      <p>test</p>
    </LayoutModal>
  );
};
