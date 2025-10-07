import "./App.css";
import RegisterForm from "./component/register/RegisterForm.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./component/login/LoginForm.tsx";
import RemindMeForm from "./component/remind-me/RemindMeForm.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/remind-me" element={<RemindMeForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
