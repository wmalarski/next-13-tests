import { ReactElement, ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs/Breadcrumbs";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props): ReactElement {
  return (
    <div className="flex flex-col w-full gap-2">
      <Breadcrumbs />
      {children}
    </div>
  );
}
