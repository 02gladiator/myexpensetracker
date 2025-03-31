export interface IOptions {
    value: string;
    name: string;
}

export interface IMySelect {
    options: IOptions[];
    defaultValue: string;
    value: string;
    onChange: (selectedValue: string) => void;
    variant?: "standard" | "outlined" | "filled";
    size?: "small" | "medium" | "large";
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    label?: string;
    error?: boolean;
    errorMessage?: string;
}