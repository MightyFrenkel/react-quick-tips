import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Tip } from "./Tip";

const Page = ({ blok }) => (
  <main>
    <Tip blok={blok.tip.content}></Tip>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
