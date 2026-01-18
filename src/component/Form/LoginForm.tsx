import { useState, useContext } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext.tsx";
import Input from "../UI/Form/Input.tsx";
import SendFormButton from "../UI/Form/SendFormButton.tsx";
import { userLogin } from "../../service/QuestionApiClient.ts";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(UserContext);

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (user: { username: string; password: string }) =>
      userLogin(user),
  });

  const isLoading = mutation.status === "pending";
  const isError = mutation.status === "error";
  const error = mutation.error;

  if (!context) {
    return null;
  }
  const { login } = context;

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
      <Input
        fieldName="Nazwa użytkownika"
        fieldValue={name}
        setFieldValue={setName}
      />
      <Input
        fieldName="Hasło"
        type="password"
        fieldValue={password}
        setFieldValue={setPassword}
      />
      <SendFormButton
        disabled={isLoading}
        text={isLoading ? "Logowanie..." : "Zaloguj się"}
      />
      {isError && (
        <p style={{ color: "red" }}>Błąd: {(error as Error)?.message}</p>
      )}
    </form>
  );
}
