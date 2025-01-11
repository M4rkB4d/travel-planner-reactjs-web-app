import clsx from "clsx";
import {
  ButtonProps,
  buttonBaseStyle,
  buttonVariantStyles,
  buttonSizeStyles,
} from "./props/ButtonProps";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  onClick,
  disabled = false,
  loading = false,
  spinner = (
    <div className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></div>
  ),
  iconLeft,
  iconRight,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      className={clsx(
        buttonBaseStyle,
        buttonVariantStyles[disabled || loading ? "disabled" : variant],
        buttonSizeStyles[size],
        fullWidth && "w-full",
        "transition-all duration-150 ease-in-out", // Added transition
        className
      )}
    >
      {loading ? (
        <span className="flex items-center justify-center">{spinner}</span>
      ) : (
        <span className="flex items-center gap-2">
          {iconLeft && <span>{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span>{iconRight}</span>}
        </span>
      )}
    </button>
  );
};
