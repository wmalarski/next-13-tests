import { BeerHero } from "@modules/BeerHero/BeerHero";
import { getRandomBeer } from "@services/beers";
import { notFound } from "next/navigation";
import { ReactElement } from "react";

export default async function RandomBeer(): Promise<ReactElement> {
  const beer = await getRandomBeer();

  if (!beer) {
    notFound();
  }

  return (
    <main>
      <BeerHero beer={beer} />
    </main>
  );
}
