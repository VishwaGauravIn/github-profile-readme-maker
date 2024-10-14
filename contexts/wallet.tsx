import React, { useEffect } from "react";
import { Wallet } from "../lib/near";
import { SOCIAL_CONTRACT } from "../lib/social";
import { walletStore } from "../store/wallet-store";

const WalletContext = React.createContext(undefined);

const getNearContract = (networkId: string) => SOCIAL_CONTRACT[networkId];

export const WalletProvider = ({ children }) => {
  const { setWallet, setSignedAccountId, networkId, signedAccountId } =
    walletStore;
  const store = walletStore;

  useEffect(() => {
    if (!walletStore.wallet) {
      const wallet = new Wallet({
        createAccessKeyFor: getNearContract(networkId),
        networkId: networkId,
      });
      wallet.startUp((signedAccountId: string) => {
        console.log("starting up wallet")
        setSignedAccountId(signedAccountId);
      });
      console.log("setting wallet...", JSON.stringify(wallet))
      setWallet(wallet);
    }
  }, [networkId]);

  console.log("signedAccountId", signedAccountId);

  return (
    <WalletContext.Provider value={store}>{children}</WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = React.useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
