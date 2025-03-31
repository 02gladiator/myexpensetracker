import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary" | "danger" | "success";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
}