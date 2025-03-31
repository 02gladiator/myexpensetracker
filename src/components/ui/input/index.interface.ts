import React from "react";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    variant?: "standard" | "outlined" | "filled";
    fullWidth?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}