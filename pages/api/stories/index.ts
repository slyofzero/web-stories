import { API_URL, apiFetcher } from "@/utils";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  story: any;
};

export default async function getStory(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const reqUrl = `${API_URL}/story`;
  const story = await apiFetcher(reqUrl);

  return res.status(200).json(story);
}
