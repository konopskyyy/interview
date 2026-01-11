import type { ButtonHTMLAttributes } from "react";

interface DangerousButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export default function DangerousButton({
    text,
    className = "",
    disabled,
    ...props
}: DangerousButtonProps) {
    return (
        <button
            disabled={disabled}
            className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 transition duration-150 ease-in-out ${className}`}
            {...props}
        >
            {text}
        </button>
    );
}
