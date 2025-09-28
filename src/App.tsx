import './App.css'
import RegisterForm from "./component/register/RegisterForm.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterForm />} />
                <Route path="/test" element={<RegisterForm />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
