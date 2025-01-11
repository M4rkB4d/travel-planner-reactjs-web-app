import clsx from "clsx";
import {
  TextInputFieldProps,
  baseStyle,
  variantStyles,
  sizeStyles,
} from "./props/InputProps";

export const InputTextField: React.FC<TextInputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  variant = "default",
  size = "medium", // Default to medium size
  label,
  errorMessage,
  successMessage,
  warningMessage,
  className,
  iconLeft,
  iconRight,
  loading = false,
  showCharacterCount = false,
  maxLength,
}) => {
  const isError = !!errorMessage;
  const isSuccess = !!successMessage;
  const isWarning = !!warningMessage;

  return (
    <div className={clsx("relative", className)}>
      {label && (
        <label
          className="block mb-1 text-sm font-medium"
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {iconLeft && (
          <span className="absolute left-3 text-gray-500">
            {iconLeft}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          maxLength={maxLength}
          aria-invalid={isError}
          aria-describedby={isError ? "error-message" : undefined}
          className={clsx(
            baseStyle,
            sizeStyles[size], // Add size-specific styles
            variantStyles[variant],
            iconLeft && "pl-10", // Add space if iconLeft exists
            iconRight && "pr-10", // Add space if iconRight exists
            loading && "pr-12" // Add space if loading spinner exists
          )}
        />
        {loading && (
          <span className="absolute right-3">
            <div className="animate-spin border-2 border-blue-500 border-t-transparent rounded-full w-4 h-4"></div>
          </span>
        )}
        {iconRight && !loading && (
          <span className="absolute right-3 text-gray-500">
            {iconRight}
          </span>
        )}
      </div>
      {showCharacterCount && maxLength && (
        <p className="mt-1 text-xs text-gray-500">
          {value.length}/{maxLength}
        </p>
      )}
      {isError && (
        <p id="error-message" className="mt-1 text-sm text-red-500">
          {errorMessage}
        </p>
      )}
      {isWarning && (
        <p className="mt-1 text-sm text-yellow-500">{warningMessage}</p>
      )}
      {isSuccess && (
        <p className="mt-1 text-sm text-green-500">{successMessage}</p>
      )}
    </div>
  );
};
