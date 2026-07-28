import Link from "next/link";

export default function Home() {
  return (
    <main className="welcome-page">
      <div className="dot-field dot-field-top" aria-hidden="true" />
      <div className="dot-field dot-field-bottom" aria-hidden="true" />
      <div className="lime-glow" aria-hidden="true" />
      <div className="blue-block" aria-hidden="true" />
      <div className="sparkle" aria-hidden="true">✦</div>

      <section className="welcome-content" aria-labelledby="welcome-title">
        <p className="eyebrow">TEAM PEMALAS</p>
        <div className="title-panel">
          <h1 id="welcome-title">Welcome</h1>
          <p>to our page!</p>
        </div>
        <nav className="main-navigation" aria-label="Navigasi halaman awal">
          <Link className="nav-button profile-button" href="/profil">
            Profiles
          </Link>
          <Link className="nav-button portfolio-button" href="/portofolio/talitha-sakhi">
            Karya Talitha
          </Link>
          <Link className="nav-button portfolio-button" href="/portofolio/nayla-marzuqa-amidita">
            Karya Nayla
          </Link>
          <Link className="nav-button guestbook-button" href="/portofolio/bukutamu">
            Buku Tamu
          </Link>
        </nav>
      </section>
    </main>
  );
}
