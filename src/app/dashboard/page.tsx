import { BeerCard } from "@modules/BeerCard/BeerCard";
import { getBeers } from "@services/beers";
import * as paths from "@utils/paths";
import Link from "next/link";
import { ReactElement } from "react";

export default async function Dashboard(): Promise<ReactElement> {
  const beers = await getBeers();

  return (
    <main>
      <h1>Beers</h1>
      {beers.map((beer) => (
        <Link key={beer.id} href={paths.beer(beer.id)}>
          <BeerCard beer={beer} />
        </Link>
      ))}
    </main>
  );
}
