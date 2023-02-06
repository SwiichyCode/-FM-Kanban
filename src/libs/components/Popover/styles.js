import styled from "styled-components";

const handlePosition = (position) => {
  switch (position) {
    case "bottom":
      return "top: calc(100% + 2.8rem); right: 0;";
    case "bottom-center":
      return "top: calc(100% + 1.4rem); left: 50%; transform: translate(-50%, 0);";
  }
};

export const StyledPopoverContent = styled.div`
  position: relative;

  img {
    cursor: pointer;
  }
`;

export const StyledPopover = styled.div`
  display: ${({ openPopover }) => (openPopover ? "flex" : "none")};
  ${({ position }) => handlePosition(position)}
  position: absolute;
  flex-direction: column;
  gap: 1.6rem;
  width: 192px;
  height: 94px;
  background: #ffffff;
  border-radius: 0.8rem;
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  padding: 1.6rem;
`;
