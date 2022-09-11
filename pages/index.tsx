import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import Head from "next/head";
import { Story } from "../models/Story";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    resolve_relations: ["page.tip", "tip.level", "tip.categories"],
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? (data.story as Story) : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

const Home = ({ story }: { story: Story }) => {
  return (
    <div className={styles.container}>
      <main className="w-full">
        <h1>{story ? story.name : "My Site"}</h1>
        {story.content && <StoryblokComponent blok={story.content} />}
      </main>
    </div>
  );
};

export default Home;
