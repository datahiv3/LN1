import { MantineProvider, createTheme } from "@mantine/core";
import { useStore } from "@nanostores/react";
import { RainbowKitAuthenticationProvider, RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type React from "react";
import { WagmiProvider } from "wagmi";
import { hardhat, optimismSepolia } from "wagmi/chains";
import { isDev } from "../../config";
import { authStatus } from "../../features/auth";
import { authenticationAdapter } from "../../services/eth/authenticationAdapter";
import PopupProvider from "../Popup/PopupProvider";
import Router from "../Router/Router";
import Toast from "../Toast/Toast";
import AppState from "./AppState";

const config = getDefaultConfig({
  appName: "DataHive P10 Dashboard",
  projectId: import.meta.env.VITE_WC_PROJECT_ID,
  chains: [isDev ? hardhat : optimismSepolia],
  ssr: false,
});

const queryClient = new QueryClient();

const theme = createTheme({});

const App: React.FC = () => {
  const $authStatus = useStore(authStatus);

  return (
    <WagmiProvider reconnectOnMount={true} config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitAuthenticationProvider adapter={authenticationAdapter} status={$authStatus}>
          <RainbowKitProvider>
            <MantineProvider theme={theme} forceColorScheme="light">
              <PopupProvider>
                <AppState>
                  <Router />
                </AppState>
                <Toast />
              </PopupProvider>
            </MantineProvider>
          </RainbowKitProvider>
        </RainbowKitAuthenticationProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
