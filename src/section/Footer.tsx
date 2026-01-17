import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-800 w-full fixed bottom-0 left-0 z-50 border-t border-white">
      <div className="container mx-auto flex justify-between items-center h-14 px-6 text-gray-300 text-sm">
        <div>© 2025 Interviewer. Wszelkie prawa zastrzeżone.</div>
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="hover:text-white">
              Polityka prywatności
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" className="hover:text-white">
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink to="/pomoc" className="hover:text-white">
              Pomoc
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
