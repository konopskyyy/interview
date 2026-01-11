import { useState } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import Input from "../../UI/Form/Input.tsx";
import SendFormButton from "../../UI/Form/SendFormButton.tsx";
import { changeUserPassword } from "../../../service/QuestionApiClient.ts";

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const mutation = useMutation({
    mutationKey: ["changePassword"],
    mutationFn: (data: { currentPassword: string; newPassword: string }) =>
      changeUserPassword(data),
  });

  const isLoading = mutation.status === "pending";
  const isError = mutation.status === "error";
  const error = mutation.error;

  function sendForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newPassword !== repeatNewPassword) {
      alert("Hasła muszą być identyczne");
      return;
    }

    mutation.mutate(
      { currentPassword: currentPassword, newPassword: newPassword },
      {
        onSuccess() {
          alert("Hasło zostało zmienione pomyślnie");
          setCurrentPassword("");
          setNewPassword("");
          setRepeatNewPassword("");
        },
        onError(error) {
          alert((error as Error).message);
        },
      },
    );
  }

  return (
    <form onSubmit={sendForm}>
      <fieldset className="border border-gray-300 p-4 rounded-md">
        <legend className="px-2 text-gray-700">Zmiana hasła</legend>
        <div className="w-full">
          <div className="mb-4">
            <Input
              fieldName="Stare hasło"
              type="password"
              fieldValue={currentPassword}
              setFieldValue={setCurrentPassword}
            />
          </div>
          <div className="mb-4">
            <Input
              fieldName="Nowe hasło"
              type="password"
              fieldValue={newPassword}
              setFieldValue={setNewPassword}
            />
          </div>
          <div className="mb-4">
            <Input
              fieldName="Powtórz nowe hasło"
              type="password"
              fieldValue={repeatNewPassword}
              setFieldValue={setRepeatNewPassword}
            />
          </div>
          <SendFormButton
            disabled={isLoading}
            text={isLoading ? "Zmienianie hasła..." : "Zmień hasło"}
          />
        </div>
        {isError && (
          <p style={{ color: "red" }} className="mt-2">
            Błąd: {(error as Error)?.message}
          </p>
        )}
      </fieldset>
    </form>
  );
}
