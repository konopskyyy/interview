import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../UI/Form/Input.tsx";
import SendFormButton from "../UI/Form/SendFormButton.tsx";
import {useMutation} from "@tanstack/react-query";
import {userRegister} from "../../service/QuestionApiClient.ts";

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypedpassword, setretypedpassword] = useState<string>("");

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (user: { email: string; password: string }) =>
      userRegister(user)
  });

  const isLoading = mutation.status === "pending";
  const isError = mutation.status === "error";
  const error = mutation.error;
  async function sendForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password != retypedpassword) {
      alert("hasla nie zgadzaja sie");
      return;
    }

    mutation.mutate(
      { email: name, password: password },
      {
        onSuccess() {
            alert('sukces');
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
      <Input
        fieldName="retype-password"
        type="password"
        name={retypedpassword}
        setName={setretypedpassword}
      />
      <SendFormButton
        disabled={isLoading}
        text={isLoading ? "Logowanie..." : "Rejestruj"}
      />
      {isError && (
        <p style={{ color: "red" }}>Błąd: {(error as Error)?.message}</p>
      )}
    </form>
  );
}
