import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/scrollbar.css";
import "../styles/markdown.css";
import "../styles/toastvg.css";
import { ProfileMakerProvider } from "../contexts/profile-maker";
import { WalletProvider } from "../contexts/wallet";

function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <ProfileMakerProvider>
        <Component {...pageProps} />
      </ProfileMakerProvider>
    </WalletProvider>
  );
}

export default App;
