import clsx from "clsx";
import { ButtonProps, buttonBaseStyle, buttonVariantStyles } from "./props/ButtonProps";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  onClick,
  disabled = false,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        buttonBaseStyle,
        buttonVariantStyles[disabled ? "disabled" : variant],
        className
      )}
    >
      {children}
    </button>
  );
};
