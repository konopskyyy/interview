import { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../UI/Logo.tsx";
import { useIsMobile } from "../../hooks/useIsMobile.ts";

export default function AnonymousUserHeader() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="bg-gray-900 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-14 px-6">
        <Logo />

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {isOpen && (
              <div className="absolute top-14 left-0 w-full bg-gray-900 border-b border-gray-800 shadow-xl flex flex-col p-6 space-y-4">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className="text-gray-300 text-lg hover:text-white transition-colors"
                >
                  Strona główna
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={closeMenu}
                  className="text-gray-300 text-lg hover:text-white transition-colors"
                >
                  Zarejestruj
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className="text-gray-300 text-lg hover:text-white transition-colors"
                >
                  Zaloguj
                </NavLink>
              </div>
            )}
          </>
        ) : (
          <ul className="flex space-x-10 text-gray-300 text-lg">
            <li>
              <NavLink to="/" className="hover:text-white">
                Strona główna
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="hover:text-white">
                Zarejestruj
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="hover:text-white">
                Zaloguj
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
