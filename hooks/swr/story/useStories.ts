import { UseSWR, useSWR } from "..";

export function useStories({ query, config }: UseSWR) {
  const reqUrl = `/api/stories?${query}`;
  config = config || {};

  const { data: stories, ...rest } = useSWR(reqUrl, config);

  return { stories, ...rest };
}
