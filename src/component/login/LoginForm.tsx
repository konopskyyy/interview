import { useState } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";

export default function LoginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const mutation = useMutation({
        mutationFn: (user: { username: string; password: string }) =>
            fetch("https://questions.tojest.dev/api/login_check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }).then((res) => {
                if (!res.ok) {
                    throw new Error("Błąd logowania");
                }
                return res.json();
            }),
    });

    function sendForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        mutation.mutate(
            { username: name, password: password },
            {
                onSuccess(data) {
                    localStorage.setItem("user_token", data.token);
                },
                onError(error) {
                    alert((error as Error).message);
                },
            }
        );
    }

    return (
        <form onSubmit={sendForm}>
            <label htmlFor="name">name </label>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name"
            />
            <br/>
            <label htmlFor="password">password </label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                type="password"
            />
            <br/>
            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? "Logowanie..." : "Zaloguj"}
            </button>
            {mutation.isError && (
                <p style={{color: "red"}}>Błąd: {(mutation.error as Error).message}</p>
            )}
            <h5>
                nie pamiętasz hasła? <a href="remind-me">przypomij</a>
            </h5>
        </form>
    );
}
