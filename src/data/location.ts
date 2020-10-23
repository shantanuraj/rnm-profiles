import { fetcher } from "./api";
import { LocationResponse } from "../types";
import useSWR from "swr";

const fetchLocation = (url: string) => {
  return fetcher<LocationResponse>(url);
};

export const useLocation = (locationUrl: string) => {
  const response = useSWR(locationUrl, fetchLocation, { suspense: true });
  return response;
};
