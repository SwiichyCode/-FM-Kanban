import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Popover } from "react-tiny-popover";
import { useToggle } from "../../../hooks/useToggle";
import IconManage from "../../../assets/icon-vertical-ellipsis.svg";

export const CustomPopover = ({ children, state }) => {
  const [isOpenPopover, setIsOpenPopover] = useToggle();

  const onClickOutside = () => {
    // Check if [state] have modal open
    if (state) {
      const a = state.map((item) => item);

      for (let i = 0; i < a.length; i++) {
        if (a[i]) return;
      }
    }
    setIsOpenPopover(false);
  };

  return (
    <Popover
      isOpen={isOpenPopover}
      positions={["bottom"]} // preferred positions by priority
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

CustomPopover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  state: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.bool),
    PropTypes.bool,
  ]),
};
