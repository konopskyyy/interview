import {Dispatch, SetStateAction, useId} from "react";

interface InputProps {
    fieldName: string;
    type?: string;
    disabled?: boolean;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
}

export default function Input({
                                  fieldName,
                                  type = "text",
                                  disabled = false,
                                  name,
                                  setName,
                              }: InputProps) {
    const id = useId();

    return (
        <>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                {fieldName}
            </label>
            <input
                id={id}
                type={type}
                disabled={disabled}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </>
    );
}
