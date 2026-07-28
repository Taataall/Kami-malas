export type Member = {
  id: string;
  slug: string;
  portfolioLabel: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  portfolio: {
    heading: string;
    description: string;
    projects: Array<{ title: string; description: string }>;
  };
};

export const members: Member[] = [
  {
    id: "talitha-sakhi",
    slug: "talitha-sakhi",
    portfolioLabel: "Portfolio A",
    name: "Talitha Sakhi",
    role: "Creative Explorer",
    image: "/talitha-sakhi-v2.jpg",
    imageAlt: "Talitha Sakhi",
    portfolio: {
      heading: "Karya Talitha",
      description: "Eksplorasi visual yang playful dan penuh karakter.",
      projects: [
        { title: "01 / Visual Story", description: "Cerita visual yang hangat dan ekspresif." },
        { title: "02 / Creative Concept", description: "Ide kreatif yang dirancang untuk terasa dekat." },
        { title: "03 / Campaign", description: "Rangkaian kampanye dengan gaya yang berani." },
      ],
    },
  },
  {
    id: "nayla-marzuqa-amidita",
    slug: "nayla-marzuqa-amidita",
    portfolioLabel: "Portfolio B",
    name: "Nayla Marzuqa Amidita",
    role: "Visual Designer",
    image: "/nayla-marzuqa-amidita.jpg",
    imageAlt: "Nayla Marzuqa Amidita",
    portfolio: {
      heading: "Karya Nayla",
      description: "Desain visual yang rapi, personal, dan penuh warna.",
      projects: [
        { title: "01 / Branding", description: "Identitas yang mudah diingat dan terasa hidup." },
        { title: "02 / Web Design", description: "Antarmuka yang ekspresif dan nyaman dipakai." },
        { title: "03 / Art Direction", description: "Arahan visual yang menyatukan sebuah cerita." },
      ],
    },
  },
];

export function getMemberBySlug(slug: string) {
  return members.find((member) => member.slug === slug);
}
