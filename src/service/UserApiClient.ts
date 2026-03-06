import { post, remove } from "./GenericApiClient.ts";

const BASE_URL = "https://questions.tojest.dev/api/";

export function userLogin(user: { username: string; password: string }) {
  return post(BASE_URL + "login_check", user, "Błąd logowania");
}

export function userRegister(user: { email: string; password: string }) {
  return post(BASE_URL + "user", user, "Błąd rejestracji");
}

export function changeUserPassword(data: {
  currentPassword: string;
  newPassword: string;
}) {
  return post(BASE_URL + "user/password", data, "Błąd zmiany hasła");
}

export function logout(data: object) {
  return post(BASE_URL + "logout", data, "Błąd wylogowania");
}

export function removeUser() {
  return remove(BASE_URL + "user", "Błąd usuwania użytkownika");
}
