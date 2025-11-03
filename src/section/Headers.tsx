import {useContext} from "react";
import {UserContext} from "../context/UserContext.tsx";

export default function Header()
{
    const context = useContext(UserContext);

    if (!context) return <h5>Brak kontekstu użytkownika</h5>;

    const { isLogged } = context;
    const { getUsername } = context;

    return (
        <h5>
            Footer - zalogowany: {isLogged() ? getUsername() : "nie"}

        </h5>
    );
}