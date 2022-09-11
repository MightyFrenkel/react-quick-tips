import { SbBlokData } from "@storyblok/react";

export interface Story {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  first_published_at: string;
  content: SbBlokData;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number;
  group_id: string;
  alternates: string[];
  translated_slugs: string[];
  release_id: string;
  lang: string;
  cv: number;
  rels: string[];
  links: string[];
}
