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
      const error = new Error(errorMessage) as Error & { status: number };
      error.status = res.status;
      throw error;
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
      const error = new Error(errorMessage) as Error & { status: number };
      error.status = res.status;
      throw error;
    }
    return res.text().then((text) => (text ? JSON.parse(text) : {}));
  });
}

export function get(url: string, errorMessage: string) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("user_token")
        ? "Bearer " + sessionStorage.getItem("user_token")
        : "",
    },
  }).then((res) => {
    if (!res.ok) {
      const error = new Error(errorMessage) as Error & { status: number };
      error.status = res.status;
      throw error;
    }
    return res.json();
  });
}
