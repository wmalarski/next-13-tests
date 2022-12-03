import Link from "next/link";
import { ReactElement } from "react";
import * as paths from "../../utils/paths";

export const Navbar = (): ReactElement => {
  return (
    <nav>
      <Link href={paths.home}>Home</Link>
      <Link href={paths.dashboard}>Dashboard</Link>
      <Link href={paths.signIn}>Sign In</Link>
      <Link href={paths.signOut}>Sign Out</Link>
    </nav>
  );
};