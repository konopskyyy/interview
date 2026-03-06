import { useContext } from "react";
import { UserContext } from "../context/UserContext.tsx";
import { AuthContext } from "../context/AuthContext.tsx";
import LoggedUserHeader from "../component/Header/LoggedUserHeader.tsx";
import AnonymousUserHeader from "../component/Header/AnonymousUserHeader.tsx";

export default function Header() {
  const userContext = useContext(UserContext);
  const authContext = useContext(AuthContext);

  if (!authContext || !userContext) return <h5>Brak kontekstu użytkownika</h5>;

  const { isAuthenticated, logout } = authContext;
  const { getUsername } = userContext;

  return isAuthenticated ? (
    <LoggedUserHeader username={getUsername()} logout={logout} />
  ) : (
    <AnonymousUserHeader />
  );
}
