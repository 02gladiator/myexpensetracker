import React from 'react';
import "./index.css";
import { IInputProps } from "./index.interface";

export const MyInput: React.FC<IInputProps> = ({
                                                   variant = "outlined",
                                                   size = "medium",
                                                   fullWidth = true,
                                                   className = "",
                                                   ...props
                                               }) => {
    const inputClass = `myInput ${variant} ${size} ${fullWidth ? 'fullWidth' : ''} ${className}`.trim();

    return (
        <input {...props} className={inputClass} />
    );
};