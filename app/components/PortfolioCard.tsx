import type { ReactNode } from "react";

type PortfolioCardProps = {
  title: string;
  children: ReactNode;
};

export function PortfolioCard({ title, children }: PortfolioCardProps) {
  return (
    <article className="info-card">
      <h2>{title}</h2>
      {children}
    </article>
  );
}
