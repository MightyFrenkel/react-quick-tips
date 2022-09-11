import "../styles/globals.css";
import type { AppProps } from "next/app";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import { CodeEditor } from "../components/StoryBloks/CodeEditor";

import Page from "../components/StoryBloks/Page";
import { Tip } from "../components/StoryBloks/Tip";

const components = {
  page: Page,
  codeEditor: CodeEditor,
  tip: Tip,
};

storyblokInit({
  accessToken: "rwpaqa8YJbffyvg6pGM6vQtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
