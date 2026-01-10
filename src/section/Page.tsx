import { Routes, Route, Outlet } from "react-router-dom"; // Dodano Outlet
import RegisterForm from "../component/register/RegisterForm.tsx";
import LoginForm from "../component/login/LoginForm.tsx";
import RemindMeForm from "../component/remind-me/RemindMeForm.tsx";
import NotFound from "./NotFound.tsx";
import AccountPage from "../Page/Account/AccountPage.tsx";
import InterviewList from "../Page/Interview/InterviewList.tsx";
import Interview from "../Page/Interview/Interview.tsx";
import MainPage from "../Page/Main/Main.tsx";

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

      <Route element={<StandardLayout />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/remind-me" element={<RemindMeForm />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/interview-list" element={<InterviewList />} />
        <Route path="/interview/:id" element={<Interview />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
