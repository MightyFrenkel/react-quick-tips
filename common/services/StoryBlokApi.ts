import { getStoryblokApi } from "@storyblok/react";
import { Story } from "../../models/Story";

export async function getStory(slug: string, params: any): Promise<Story> {
  let sbParams = {
    version: "draft", // or 'published'
    ...params,
  };

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  const story = data.story;
  if (!story) console.error("Can nog get story");

  return story;
}

export async function getLinks(filter: string): Promise<any> {
  let sbParams = {
    version: "draft", // or 'published'
    starts_with: filter,
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", sbParams);
  const links = data.links;
  if (!links) console.error("Can not get links");

  return links;
}
