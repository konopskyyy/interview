import { useId } from "react";

export default function Input(props: any) {
  const id = useId();
  const { fieldName, type, disabled, name, setName } = props;

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {fieldName}
      </label>
      <input
        id={id}
        type={type ?? "input"}
        disabled={disabled ?? false}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </>
  );
}
