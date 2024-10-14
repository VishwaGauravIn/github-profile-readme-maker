import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/scrollbar.css";
import "../styles/markdown.css";
import "../styles/toastvg.css";
import { ProfileMakerProvider } from "../contexts/profile-maker";

function App({ Component, pageProps }) {
  return (
    <ProfileMakerProvider>
      <Component {...pageProps} />
    </ProfileMakerProvider>
  );
}

export default App;
