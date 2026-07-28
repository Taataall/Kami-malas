"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type PortfolioCardProps = {
  title: string;
  children: ReactNode;
};

export function PortfolioCard({ title, children }: PortfolioCardProps) {
  const [jumlahLike, setJumlahLike] = useState(0);
  const [sudahLike, setSudahLike] = useState(false);

  function tanganiKlikLike() {
    if (!sudahLike) {
      setJumlahLike(jumlahLike + 1);
      setSudahLike(true);
    } else {
      setJumlahLike(jumlahLike - 1);
      setSudahLike(false);
    }
  }

  return (
    <article className="info-card">
      {jumlahLike >= 5 && <p className="popular-label">Proyek Terpopuler!</p>}
      <h2>{title}</h2>
      {children}
      <ProjectLikeControls
        jumlahLike={jumlahLike}
        sudahLike={sudahLike}
        tanganiKlikLike={tanganiKlikLike}
        className="inline-like"
      />
    </article>
  );
}

export function ProjectLikeButton() {
  const [jumlahLike, setJumlahLike] = useState(0);
  const [sudahLike, setSudahLike] = useState(false);

  function tanganiKlikLike() {
    if (!sudahLike) {
      setJumlahLike(jumlahLike + 1);
      setSudahLike(true);
    } else {
      setJumlahLike(jumlahLike - 1);
      setSudahLike(false);
    }
  }

  return (
    <ProjectLikeControls
      jumlahLike={jumlahLike}
      sudahLike={sudahLike}
      tanganiKlikLike={tanganiKlikLike}
    />
  );
}

type ProjectLikeControlsProps = {
  jumlahLike: number;
  sudahLike: boolean;
  tanganiKlikLike: () => void;
  className?: string;
};

function ProjectLikeControls({
  jumlahLike,
  sudahLike,
  tanganiKlikLike,
  className = "",
}: ProjectLikeControlsProps) {
  return (
    <div className={`project-like ${className}`}>
      {jumlahLike >= 5 && <p className="popular-label">Proyek Terpopuler!</p>}
      <button type="button" onClick={tanganiKlikLike}>
        {sudahLike ? "Unlike" : "Like"}
      </button>
      <span>{jumlahLike} like</span>
    </div>
  );
}
