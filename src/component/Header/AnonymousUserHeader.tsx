import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import Logo from "../UI/Logo.tsx";
import { useIsMobile } from "../../hooks/useIsMobile.ts";

export default function AnonymousUserHeader() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setIsOpen(false);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      closeMenu();
    }
  };

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
              <div className="absolute top-14 left-0 w-full bg-gray-900 border-b border-gray-800 shadow-xl flex flex-col p-6 space-y-4 items-center">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className="text-gray-300 text-lg hover:text-white transition-colors w-full text-center py-2"
                >
                  Strona główna
                </NavLink>
                <div
                  onClick={() => scrollToSection("features")}
                  className="text-gray-300 text-lg hover:text-white transition-colors cursor-pointer w-full text-center py-2"
                >
                  Funkcje
                </div>
                <div
                  onClick={() => scrollToSection("demo")}
                  className="text-gray-300 text-lg hover:text-white transition-colors cursor-pointer w-full text-center py-2"
                >
                  Demo
                </div>
                <div
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 text-lg hover:text-white transition-colors cursor-pointer w-full text-center py-2"
                >
                  Kontakt
                </div>
                <NavLink
                  to="/register"
                  onClick={closeMenu}
                  className="text-gray-300 text-lg hover:text-white transition-colors w-full text-center py-2"
                >
                  Zarejestruj
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={closeMenu}
                  className="text-gray-300 text-lg hover:text-white transition-colors w-full text-center py-2"
                >
                  Zaloguj
                </NavLink>
              </div>
            )}
          </>
        ) : (
          <ul className="flex space-x-2 text-gray-300 text-lg ml-auto items-center">
            <li>
              <NavLink to="/" className="hover:text-white px-4 py-2 block">
                Strona główna
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-white focus:outline-none px-4 py-2 block"
              >
                Funkcje
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("demo")}
                className="hover:text-white focus:outline-none px-4 py-2 block"
              >
                Demo
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-white focus:outline-none px-4 py-2 block"
              >
                Kontakt
              </button>
            </li>
            <li>
              <NavLink
                to="/register"
                className="hover:text-white px-4 py-2 block"
              >
                Zarejestruj
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="hover:text-white px-4 py-2 block">
                Zaloguj
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
