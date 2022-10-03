import { ChakraProvider } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import theme from "../theme";
import "../theme/embla.css";
import "../theme/globalStyles.scss";
import "../theme/nprogress.css";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

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
  const [global, articles, homepage, games, pages, sliders] = await Promise.all(
    [
      fetchAPI("/global"),
      fetchAPI("/articles?status=published"),
      fetchAPI("/homepage"),
      fetchAPI("/games"),
      fetchAPI("/pages"),
      fetchAPI("/sliders"),
    ]
  );

  return {
    ...appProps,
    pageProps: {
      global,
      articles,
      homepage,
      games,
      pages,
      sliders,
    },
  };
};

export default MyApp;
