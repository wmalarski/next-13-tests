export const beer = (id: number) => `/dashboard/beer/${id}`;
export const dashboard = (page: number) => {
  const query = page < 1 ? "" : new URLSearchParams({ page: `${page}` });
  return `/dashboard?${query}`;
};
export const home = "/";
export const random = "/dashboard/random";
export const signIn = "/auth/signIn";
export const signOut = "/auth/signOut";
