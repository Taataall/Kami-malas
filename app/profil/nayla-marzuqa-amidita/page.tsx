import Image from "next/image";
import Link from "next/link";
import { getMemberBySlug } from "../../data/members";

export default function NaylaProfilePage() {
  const nayla = getMemberBySlug("nayla-marzuqa-amidita");

  if (!nayla) return null;

  return (
    <main className="nayla-profile-page">
      <div className="nayla-lines nayla-lines-left" aria-hidden="true" />
      <div className="nayla-lines nayla-lines-right" aria-hidden="true" />
      <div className="nayla-dot-cloud" aria-hidden="true" />
      <div className="nayla-ray-burst" aria-hidden="true" />
      <section className="nayla-profile-card" aria-labelledby="nayla-name">
        <Link className="nayla-back" href="/profil">&larr; Profiles</Link>
        <header className="nayla-header">
          <h1 id="nayla-name">Nayla Marzuqa<br />Amidita</h1>
          <div className="nayla-photo-wrap">
            <Image src={nayla.image} alt={nayla.imageAlt} width={240} height={240} priority />
          </div>
        </header>
        <div className="nayla-main-content">
          <div>
            <p className="nayla-intro">Hi, nama saya Nayla. Seorang UI/UX designer dengan hobby menggambar. Yuk intip karya saya!</p>
            <Link className="nayla-work-button" href={`/portofolio/${nayla.slug}`}>Karya Ku <span aria-hidden="true">&rarr;</span></Link>
            <Link className="nayla-work-button profile-secondary-button" href="/portofolio/bukutamu">Buku Tamu <span aria-hidden="true">&rarr;</span></Link>
            <p className="nayla-contact">Contact:<br />0857-5781-0763</p>
          </div>
          <aside className="nayla-skills" aria-label="Skill Nayla">
            <h2>Skills</h2>
            <div className="skill-bars" aria-hidden="true">
              <span className="skill-bar skill-design" />
              <span className="skill-bar skill-coding" />
            </div>
            <div className="skill-labels"><span>Design</span><span>Coding</span></div>
          </aside>
        </div>
      </section>
    </main>
  );
}
