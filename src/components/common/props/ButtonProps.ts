export type ButtonVariant =
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "text"
    | "disabled";

export const buttonBaseStyle =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none";

export const buttonVariantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300",
    text: "text-blue-500 hover:underline focus:outline-none",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
};

export interface ButtonProps {
    variant?: ButtonVariant; // Button variant style
    onClick?: (e: React.FormEvent) => void; // Click handler
    disabled?: boolean; // Disable button
    children: React.ReactNode; // Button content
    className?: string; // Additional custom styles
}
