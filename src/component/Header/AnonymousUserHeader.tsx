import { NavLink } from "react-router";

export default function AnonymousUserHeader() {
  return (
    <nav className="bg-gray-800 w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-14 px-6">
        <div className="text-white font-bold text-xl">Interviewer</div>
        <ul className="flex space-x-10 text-gray-300 text-lg">
          <li>
            <NavLink to="/" className="hover:text-white">
              Strona główna{" "}
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/" className="hover:text-white">
              Aplikacja
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
      </div>
    </nav>
  );
}
