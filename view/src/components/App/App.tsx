import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { WagmiProvider } from "wagmi";
import { wagmiAdapter } from "../../services/wagmi";
import PopupProvider from "../Popup/PopupProvider";
import Router from "../Router/Router";
import Toast from "../Toast/Toast";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <PopupProvider>
          <Router />
          <Toast />
        </PopupProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
