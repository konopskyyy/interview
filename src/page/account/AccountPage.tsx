import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext.tsx";
import { useNavigate } from "react-router";

export default function AccountPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
      <h2>Nazwa użytkownika: {user?.username || "Niezalogowany"}</h2>);
}
