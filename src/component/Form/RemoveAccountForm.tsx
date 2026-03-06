import { useContext } from "react";
import type { FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthContext.tsx";
import { removeUser } from "../../service/UserApiClient.ts";
import DangerousButton from "../UI/Form/DangerousButton.tsx";

export default function RemoveAccountForm() {
  const authContext = useContext(AuthContext);

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
        if (authContext) {
          authContext.logout();
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
