import clsx from "clsx";
import {
  TextInputFieldProps,
  baseStyle,
  variantStyles,
} from "./props/InputProps";

export const InputTextField: React.FC<TextInputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  variant = "default",
  label,
  errorMessage,
  className,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={clsx(baseStyle, variantStyles[variant])}
      />
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};
