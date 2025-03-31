import React from 'react';
import "./index.css";
import { IMySelect } from "./index.interface";

export const MySelect: React.FC<IMySelect> = ({
                                                  options,
                                                  defaultValue,
                                                  value,
                                                  onChange,
                                                  variant = "outlined",
                                                  size = "medium",
                                                  fullWidth = false,
                                                  disabled = false,
                                                  className = "",
                                                  label = "",
                                                  error = false,
                                                  errorMessage = "",
                                              }) => {
    const selectClass = `mySelect ${variant} ${size} ${fullWidth ? 'fullWidth' : ''} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${className}`.trim();

    return (
        <div className="select-container">
            {label && <label className="select-label">{label}</label>}
            <select
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className={selectClass}
                disabled={disabled}
            >
                <option disabled value="">
                    {defaultValue}
                </option>
                {options.map((option) => (
                    <option value={option.value} key={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
            {error && errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};