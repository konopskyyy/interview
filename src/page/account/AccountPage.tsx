import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router";

export default function AccountPage() {
    const navigate = useNavigate();
    const context = useContext(UserContext);

    useEffect(() => {
        if (!context || !context.user) {
            navigate("/");
        }
    }, [context, navigate]);

    if (!context || !context.user) {
        return null;
    }

    return <h2>Nazwa użytkownika: {context.user.username}</h2>;
}
