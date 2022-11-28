import React from "react";
import styled from "styled-components";
import { LayoutModal } from "../../../components/Wrapper/LayoutModal";
import { Checkbox } from "../../../components/Form/Checkbox/index";

export const TaskModal = ({ open, setOpen, item, completedSubtasks }) => {
  return (
    <LayoutModal isOpen={open} onRequestClose={setOpen} title={item.title}>
      <p className="modal-paragraph">
        {item.description ? item.description : "No description"}
      </p>
      <Subtasks className="modal-subtasks">
        <Label>
          Subtasks ({completedSubtasks.length} of {item.subtasks.length})
        </Label>
        <div className="subtasks-wrapper">
          {item.subtasks.map((item, index) => {
            return (
              <Checkbox
                label={item.title}
                completed={item.isCompleted}
                key={index}
              />
            );
          })}
        </div>
      </Subtasks>
    </LayoutModal>
  );
};

const Subtasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .subtasks-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #828fa3;
`;
