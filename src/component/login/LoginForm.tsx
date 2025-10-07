import { useState } from "react";
import type { FormEvent } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function sendForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch(
      "https://questions.tojest.dev/api/login_check",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      },
    );
    const data = await response.json();
    alert(JSON.stringify(data));
  }

  return (
    <form onSubmit={sendForm}>
      <label htmlFor="name">name </label>
      <input onChange={(e) => setName(e.target.value)} value={name} id="name" />
      <br />
      <label htmlFor="password">password </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        id="password"
        type="password"
      />
      <br />
      <button type="submit">Zaloguj</button>
      <h5>
        nie pamiętasz hasła? <a href="remind-me">przypomij</a>
      </h5>
    </form>
  );
}
