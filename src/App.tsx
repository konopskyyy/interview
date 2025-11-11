import "./App.css";
import Header from "./section/Headers.tsx";
import Page from "./section/Page.tsx";
import Footer from "./section/Footer.tsx";
import { UserContextProvider } from "./context/UserContext.tsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <Page />
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
