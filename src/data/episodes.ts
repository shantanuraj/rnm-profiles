import { fetcher } from "./api";
import { EpisodeResponse } from "../types";
import useSWR from "swr";

const fetchEpisodes = (url: string) => {
  return fetcher<EpisodeResponse>(url);
};

export const useEpisodes = (episodeUrls: string[]) => {
  // Get episode ids from the end of the URL and combine into one comma seperated string
  // "https://rickandmortyapi.com/api/episode/4" -> 4
  const episodesIdentifier = episodeUrls
    .map((url) => url.slice(url.lastIndexOf("/") + 1))
    .join(",");
  const response = useSWR(`/episode/${episodesIdentifier}`, fetchEpisodes, {
    suspense: true,
  });
  return response;
};
