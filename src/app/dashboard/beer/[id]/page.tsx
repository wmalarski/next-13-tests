import { BeerHero } from "@modules/BeerHero/BeerHero";
import { getBeer } from "@services/beers";
import { GetServerSidePropsContext } from "next";
import { notFound } from "next/navigation";
import { ReactElement } from "react";

export default async function Beer({
  params,
}: GetServerSidePropsContext): Promise<ReactElement> {
  const beer = await getBeer({ id: params?.id as string });

  if (!beer) {
    notFound();
  }

  return (
    <main>
      <BeerHero beer={beer} />
    </main>
  );
}
