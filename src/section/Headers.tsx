import { useContext } from "react";
import { UserContext } from "../context/UserContext.tsx";
import LoggedUserHeader from "../component/header/LoggedUserHeader.tsx";
import AnonymousUserHeader from "../component/header/AnonymousUserHeader.tsx";

export default function Header() {
  const context = useContext(UserContext);

  if (!context) return <h5>Brak kontekstu użytkownika</h5>;

  const { isLogged } = context;
  const { getUsername } = context;
  const { logout } = context;

  return isLogged() ? (
    <LoggedUserHeader username={getUsername()} logout={logout} />
  ) : (
    <AnonymousUserHeader />
  );
}
