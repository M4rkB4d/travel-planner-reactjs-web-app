import { ReactNode } from "react";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "danger"
    | "outline"
    | "text"
    | "disabled"
    | "success"
    | "warning"
    | "link";

export const buttonBaseStyle =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none";

export const buttonVariantStyles: Record<ButtonVariant, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300",
    text: "text-blue-500 hover:underline focus:outline-none",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-400",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400",
    link: "text-blue-500 hover:underline focus:outline-none",
};

export type ButtonSize = "small" | "medium" | "large";

export const buttonSizeStyles: Record<ButtonSize, string> = {
    small: "px-2 py-1 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-lg",
};

export interface ButtonProps {
    variant?: ButtonVariant; // Button variant style
    size?: ButtonSize; // Button size
    fullWidth?: boolean; // Button spans full width
    onClick?: (e: React.FormEvent) => void; // Click handler
    disabled?: boolean; // Disable button
    loading?: boolean; // Show loading spinner
    spinner?: ReactNode; // Custom spinner
    iconLeft?: ReactNode; // Icon on the left of the text
    iconRight?: ReactNode; // Icon on the right of the text
    children: React.ReactNode; // Button content
    className?: string; // Additional custom styles
}