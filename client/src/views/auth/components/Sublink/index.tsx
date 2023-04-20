import { Link } from "react-router-dom";
import { SublinkWrapper } from "./styles";
import { SublinkProps } from "./types";

export const Sublink = ({ text, url, urlText }: SublinkProps) => {
  return (
    <SublinkWrapper>
      <p>{text}</p>
      <Link to={url}>{urlText}</Link>
    </SublinkWrapper>
  );
};
