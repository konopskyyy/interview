export default function LoggedUserHeader(props)
{
    const {username} = props;
    const {logout} = props;

    return (
        <h5>
            Zalogowany {username}
            <ul>
                <li>Aplikacja</li>
                <li>Konto</li>
                <li onClick={logout}>Wyloguj</li>
            </ul>
        </h5>
    );
}