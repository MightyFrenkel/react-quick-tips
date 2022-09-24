import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import { getLinkPaths } from "../../common/helpers/LinkFilter";
import { getLinks, getStory } from "../../common/services/StoryBlokApi";
import { Story } from "../../models/Story";

export async function getStaticPaths() {
  const links = await getLinks("tips");
  const paths = getLinkPaths(links);

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  let slug = params.slug ? params.slug.join("/") : "";

  let story = await getStory(slug, {
    resolve_relations: ["page.tip", "tip.level", "tip.categories"],
  });

  return {
    props: {
      story: story ? story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

const Home = ({ story }: { story: Story }) => {
  return (
    <div>
      <main className="w-full">
        <h1>This is different</h1>
        <h1>{story ? story.name : "My Site"}</h1>
        {story.content && <StoryblokComponent blok={story.content} />}
      </main>
    </div>
  );
};

export default Home;
