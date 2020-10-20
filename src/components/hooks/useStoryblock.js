import StoryblokClient from "storyblok-js-client"

export default function useStoryblock() {
  const Storyblok =
    typeof window !== undefined
      ? new StoryblokClient({
          accessToken: "Hw2k511Rg3irS6QTDvxrewtt",
          cache: {
            clear: "auto",
            type: "memory",
          },
        })
      : null

  const FetchArtworks = async (page, filterQuery, perPage) => {
    const query = {
      per_page: perPage,
      page: page,
      starts_with: "artwork/",
      resolve_relations: "artist,stil,medium",
      sort_by: "content.randSort:asc",
    }

    if (filterQuery) {
      query["filter_query"] = filterQuery
    }
    console.log(filterQuery)
    console.log(query)

    try {
      const result = await Storyblok.get("cdn/stories/", query)

      return result
    } catch (error) {
      console.log(error)
    }
  }

  return { FetchArtworks }
}
