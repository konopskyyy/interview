import { useState } from "react";
import type { FormEvent } from "react";
import Input from "../UI/Form/Input.tsx";
import SendFormButton from "../UI/Form/SendFormButton.tsx";

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
      <SendFormButton text="Wyslij" />
    </form>
  );
}
