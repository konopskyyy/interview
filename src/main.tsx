import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {ErrorBoundary} from "react-error-boundary";
import Error from "./section/Error.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ErrorBoundary fallback={ <Error />}>
          <App />
      </ErrorBoundary>
  </StrictMode>,
);
