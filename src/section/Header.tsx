import { useContext } from "react";
import { UserContext } from "../context/UserContext.tsx";
import LoggedUserHeader from "../component/Header/LoggedUserHeader.tsx";
import AnonymousUserHeader from "../component/Header/AnonymousUserHeader.tsx";

export default function Header() {
  const context = useContext(UserContext);

  if (!context) return <h5>Brak kontekstu użytkownika</h5>;

  const { isLogged, getUsername, logout } = context;

  return isLogged() ? (
    <LoggedUserHeader username={getUsername()} logout={logout} />
  ) : (
    <AnonymousUserHeader />
  );
}
