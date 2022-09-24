import "../styles/globals.css";
import type { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "../components/StoryBloks/Page";
import { Tip } from "../components/StoryBloks/Tip";

const components = {
  page: Page,
  tip: Tip,
};
storyblokInit({
  accessToken: process.env.ACCES_TOKEN,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
