import "./App.css";
import Header from "./section/Headers.tsx";
import Page from "./section/Page.tsx";
import Footer from "./section/Footer.tsx";
import {UserContextProvider} from "./context/UserContext.tsx";

function App() {
  return (
      <>
          <UserContextProvider>
              <Header/>
          </UserContextProvider>
          <Page/>
          <Footer/>

      </>
  );
}

export default App;
