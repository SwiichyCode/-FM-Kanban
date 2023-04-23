import React from "react";
import styled from "styled-components";
import { Popover } from "react-tiny-popover";
import { useToggle } from "../../../../hooks/useToggle";
import IconManage from "../../../../assets/icon-vertical-ellipsis.svg";

interface CustomPopoverProps {
  children: React.ReactElement;
  state: boolean[];
}

export const CustomPopover = ({ children, state }: CustomPopoverProps) => {
  const { state: isOpenPopover, toggle: setIsOpenPopover } = useToggle();

  const onClickOutside = () => {
    // Check if [state] have modal open
    if (state) {
      const a = state.map((item) => item);

      for (let i = 0; i < a.length; i++) {
        if (a[i]) return;
      }
    }
    setIsOpenPopover();
  };

  return (
    <Popover
      isOpen={isOpenPopover}
      positions={["bottom"]} // preferred positions by priority
      content={children}
      onClickOutside={() => onClickOutside()}
    >
      <Img onClick={() => setIsOpenPopover()} src={IconManage} alt="" />
    </Popover>
  );
};

const Img = styled.img`
  cursor: pointer;
`;
