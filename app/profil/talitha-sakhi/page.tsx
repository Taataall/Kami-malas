import Image from "next/image";
import Link from "next/link";
import { getMemberBySlug } from "../../data/members";

export default function TalithaProfilePage() {
  const talitha = getMemberBySlug("talitha-sakhi");

  if (!talitha) return null;

  return (
    <main className="talitha-profile-page">
      <div className="talitha-dots talitha-dots-top" aria-hidden="true" />
      <div className="talitha-dots talitha-dots-bottom" aria-hidden="true" />
      <div className="talitha-swirl" aria-hidden="true" />
      <section className="talitha-profile-card" aria-labelledby="talitha-name">
        <Link className="talitha-back" href="/profil">&larr; Profiles</Link>
        <header className="talitha-header">
          <div className="talitha-photo-wrap">
            <Image src={talitha.image} alt={talitha.imageAlt} width={250} height={250} priority />
          </div>
          <h1 id="talitha-name">Talitha Sakhi</h1>
        </header>

        <div className="talitha-main-content">
          <div>
            <p className="talitha-intro">
              Hai, aku Tata. Aku suka mengubah ide-ide yang awalnya cuma angan jadi sesuatu yang bisa dipakai orang.
              Aku percaya kalau teknologi nggak cuma soal coding, tapi juga soal memahami manusia. Karena itu aku suka belajar desain,
              ngoding, dan bikin karya yang punya manfaat nyata. Lihat karya-karyaku yuk!
            </p>
            <Link className="talitha-work-button" href={`/portofolio/${talitha.slug}`}>
              Karya Ku <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link className="talitha-work-button profile-secondary-button" href="/portofolio/bukutamu">
              Buku Tamu <span aria-hidden="true">&rarr;</span>
            </Link>
            <p className="talitha-contact">Contact: 0859-3000-6423</p>
          </div>
          <aside className="talitha-skills" aria-label="Skill Talitha">
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
