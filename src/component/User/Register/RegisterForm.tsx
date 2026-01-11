import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../../UI/Form/Input.tsx";
import SendFormButton from "../../UI/Form/SendFormButton.tsx";
import { useMutation } from "@tanstack/react-query";
import { userRegister } from "../../../service/QuestionApiClient.ts";

export default function RegisterForm() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypedpassword, setretypedpassword] = useState<string>("");

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (user: { email: string; password: string }) =>
      userRegister(user),
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
          alert("sukces");
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
      <Input
        fieldName="Powtórz hasło"
        type="password"
        fieldValue={retypedpassword}
        setFieldValue={setretypedpassword}
      />
      <SendFormButton
        disabled={isLoading}
        text={isLoading ? "Rejestrowanue..." : "Rejestruj"}
      />
      {isError && (
        <p style={{ color: "red" }}>Błąd: {(error as Error)?.message}</p>
      )}
    </form>
  );
}
