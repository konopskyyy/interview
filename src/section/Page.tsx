import { Routes, Route, Outlet } from "react-router-dom"; // Dodano Outlet
import RemindMePage from "../Page/Main/RemindMePage.tsx";
import NotFound from "./NotFound.tsx";
import AccountPage from "../Page/Account/AccountPage.tsx";
import InterviewList from "../Page/Interview/InterviewList.tsx";
import Interview from "../Page/Interview/Interview.tsx";
import MainPage from "../Page/Main/Main.tsx";
import RegisterPage from "../Page/Main/RegisterPage.tsx";
import LoginPage from "../Page/Main/LoginPage.tsx";

const StandardLayout = () => {
  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <Outlet />
    </div>
  );
};

export default function Page() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/remind-me" element={<RemindMePage />} />
      <Route element={<StandardLayout />}>
        <Route path="/account" element={<AccountPage />} />
        <Route path="/interview-list" element={<InterviewList />} />
        <Route path="/interview/:id" element={<Interview />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
