import React, { useState } from "react";
import { LayoutModal } from "../../components/layouts/LayoutModal";
import { Input } from "../../components/Form/Input/index";
import { useSetRecoilState } from "recoil";
import { boardState } from "../../data/store";

export const NewBoard = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const setBoardData = useSetRecoilState(boardState);

  const handleSubmit = (e) => {
    e.preventDefault();

    setBoardData((oldBoardData) => [
      ...oldBoardData,
      {
        name: name,
      },
    ]);

    setName("");
    setIsOpen(false);
  };

  return (
    <LayoutModal isOpen={isOpen} onRequestClose={setIsOpen} title="new board">
      <form onSubmit={handleSubmit}>
        <Input
          labelText="name"
          placeholder="e.g Web Design"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="subit">submit</button>
      </form>
    </LayoutModal>
  );
};
