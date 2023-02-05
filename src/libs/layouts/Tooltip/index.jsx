import React from "react";
import styled from "styled-components";
import { BiGridHorizontal } from "react-icons/bi";
import useTooltipStore from "../../../store/tooltipStore";

export const Tooltip = () => {
  const tooltip = useTooltipStore((state) => state.tooltip);
  const setTooltip = useTooltipStore((state) => state.setTooltip);

  const handleClick = () => {
    const newTooltip = {
      reorder: !tooltip.reorder,
    };

    setTooltip(newTooltip);
  };

  console.log(tooltip);
  return (
    <Container>
      <BiGridHorizontal onClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  font-size: 4.6rem;
  color: var(--color-grey);
  padding-left: 3.2rem;
  /* border: 1px solid #e4ebfa; */

  svg {
    cursor: pointer;
  }
`;
