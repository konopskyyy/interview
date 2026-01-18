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
        <div className="flex flex-col min-h-screen bg-gray-950 text-white">
          <Header />
          <InterviewContextProvider>
            <main className="flex-grow pt-14">
              <Page />
            </main>
          </InterviewContextProvider>
          <Footer />
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
