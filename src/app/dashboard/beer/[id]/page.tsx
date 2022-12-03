import { BeerHero } from "@modules/BeerHero/BeerHero";
import { getBeer } from "@services/beers";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";

export default async function Beer({
  params,
}: GetServerSidePropsContext): Promise<ReactElement> {
  const beer = await getBeer({ id: params?.id as string });

  return (
    <main>
      <BeerHero beer={beer[0]} />
    </main>
  );
}
