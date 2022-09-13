import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Global, MantineProvider } from "@mantine/core";
import Head from "next/head";
import "@fontsource/space-grotesk";
import { BackgroundGradient } from "../components/page-wrapper/background-gradient";
import { PageWrapper } from "../components/page-wrapper/page-wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Credit Card</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        theme={{
          fontFamily: "Space Grotesk, sans-serif",
          shadows: {
            md: "1px 1px 3px rgba(0, 0, 0, .25)",
            xl: "5px 5px 3px rgba(0, 0, 0, .25)",
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </MantineProvider>
    </>
  );
}

export default MyApp;
