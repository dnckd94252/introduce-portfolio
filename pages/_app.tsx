import type { AppProps } from "next/app";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/static/fonts/style.css";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
