import { FieldValues } from "react-hook-form";
import { IInputProps } from "../../props/Input/IInputProps";

export default function Input<T extends FieldValues>(props: IInputProps<T>) {
  return (
    <div className="flex flex-col items-start w-full">
      {props.inputLabel && (
        <label className="mb-1" htmlFor={props.name as string}>
          {props.inputLabel}
        </label>
      )}
      <div className="relative w-full">
        <input
          className={`focus:outline-hidden w-full ${
            props.icon || props.img ? "ps-12" : "ps-6"
          } py-3 bg-white text-primary border-1 ${
            props.className
          } !cursor-text`}
          type={props.type}
          id={props.id}
          value={props.value}
          disabled={props.disabled}
          minLength={props.min}
          maxLength={props.max}
          placeholder={props.placeHolder}
          {...(props.register
            ? props.register(props.name, props.validations)
            : { onChange: props.onChange, name: props.name })}
        ></input>
        {props.icon && (
          <span className="absolute top-0 left-0">{props.icon}</span>
        )}
        {props.img && (
          <img
            src={props.img}
            alt={"icon-image"}
            className="absolute top-4 left-4"
          />
        )}
      </div>
      {props.formState?.errors[props.name]?.message && (
        <p className="mt-1 text-red-500">
          {props.formState.errors[props.name]?.message as string}
        </p>
      )}
    </div>
  );
}
