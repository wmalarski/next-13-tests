import type { Beer } from "./types";

const endpoint = "https://api.punkapi.com";

const buildSearchParams = (
  query?: Record<string, unknown>
): URLSearchParams => {
  const entries = Object.entries(query || {});
  const pairs = entries.flatMap(([key, value]) =>
    value !== undefined ? [[key, `${value}`]] : []
  );
  const search = new URLSearchParams(pairs);

  return search;
};

type Fetcher = {
  init?: RequestInit;
  pathname: string;
  query?: Record<string, unknown>;
};

const fetcher = async <T>({ pathname, query, init }: Fetcher): Promise<T> => {
  const search = buildSearchParams(query);
  const url = `${endpoint}${pathname}?${search}`;

  const response = await fetch(url, init);
  const json = await response.json();

  return json as T;
};

type GetBeers = {
  abv_gt?: number;
  abv_lt?: number;
  ibu_gt?: number;
  ibu_lt?: number;
  ebc_gt?: number;
  ebc_lt?: number;
  beer_name?: string;
  yeast?: string;
  brewed_before?: Date;
  brewed_after?: Date;
  hops?: string;
  malt?: string;
  food?: string;
  ids?: string;
  page?: number;
  per_page?: number;
};

export const getBeers = (query: GetBeers = {}) => {
  console.log("getBeers");
  return fetcher<Beer[]>({
    pathname: "/v2/beers",
    query,
  });
};

type GetBeer = {
  id: string;
};

export const getBeer = ({ id }: GetBeer) => {
  return fetcher<Beer[]>({
    pathname: `/v2/beers/${id}`,
  });
};

export const getRandomBeer = () => {
  return fetcher<Beer[]>({
    pathname: "/v2/beers/random",
  });
};
