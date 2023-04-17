export interface ButtonProps {
  theme: "primary" | "secondary" | "destructive";
  text: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  maxW?: number;
  size?: "xl" | "lg" | "md" | "sm" | any;
  width?: number;
}
