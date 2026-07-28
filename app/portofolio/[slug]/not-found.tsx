import Link from "next/link";

export default function PortfolioNotFound() {
  return (
    <main className="inner-page">
      <div className="inner-content not-found-content">
        <p className="section-kicker">404</p>
        <h1 className="page-title">Portfolio not found</h1>
        <p className="intro">Portofolio yang kamu cari belum tersedia atau alamatnya tidak tepat.</p>
        <Link className="member-work-link" href="/profil">Kembali ke profil</Link>
      </div>
    </main>
  );
}
