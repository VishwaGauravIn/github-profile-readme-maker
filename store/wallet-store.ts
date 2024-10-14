import { makeAutoObservable } from 'mobx';
import { NETWORK_ID, Wallet } from '../lib/near';

export class WalletStore {
  wallet: Wallet | undefined = undefined;
  signedAccountId: string = '';
  networkId: string = NETWORK_ID;

  constructor() {
    makeAutoObservable(this);
  }
  
  setNetworkId = (networkId: string) => {
    this.networkId = networkId;
  };

  setWallet = (wallet: Wallet) => {
    this.wallet = wallet;
  };

  setSignedAccountId = (signedAccountId: string) => {
    this.signedAccountId = signedAccountId;
  };

  // Expose signIn method
  signIn = async () => {
    if (this.wallet) {
      await this.wallet.signIn();
    } else {
      throw new Error("Wallet is not initialized");
    }
  };

  // Expose signOut method
  signOut = async () => {
    if (this.wallet) {
      await this.wallet.signOut();
    } else {
      throw new Error("Wallet is not initialized");
    }
  };
}

export const walletStore = new WalletStore();
