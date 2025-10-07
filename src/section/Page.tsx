
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "../component/register/RegisterForm.tsx";
import LoginForm from "../component/login/LoginForm.tsx";
import RemindMeForm from "../component/remind-me/RemindMeForm.tsx";

export default function Page()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/remind-me" element={<RemindMeForm />} />
            </Routes>
        </BrowserRouter>
    )
}