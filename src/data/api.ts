import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/"
});

export const fetcher = <T>(url: string, params: object = {}) =>
  api.get(url, { params }).then((res) => res.data as T);
