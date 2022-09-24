export function getLinkPaths(links: any) {
  let paths: any = [];
  Object.keys(links).forEach((linkKey) => {
    if (links[linkKey].is_folder) {
      return;
    }

    const slug = links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });
  return paths;
}
