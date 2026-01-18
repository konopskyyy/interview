import { useState } from "react";
import type { ReactNode } from "react";

type BaseModalProps = {
  title: string;
  children: ReactNode;
};

export default function BaseModal({ children, title }: BaseModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {title}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-30 backdrop-blur-lg"
          onClick={closeModal} // kliknięcie poza modal zamyka
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[75vh] overflow-y-auto text-gray-900"
            onClick={(e) => e.stopPropagation()} // zapobiega zamknięciu po kliknięciu w treść
          >
            {children}
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
