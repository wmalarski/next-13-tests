import { ParsedUrlQuery } from "querystring";

export type PageProps<
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  P extends ParsedUrlQuery = ParsedUrlQuery
> = {
  params: P;
  searchParams: Q;
};

export type ErrorProps = {
  error: Error;
  reset: () => void;
};
