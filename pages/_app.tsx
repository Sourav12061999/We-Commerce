import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../client/features/Navbar";
import Footer from "../client/components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
