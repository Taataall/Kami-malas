import Image from "next/image";
import Link from "next/link";
import { members } from "../data/members";

export default function ProfilPage() {
  return (
    <main className="profile-screen">
      <div className="profile-dot-cloud profile-dot-left" aria-hidden="true" />
      <div className="profile-dot-cloud profile-dot-right" aria-hidden="true" />
      <div className="profile-rays" aria-hidden="true" />
      <div className="profile-squiggle" aria-hidden="true" />
      <div className="profile-content">
        <Link className="profile-back-link" href="/">&larr; Beranda</Link>
        <header className="profile-heading">
          <p>TEAM PEMALAS</p>
          <h1>Profiles</h1>
        </header>
        <section className="member-grid" aria-label="Anggota Team Pemalas">
          {members.map((member) => (
            <article className="member-card" key={member.id}>
              <Image
                className="member-photo"
                src={member.image}
                alt={member.imageAlt}
                width={360}
                height={360}
              />
              <div className="member-card-content">
                <h2>{member.name}</h2>
                <div className="member-action-row">
                  <Link
                    className="member-work-link"
                    href={`/profil/${member.slug}`}
                  >
                    Profil <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    className="member-work-link secondary-link"
                    href={`/portofolio/${member.slug}`}
                  >
                    Karya <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
        <Link className="guestbook-cta" href="/portofolio/bukutamu">
          Isi Buku Tamu <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}
