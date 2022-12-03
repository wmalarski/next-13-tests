import { BeerHero } from "@modules/BeerHero/BeerHero";
import { getRandomBeer } from "@services/beers";
import { ReactElement } from "react";

export default async function Beer(): Promise<ReactElement> {
  const beer = await getRandomBeer();

  return (
    <main>
      <BeerHero beer={beer[0]} />
    </main>
  );
}
