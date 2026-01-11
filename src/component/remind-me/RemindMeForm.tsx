import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../UI/Form/Input.tsx";
import SendFormButton from "../UI/Form/SendFormButton.tsx";
import { useMutation } from "@tanstack/react-query";

export default function RemindMeForm() {
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationKey: ["remind-me"],
    mutationFn: async (email: string) => {
      const response = await fetch(
        "https://questions.tojest.dev/api/user/remind-me",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Błąd podczas wysyłania żądania");
      }
      return response.json();
    },
  });

  const isLoading = mutation.status === "pending";
  const isError = mutation.status === "error";
  const isSuccess = mutation.status === "success";
  const error = mutation.error;

  async function sendForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(email);
  }

  if (isSuccess) {
    return (
      <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
        <h3 className="text-lg font-bold text-green-800 mb-2">
          Sprawdź swoją skrzynkę
        </h3>
        <p className="text-green-700">
          Wysłaliśmy instrukcję resetowania hasła na podany adres email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={sendForm}>
      <Input
        fieldName="Email"
        fieldValue={email}
        setFieldValue={setEmail}
        type="email"
      />

      <SendFormButton
        disabled={isLoading}
        text={isLoading ? "Wysyłanie..." : "Przypomnij hasło"}
      />

      {isError && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          Błąd: {(error as Error)?.message || "Wystąpił błąd"}
        </p>
      )}
    </form>
  );
}
