import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full border-t border-white text-gray-400">
      <div className="w-full px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Newsletter Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-lg font-semibold">Newsletter</h3>
            <p className="text-sm">
              Bądź na bieżąco z nowościami i przygotuj się do rozmowy
              kwalifikacyjnej.
            </p>
            <form
              className="flex flex-col space-y-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex">
                <input
                  type="email"
                  placeholder="Twoje e-mail"
                  className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Zapisz
                </button>
              </div>
              <label className="flex items-start space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-700 bg-gray-800 text-blue-600 focus:ring-blue-500"
                  required
                />
                <span>Akceptuję regulamin i politykę prywatności serwisu.</span>
              </label>
            </form>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 md:pl-12">
            <h3 className="text-white text-lg font-semibold">Szybkie linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="hover:text-white transition-colors">
                  Strona główna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kontakt"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pomoc"
                  className="hover:text-white transition-colors"
                >
                  Pomoc
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-lg font-semibold">O nas</h3>
            <p className="text-sm">
              Interviewer to platforma pomagająca w przygotowaniu do
              technicznych rozmów rekrutacyjnych.
            </p>
            <div className="flex space-x-4 pt-2">
              <span className="hover:text-white cursor-pointer transition-colors">
                LinkedIn
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Facebook
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Twitter
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <div>© 2025 Interviewer. Wszelkie prawa zastrzeżone.</div>
          <div className="flex space-x-6">
            <NavLink to="/" className="hover:text-white transition-colors">
              Polityka prywatności
            </NavLink>
            <NavLink to="/" className="hover:text-white transition-colors">
              Regulamin
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
