import { useState, useContext } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext.tsx";
import Input from "../UI/Input.tsx";
import SendFormButton from "../UI/SendFormButton";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

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
          login(data.token);
          navigate("/account");
        },
        onError(error) {
          alert((error as Error).message);
        },
      },
    );
  }

  return (
    <form onSubmit={sendForm}>
      <Input fieldName="name" name={name} setName={setName} />
      <Input
        fieldName="password"
        type="password"
        name={password}
        setName={setPassword}
      />
      <SendFormButton
        disabled={mutation.isLoading}
        text={mutation.isLoading ? "Logowanie..." : "Zaloguj"}
      />
      {mutation.isError && (
        <p style={{ color: "red" }}>
          Błąd: {(mutation.error as Error).message}
        </p>
      )}
      <h5>
        nie pamiętasz hasła? <a href="remind-me">przypomij</a>
      </h5>
    </form>
  );
}
