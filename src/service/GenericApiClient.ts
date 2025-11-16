export function post(url: string, body: object, errorMessage: string) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(errorMessage);
    }
    return res.json();
  });
}
