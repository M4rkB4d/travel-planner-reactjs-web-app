import clsx from 'clsx'
import { TextInputFieldProps } from "./props/InputProps";

export const InputTextField: React.FC<TextInputFieldProps> = ({
    type,
    placeholder,
    value,
    onChange,
    required = false,
    variant = 'default',
    label,
    errorMessage,
    className,
}) => {
    // Define variant styles
    const baseStyle = 'w-full px-3 py-2 rounded-md text-sm focus:outline-none';
    const variantStyles = {
    default: 'border border-gray-300 focus:ring-2 focus:ring-blue-400',
    outline: 'border-2 border-blue-500 focus:ring-2 focus:ring-blue-700',
    filled: 'bg-gray-100 border-none focus:bg-white focus:ring-2 focus:ring-blue-400',
    error: 'border border-red-500 focus:ring-2 focus:ring-red-500',
    };

    return (
        <div className={`mb-4 ${className}`}>
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={clsx(baseStyle, variantStyles[variant])}
      />
      {errorMessage && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
    );
};