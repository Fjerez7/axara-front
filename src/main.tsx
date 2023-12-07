import ReactDOM from "react-dom/client";
import {PrimeReactProvider} from "primereact/api";
import App from "./App.tsx";
import {BrowserRouter} from "react-router-dom";
import "./main.css"


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
      <PrimeReactProvider>
        <App/>
      </PrimeReactProvider>
  </BrowserRouter>
);
