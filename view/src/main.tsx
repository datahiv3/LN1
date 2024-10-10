import "@rainbow-me/rainbowkit/styles.css";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { Buffer } from "buffer";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./components/App/App";
import { config } from "./config";
import "./styles/main.scss";

if (config.isProduction) {
  ReactGA.initialize(config.googleGA);
}

globalThis.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
