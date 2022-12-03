import { BeerCard } from "@modules/BeerCard/BeerCard";
import type { Beer } from "@services/types";
import { ReactElement } from "react";

type Props = {
  beer: Beer;
};

const keys = [
  "first_brewed",
  "abv",
  "ibu",
  "target_fg",
  "target_og",
  "ebc",
  "srm",
  "ph",
  "attenuation_level",
] as const;

export const BeerHero = ({ beer }: Props): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <BeerCard beer={beer} />
      <pre className="p-4  overflow-clip">
        {JSON.stringify(
          {
            volume: beer.volume,
            boil_volume: beer.boil_volume,
            method: beer.method,
            ingredients: beer.ingredients,
            food_pairing: beer.food_pairing,
            // brewers_tips: beer.brewers_tips,
            contributed_by: beer.contributed_by,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
};
