import "../globals.scss";
import "../styles/prism-line-number.css";
import "../styles/prism-nightowl.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ThemeContext } from "../helpers/useTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext>
  );
}

export default MyApp;
