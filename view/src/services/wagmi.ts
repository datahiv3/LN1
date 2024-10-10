import { type CaipNetwork, createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { getBlockchainApiRpcUrl } from "@reown/appkit/networks";

export const metadata = {
  name: "DataHive",
  description: "",
  url: "https://staging-29c55d.datahive.p10node.com",
  icons: ["hhttps://avatars.githubusercontent.com/u/180420380"],
};

const opSepolia: CaipNetwork = {
  id: "eip155:11155420",
  chainId: 11155420,
  name: "OP Sepolia",
  currency: "ETH",
  explorerUrl: "https://sepolia-optimism.etherscan.io",
  rpcUrl: getBlockchainApiRpcUrl(11155420, "eip155"),
  chainNamespace: "eip155",
};

export const networks = [opSepolia];
export const projectId = import.meta.env.VITE_WC_PROJECT_ID;

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false,
});

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
