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

  return { Storyblok }
}
