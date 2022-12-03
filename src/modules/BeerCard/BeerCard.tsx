import type { Beer } from "@services/types";
import Image from "next/image";
import { Fragment, ReactElement } from "react";

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

export const BeerCard = ({ beer }: Props): ReactElement => {
  return (
    <div className="flex flex-row p-4 gap-4">
      <div className="flex flex-shrink max-w-[160px] min-w-[160px] p-4">
        {beer.image_url ? (
          <Image
            alt={`${beer.name} picture`}
            className="w-auto h-auto"
            height={320}
            src={beer.image_url}
            width={320}
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl">{beer.name}</h2>
        <h3 className="text-sm opacity-80">{beer.tagline}</h3>
        <p className="pt-2">{beer.description}</p>
        <div className="pt-2 grid grid-cols-[max-content_1fr] items-center gap-3 text-sm opacity-80 lg:grid-cols-[max-content_1fr_max-content_1fr]">
          {keys.map((key) => (
            <Fragment key={key}>
              {beer[key] ? (
                <>
                  <span className="font-semibold capitalize">
                    {key.replaceAll("_", " ")}
                  </span>
                  <span>{beer[key]}</span>
                </>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
