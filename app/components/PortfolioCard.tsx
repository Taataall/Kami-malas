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
  const [jumlahLike, setJumlahLike] = useState(0);
  const [sudahLike, setSudahLike] = useState(false);

  function tanganiKlikLike() {
    setSudahLike((statusSebelumnya) => {
      const statusBerikutnya = !statusSebelumnya;

      if (statusBerikutnya) {
        setJumlahLike((likeSebelumnya) => likeSebelumnya + 1);
      } else {
        setJumlahLike((likeSebelumnya) => Math.max(0, likeSebelumnya - 1));
      }

      return statusBerikutnya;
    });
  }

  return (
    <div className={`project-like ${className} ${sudahLike ? "liked" : ""}`}>
      {jumlahLike >= 5 && <p className="popular-label">Proyek Terpopuler!</p>}
      <button type="button" onClick={tanganiKlikLike}>
        {sudahLike ? "Unlike" : "Like"}
      </button>
      <span>{jumlahLike} like</span>
      <strong>{sudahLike ? "Status: Sudah like" : "Status: Belum like"}</strong>
    </div>
  );
}
