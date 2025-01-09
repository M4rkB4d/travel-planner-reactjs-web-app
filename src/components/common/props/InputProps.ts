type InputFieldVariant = 'default' | 'outline' | 'filled' | 'error';

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