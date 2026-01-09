import "./App.css";
import Header from "./section/Header.tsx";
import Page from "./section/Page.tsx";
import Footer from "./section/Footer.tsx";
import { UserContextProvider } from "./context/UserContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { InterviewContextProvider } from "./context/InterviewContext.tsx";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <InterviewContextProvider>
          <Page />
        </InterviewContextProvider>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
