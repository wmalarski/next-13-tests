import * as paths from "@utils/paths";
import Link from "next/link";
import { ReactElement } from "react";

export const Navbar = (): ReactElement => {
  return (
    <nav className="flex flex-col gap-2 p-4">
      <Link href={paths.home}>Home</Link>
      <Link href={paths.dashboard(0)}>Dashboard</Link>
      <Link href={paths.random}>Random</Link>
      <Link href={paths.signIn}>Sign In</Link>
      <Link href={paths.signOut}>Sign Out</Link>
    </nav>
  );
};
