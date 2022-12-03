import type { Beer } from "@services/types";
import * as paths from "@utils/paths";
import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  beer: Beer;
};

export const BeerCard = ({ beer }: Props): ReactElement => {
  return (
    <Link href={paths.beer(beer.id)}>
      <h2>{beer.name}</h2>
      <pre>{JSON.stringify(beer, null, 2)}</pre>
    </Link>
  );
};
