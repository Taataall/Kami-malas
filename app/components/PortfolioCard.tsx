"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type PortfolioCardProps = {
  title: string;
  children: ReactNode;
};

export function PortfolioCard({ title, children }: PortfolioCardProps) {
  return (
    <article className="info-card">
      <h2>{title}</h2>
      {children}
      <ProjectLikeButton className="inline-like" />
    </article>
  );
}

type ProjectLikeButtonProps = {
  className?: string;
};

export function ProjectLikeButton({ className = "" }: ProjectLikeButtonProps) {
  const [sudahLike, setSudahLike] = useState(false);

  function tanganiKlikLike() {
    setSudahLike((statusSebelumnya) => !statusSebelumnya);
  }

  return (
    <div className={`project-like ${className} ${sudahLike ? "liked" : ""}`}>
      <button
        type="button"
        className="heart-button"
        onClick={tanganiKlikLike}
        aria-label={sudahLike ? "Batalkan like" : "Like proyek"}
        aria-pressed={sudahLike}
      >
        {sudahLike ? "♥" : "♡"}
      </button>
    </div>
  );
}
