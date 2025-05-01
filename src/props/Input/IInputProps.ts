import { ReactNode } from "react";
import {
  FieldValues,
  UseFormRegister,
  RegisterOptions,
  FormState,
  Path,
} from "react-hook-form";

export interface IInputProps<T extends FieldValues> {
  id: string;
  name: Path<T>;
  value?: string | number;
  placeHolder?: string;
  type?: "number" | "email" | "password" | "text";
  className?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  inputLabel?: string;
  register: UseFormRegister<T>;
  validations?: RegisterOptions<T, Path<T>>;
  formState?: FormState<T>;
  icon?: ReactNode;
  img?: string;
}
