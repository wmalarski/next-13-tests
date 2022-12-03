"use client";
import * as paths from "@utils/paths";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { ReactElement } from "react";

export const Breadcrumbs = (): ReactElement => {
  const selectedLayoutSegments = useSelectedLayoutSegments();

  return (
    <nav className="flex flex-row gap-2 p-2">
      <Link href={paths.home}>Home</Link>
      {selectedLayoutSegments.map((segment) => (
        <span key={segment}>{segment}</span>
      ))}
    </nav>
  );
};
