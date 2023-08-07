import axios from "axios";

// API fetcher
type ApiFetcherParams = (url: string) => any;

export const apiFetcher: ApiFetcherParams = async function (url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
