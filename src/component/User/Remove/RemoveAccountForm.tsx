import { useContext } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { UserContext } from "../../../context/UserContext.tsx";
import { removeUser } from "../../../service/QuestionApiClient.ts";
import DangerousButton from "../../UI/Form/DangerousButton.tsx";

export default function RemoveAccountForm() {
  const context = useContext(UserContext);

  const mutation = useMutation({
    mutationKey: ["deleteUser"],
    mutationFn: () => removeUser(),
  });

  const isLoading = mutation.status === "pending";

  function removeAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !confirm("Czy na pewno chcesz usunąć konto? Operacja jest nieodwracalna.")
    ) {
      return;
    }

    mutation.mutate(undefined, {
      onSuccess() {
        alert("Konto zostało usunięte.");
        if (context) {
          context.logout();
        }
      },
      onError(error) {
        alert((error as Error).message);
      },
    });
  }

  return (
    <form onSubmit={removeAccount} className="mt-auto flex justify-end w-full">
      <div className="w-1/2">
        <DangerousButton
          type="submit"
          disabled={isLoading}
          text={isLoading ? "Usuwanie..." : "Usuń konto"}
        />
      </div>
    </form>
  );
}
