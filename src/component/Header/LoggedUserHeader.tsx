import { useState } from "react";
import { NavLink } from "react-router";
import Logo from "../UI/Logo.tsx";
import { useIsMobile } from "../../hooks/useIsMobile.ts";

interface LoggedUserHeaderProps {
  username: string;
  logout: () => void;
}

export default function LoggedUserHeader({
  username,
  logout,
}: LoggedUserHeaderProps) {
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
                  to="/interview-list"
                  onClick={closeMenu}
                  className="text-gray-300 text-lg hover:text-white transition-colors"
                >
                  Aplikacja
                </NavLink>
                <NavLink
                  to="/account"
                  onClick={closeMenu}
                  className="text-gray-300 text-lg hover:text-white transition-colors"
                >
                  {username}
                </NavLink>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="text-left text-gray-300 text-lg hover:text-white transition-colors cursor-pointer"
                >
                  Wyloguj
                </button>
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
              <NavLink to="/interview-list" className="hover:text-white">
                Aplikacja
              </NavLink>
            </li>
            <li>
              <NavLink to="/account" className="hover:text-white">
                {username}
              </NavLink>
            </li>
            <li onClick={logout} className="hover:text-white cursor-pointer">
              Wyloguj
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
