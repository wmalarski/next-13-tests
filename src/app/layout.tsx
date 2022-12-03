import { ReactElement, ReactNode } from "react";
import "./globals.css";
import { Navbar } from "./Navbar/Navbar";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props): ReactElement {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
