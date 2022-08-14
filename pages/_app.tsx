import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../client/features/Navbar";
import Footer from "../client/components/Footer";
import { Provider } from "react-redux";
import { store } from "../client/redux/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  );
}

export default MyApp;
