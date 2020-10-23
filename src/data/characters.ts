import { fetcher } from "./api";
import { CharacterResponse } from "../types";
import useSWR from "swr";

const fetchCharacters = (page: number) => {
  return fetcher<CharacterResponse>("/character", { page });
};

export const useCharacters = (page: number) => {
  const response = useSWR(page.toString(), fetchCharacters);
  return response;
};
