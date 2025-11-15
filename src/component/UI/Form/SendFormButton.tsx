interface SendFormButtonProps {
    text: string;
    disabled?: boolean;
}

export default function SendFormButton({text, disabled = false}: SendFormButtonProps) {

  return (
    <button
      type="submit"
      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
    >
      {text}
    </button>
  );
}
