import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioCard } from "../../components/PortfolioCard";
import { getMemberBySlug, members } from "../../data/members";

export function generateStaticParams() {
  return members.map((member) => ({ slug: member.slug }));
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);

  if (!member) notFound();

  if (member.slug === "talitha-sakhi") {
    return <TalithaWorks />;
  }

  if (member.slug === "nayla-marzuqa-amidita") {
    return <NaylaWorks />;
  }

  return (
    <main className="inner-page">
      <div className="dot-field dot-field-bottom" aria-hidden="true" />
      <div className="lime-glow" aria-hidden="true" />
      <div className="inner-content">
        <Link className="back-link" href="/profil">&larr; Kembali ke profil</Link>
        <p className="section-kicker">Portofolio personal</p>
        <h1 className="page-title">{member.portfolio.heading}</h1>
        <div className="portfolio-member">
          <Image className="portfolio-avatar" src={member.image} alt={member.imageAlt} width={130} height={130} />
          <div>
            <p className="member-role">{member.role}</p>
            <p className="intro">{member.portfolio.description}</p>
          </div>
        </div>
        <section className="content-grid" aria-label={`Karya ${member.name}`}>
          {member.portfolio.projects.map((project) => (
            <PortfolioCard key={project.title} title={project.title}>
              <p>{project.description}</p>
            </PortfolioCard>
          ))}
        </section>
      </div>
    </main>
  );
}

function TalithaWorks() {
  return (
    <main className="talitha-works-page">
      <div className="works-dot-cloud works-dots-left" aria-hidden="true" />
      <div className="works-dot-cloud works-dots-right" aria-hidden="true" />
      <div className="works-star" aria-hidden="true">✦</div>
      <section className="talitha-works-content" aria-labelledby="works-title">
        <Link className="works-back" href="/profil/talitha-sakhi">&larr; Profil Talitha</Link>
        <p className="works-kicker">Selected Works</p>
        <h1 id="works-title">Karya Talitha</h1>
        <div className="talitha-projects">
          <article className="work-item work-mobile-app">
            <div className="app-mockup" aria-label="Preview proyek aplikasi mobile">
              <Image className="work-image" src="/talitha-namiri-mobile-app.png" alt="Mockup aplikasi Namiri" width={510} height={306} />
            </div>
            <h2>Mobile App</h2>
          </article>
          <article className="work-item work-character-card">
            <div className="character-card" aria-label="Preview proyek character card">
              <Image className="work-image" src="/talitha-zhuxin-character-card.png" alt="Character card Zhuxin" width={238} height={371} />
            </div>
            <h2>Character Card</h2>
          </article>
        </div>
      </section>
    </main>
  );
}

function NaylaWorks() {
  return (
    <main className="nayla-works-page">
      <div className="nayla-works-dots nayla-works-dots-top" aria-hidden="true" />
      <div className="nayla-works-dots nayla-works-dots-bottom" aria-hidden="true" />
      <div className="nayla-works-blob" aria-hidden="true" />
      <section className="nayla-works-content" aria-labelledby="nayla-works-title">
        <Link className="nayla-works-back" href="/profil/nayla-marzuqa-amidita">&larr; Profil Nayla</Link>
        <h1 id="nayla-works-title" className="sr-only">Karya Nayla</h1>
        <article className="nayla-work nayla-uiux-work">
          <h2>UI/UX</h2>
          <div className="nayla-work-frame">
            <Image src="/nayla-gallery-batik-lontara.png" alt="Desain UI/UX Gallery Batik Lontara" width={552} height={254} />
          </div>
        </article>
        <article className="nayla-work nayla-drawing-work">
          <h2>Gambar</h2>
          <div className="nayla-drawing-frame">
            <Image src="/nayla-oc-illustration.jpg" alt="Ilustrasi karakter orisinal Nayla" width={2048} height={2048} />
          </div>
        </article>
      </section>
    </main>
  );
}
