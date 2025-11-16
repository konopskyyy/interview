import { useState, useContext } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/UserContext";
import Input from "../UI/Form/Input";
import SendFormButton from "../UI/Form/SendFormButton";
import {userLogin} from "../../service/QuestionApiClient.ts";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(UserContext);

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (user: { username: string; password: string }) =>
      userLogin(user)
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
      <Input fieldName="name" name={name} setName={setName} />
      <Input
        fieldName="password"
        type="password"
        name={password}
        setName={setPassword}
      />
      <SendFormButton
        disabled={isLoading}
        text={isLoading ? "Logowanie..." : "Zaloguj"}
      />
      {isError && (
        <p style={{ color: "red" }}>Błąd: {(error as Error)?.message}</p>
      )}
      <h5>
        nie pamiętasz hasła? <a href="remind-me">przypomij</a>
      </h5>
    </form>
  );
}
