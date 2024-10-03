import "@rainbow-me/rainbowkit/styles.css";
import { createAppKit } from "@reown/appkit";
import { Buffer } from "buffer";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./components/App/App";
import { config } from "./config";
import { metadata, networks, projectId, wagmiAdapter } from "./services/wagmi";
import "./styles/main.scss";

if (config.isProduction) {
  ReactGA.initialize(config.googleGA);
}

globalThis.Buffer = Buffer;

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    swaps: false,
    analytics: true,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
