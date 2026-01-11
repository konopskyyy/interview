export function post(url: string, body: object, errorMessage: string) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("user_token")
        ? "Bearer " + sessionStorage.getItem("user_token")
        : "",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(errorMessage);
    }
    return res.json();
  });
}

export function remove(url: string, errorMessage: string) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("user_token")
        ? "Bearer " + sessionStorage.getItem("user_token")
        : "",
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(errorMessage);
    }
    return res.text().then((text) => (text ? JSON.parse(text) : {}));
  });
}
