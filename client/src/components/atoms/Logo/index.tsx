import logoDark from "../../../assets/logo-dark.svg";
import logoLight from "../../../assets/logo-light.svg";
import { LogoProps } from "./types";

export const Logo = ({ theme = "light" }: LogoProps) => {
  return <img src={theme ? logoDark : logoLight} />;
};
