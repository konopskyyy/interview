import { post } from "./GenericApiClient.ts";

const BASE_URL = "https://questions.tojest.dev/api/";

export function userLogin(user: { username: string; password: string }) {
  return post(BASE_URL + "login_check", user, "Błąd logowaniaa");
}

export function userRegister(user: { email: string; password: string }) {
  return post(BASE_URL + "user", user, "Błąd rejestracji");
}
