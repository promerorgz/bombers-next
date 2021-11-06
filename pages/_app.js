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
import "../theme/globalStyles.css";

// Store Strapi Global object in context
export const GlobalContext = createContext({});
config.autoAddCss = false;

const MyApp = ({ Component, pageProps, appProps, ...rest }) => {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon || "/images/logo.png")}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PayPalScriptProvider options={initialOptions}>
        <GlobalContext.Provider value={global}>
          <ChakraProvider theme={theme}>
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
