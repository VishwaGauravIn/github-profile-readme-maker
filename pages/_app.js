import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/scrollbar.css";
import "../styles/markdown.css";
import "../styles/toastvg.css";
import { GPRMProvider } from "../components/mobx/GPRMcontext";

function MyApp({ Component, pageProps }) {
  return (
    <GPRMProvider>
      <Component {...pageProps} />
    </GPRMProvider>
  );
}

export default MyApp;
