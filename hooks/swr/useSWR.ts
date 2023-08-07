import { apiFetcher } from "@/utils";
import originalUseSWR, { SWRConfiguration } from "swr";

export function useSWR(url: string, config: SWRConfiguration) {
  const response = originalUseSWR(url, apiFetcher, config);
  return { ...response };
}

export default useSWR;
