import { IButtonProps } from "../../props/Button/IButtonProps";

export function Button(props: IButtonProps) {
  const styles = {
    primary: "border border-white rounded text-white",
    secondary: "",
  };

  function GetButtonStyles() {
    const style = `${
      props.className
    } flex items-center justify-center px-4 py-2 ${styles[props.buttonType]}`;
    return style;
  }

  return (
    <button className={GetButtonStyles()} id={props.id} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
