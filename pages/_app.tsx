import "../styles/globals.css";
import Head from "next/head";
import { AuthStateProvider } from "../global-contexts/auth-state";
import Provider from "../components/Reusable/Provider";
import { GlobalContextProvider } from "global-contexts/Global";
import { SWRConfig } from "swr";
import axios from "axios";

const options = {
  // fetcher: (url) => axios.get("https://api-v2.buffer.finance/" + url).then((res) => res.data),
  refreshInterval: 1000,
};

function MyApp({ Component, pageProps }) {
  return (
    // <SWRConfig value={options}>
    <AuthStateProvider>
      <Head>
        <title>Buffer</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon-16x16.png" color="#5bbad5" />

        {/* <meta charset="UTF-8" /> */}
        <meta name="language" content="en" />
        <meta name="description" content="Buffer is an on-chain non-custodial peer-to-pool options trading protocol." />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Buffer_Finance" />
        <meta name="twitter:title" content="Buffer Finance" />
        <meta
          name="twitter:description"
          content="Buffer is an on-chain non-custodial peer-to-pool options trading protocol."
        />
        <meta name="twitter:image" content="https://res.cloudinary.com/dtuuhbeqt/image/upload/v1684085787/bfr.png" />
        <meta property="og:url" content="https://buffer.finance/" />
        <meta property="og:title" content="Buffer finance" />
        <meta property="og:site_name" content="Buffer finance" />
        <meta
          property="og:description"
          key="description"
          content="Buffer is an on-chain non-custodial peer-to-pool options trading protocol."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/dtuuhbeqt/image/upload/v1684085787/bfr.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalContextProvider>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </GlobalContextProvider>
    </AuthStateProvider>
    // {/* </SWRConfig> */}
  );
}

export default MyApp;
