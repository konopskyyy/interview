import { NavLink } from "react-router";

interface LoggedUserHeaderProps {
  username: string;
  logout: () => void;
}

export default function LoggedUserHeader({
  username,
  logout,
}: LoggedUserHeaderProps) {
  return (
    <h5>
      <nav className="bg-gray-900 w-full fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center h-14 px-6">
          <div className="text-white font-bold text-xl">Interviewer</div>
          <ul className="flex space-x-10 text-gray-300 text-lg">
            <li>
              <NavLink to="/" className="hover:text-white">
                Strona główna{" "}
              </NavLink>{" "}
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
        </div>
      </nav>
    </h5>
  );
}
