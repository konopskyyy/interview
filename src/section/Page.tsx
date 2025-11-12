import { Routes, Route } from "react-router-dom";
import RegisterForm from "../component/register/RegisterForm.tsx";
import LoginForm from "../component/login/LoginForm.tsx";
import RemindMeForm from "../component/remind-me/RemindMeForm.tsx";
import NotFound from "./NotFound.tsx";
import AccountPage from "../page/account/AccountPage.tsx";
import InterviewList from "../page/InterviewList/InterviewList.tsx";

export default function Page() {
  return (
    <div className="pt-14">
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/remind-me" element={<RemindMeForm />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/interview-list" element={<InterviewList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
