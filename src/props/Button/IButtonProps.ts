import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
  id: string;
  className?: string;
  buttonType: ButtonType;
}

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
}
