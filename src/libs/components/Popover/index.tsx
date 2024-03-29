import React, { useEffect } from "react";
import PropTypes from "prop-types";
import IconManage from "../../../assets/icon-vertical-ellipsis.svg";
import * as S from "./styles";

interface CustomPopoverProps {
  openPopover: boolean;
  setOpenPopover: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  position?: "bottom" | "bottom-center";
  parentState?: boolean;
}

export const CustomPopover = ({
  openPopover,
  setOpenPopover,
  children,
  position = "bottom",
  parentState,
}: CustomPopoverProps) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (parentState) return;

      if (!event.target.closest("#popover") && openPopover) {
        setOpenPopover(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openPopover, setOpenPopover, parentState]);

  return (
    <S.StyledPopoverContent id="popover">
      <S.StyledPopover openPopover={openPopover} position={position}>
        {children}
      </S.StyledPopover>
      <img
        onClick={() => setOpenPopover(!openPopover)}
        src={IconManage}
        alt=""
        id="popover"
      />
    </S.StyledPopoverContent>
  );
};

CustomPopover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  position: PropTypes.string,
};
