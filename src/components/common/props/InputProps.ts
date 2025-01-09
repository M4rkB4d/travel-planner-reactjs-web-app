export type InputFieldVariant =
  | 'default'
  | 'outline'
  | 'filled'
  | 'error'
  | 'underlined'
  | 'disabled'
  | 'rounded';

export const baseStyle =
  "w-full px-3 py-2 rounded-md text-sm focus:outline-none";

export const variantStyles: Record<InputFieldVariant, string> = {
  default: "border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400",
  outline: "border-2 border-blue-500 rounded-md focus:ring-2 focus:ring-blue-700",
  filled: "bg-gray-100 rounded-md focus:bg-white focus:ring-2 focus:ring-blue-400",
  error: "border border-red-500 rounded-md focus:ring-2 focus:ring-red-500",
  underlined: "border-b border-gray-400 focus:border-blue-500 rounded-none",
  disabled: "bg-gray-100 text-gray-500 cursor-not-allowed border-gray-300",
  rounded: "border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-400",
};

export interface TextInputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  variant?: InputFieldVariant; // Style variant
  label?: string; // Optional label
  errorMessage?: string; // Display error messages
  className?: string; // Custom classes
};
