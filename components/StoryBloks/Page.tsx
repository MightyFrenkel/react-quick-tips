import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Block } from "../../models/ContentBlocks";
import { Tip } from "./Tip";

const Page = ({ blok }: Block.Page) => (
  <main>
    <Tip blok={blok.tip.content}></Tip>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
