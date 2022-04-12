import WalletConnect from "@walletconnect/web3-provider";
export const providerOptions = {
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: "8043bb2cf99347b1bfadfb233c5325c0", // required
    },
  },
};
