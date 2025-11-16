export function userLogin(user: { username: string; password: string })
{
    return fetch("https://questions.tojest.dev/api/login_check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Błąd logowania");
    }
    return res.json();
  })
}

export function userRegister(user: { email: string; password: string })
{
  return fetch("https://questions.tojest.dev/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Błąd logowania");
    }
    return res.json();
  })
}
