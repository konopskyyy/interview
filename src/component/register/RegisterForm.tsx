import { useState } from "react";
import type { FormEvent } from "react";

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypedpassword, setretypedpassword] = useState<string>("");

  async function sendForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password != retypedpassword) {
      alert("hasla nie zgadzaja sie");
      return;
    }
    const response = await fetch("https://questions.tojest.dev/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: name,
        password: password,
      }),
    });
    const data = await response.json();
    alert(JSON.stringify(data));
  }

  return (
    <form onSubmit={sendForm}>
      <label htmlFor="name">name </label>
      <input value={name} id="name" onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="password">password </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <label htmlFor="retype-password">retyped password </label>
      <input
        id="retype-password"
        value={retypedpassword}
        type="password"
        onChange={(e) => setretypedpassword(e.target.value)}
      />
      <br />
      <button type="submit">Rejestruj</button>
    </form>
  );
}
