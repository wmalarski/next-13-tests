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
      <body className="flex flex-row w-screen min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
