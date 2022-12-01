import React from "react";
import styled from "styled-components";
import { Popover } from "react-tiny-popover";
import IconManage from "../../../assets/icon-vertical-ellipsis.svg";
import { useToggle } from "../../../hooks/useToggle";

export const CustomPopover = ({ children, state }) => {
  const [isOpenPopover, setIsOpenPopover] = useToggle();

  const onClickOutside = () => {
    // Check if [state] have modal open
    const a = state.map((item) => item);

    for (let i = 0; i < a.length; i++) {
      if (a[i]) return;
    }

    setIsOpenPopover(false);
  };

  return (
    <Popover
      isOpen={isOpenPopover}
      positions={["bottom", "right"]} // preferred positions by priority
      content={children}
      onClickOutside={() => onClickOutside()}
    >
      <Img
        onClick={() => setIsOpenPopover(!isOpenPopover)}
        src={IconManage}
        alt=""
      />
    </Popover>
  );
};

const Img = styled.img`
  cursor: pointer;
`;
