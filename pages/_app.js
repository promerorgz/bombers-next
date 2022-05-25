import { ChakraProvider } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import theme from "../theme";
import { colors } from "../theme/themeVariables";
import "../theme/globalStyles.css";
import "../theme/nprogress.css";
import dynamic from "next/dynamic";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false }
);

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  const initialOptions = {
    "client-id":
      "Aa8a8BHzxUjISXFfxGInXx4ezL4lkg9BejzqRo7hHU--vRbG3Pq_qOLCm2aaHuoI6c9Z5Fx6Jv7nSawh",
    currency: "USD",
    intent: "subscription",
    vault: "true",
    // "data-client-token": "abc123xyz==",
    "data-sdk-integration-source": "button-factory",
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <GlobalContext.Provider value={global}>
          <ChakraProvider theme={theme}>
            <TopProgressBar />
            <Component {...pageProps} />
          </ChakraProvider>
        </GlobalContext.Provider>
      </PayPalScriptProvider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  // Pass the data to our page via props
  const [
    global,
    articles,
    categories,
    homepage,
    games,
    players,
    coaches,
  ] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/games"),
    fetchAPI("/players"),
    fetchAPI("/coaches"),
  ]);

  return {
    ...appProps,
    pageProps: {
      global,
      articles,
      categories,
      homepage,
      games,
      players,
      coaches,
    },
  };
};

export default MyApp;
