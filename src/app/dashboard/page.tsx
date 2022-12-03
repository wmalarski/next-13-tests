import { BeerCard } from "@modules/BeerCard/BeerCard";
import { getBeers } from "@services/beers";
import * as paths from "@utils/paths";
import { PageProps } from "@utils/types";
import Link from "next/link";
import type { ReactElement } from "react";

export default async function Dashboard({
  searchParams,
}: PageProps): Promise<ReactElement> {
  const page = +(searchParams.page as string) || 1;

  const beers = await getBeers({ page });

  return (
    <main>
      <h1>Beers</h1>
      {beers.map((beer) => (
        <Link key={beer.id} href={paths.beer(beer.id)}>
          <BeerCard beer={beer} />
        </Link>
      ))}
      <div>
        {page > 1 ? <Link href={paths.dashboard(page - 1)}>Prev</Link> : null}
        {beers.length > 0 ? (
          <Link href={paths.dashboard(page + 1)}>Next</Link>
        ) : null}
      </div>
    </main>
  );
}
