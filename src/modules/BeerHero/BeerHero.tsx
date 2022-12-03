import type { Beer } from "@services/types";
import { ReactElement } from "react";

type Props = {
  beer: Beer;
};

export const BeerHero = ({ beer }: Props): ReactElement => {
  return (
    <div>
      <h1>{beer.name}</h1>
      <pre>{JSON.stringify(beer, null, 2)}</pre>
    </div>
  );
};
