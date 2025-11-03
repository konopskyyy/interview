import {createContext, useState} from "react";
import Page from "../section/Page.tsx";

export const UserContext = createContext(null);

export function UserContextProvider(props)
{
    const [user, setUser] = useState();

    function isLogged(): boolean
    {
        const token = localStorage.getItem('user_token');
        console.log(token)
        return token ? true: false;
    }

    function logout(): void
    {
        localStorage.removeItem('user_token');
    }

    function getUsername(): string
    {
        return decode().username;
    }

    function decode(): JSON
    {
        const token = localStorage.getItem('user_token');
        const payloadBase64 = token.split('.')[1];
        const base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

        return JSON.parse(jsonPayload);
    }

    return (
        <UserContext.Provider value={{ user, isLogged, getUsername }}>
            {props.children}
        </UserContext.Provider>
    );
}