import React from 'react';
import "./index.css";
import { IButtonProps } from "./index.interface";

export const MyButton: React.FC<IButtonProps> = ({
                                                     children,
                                                     variant = "contained",
                                                     color = "primary",
                                                     size = "medium",
                                                     className = "",
                                                     ...props
                                                 }) => {
    const buttonClass = `myBtn ${variant} ${color} ${size} ${className}`.trim();

    return (
        <button {...props} className={buttonClass}>
            {children}
        </button>
    );
};