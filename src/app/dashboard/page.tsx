import { BeerCard } from "@modules/BeerCard/BeerCard";
import { getBeers } from "@services/beers";
import { ReactElement } from "react";

export default async function Dashboard(): Promise<ReactElement> {
  const beers = await getBeers();

  return (
    <main>
      <h1>Beers</h1>
      {beers.map((beer) => (
        <BeerCard beer={beer} key={beer.id} />
      ))}
    </main>
  );
}
