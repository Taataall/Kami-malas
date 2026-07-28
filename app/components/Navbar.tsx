import Link from "next/link";

const navigationItems = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profiles" },
  { href: "/profil/talitha-sakhi", label: "Profil Talitha" },
  { href: "/profil/nayla-marzuqa-amidita", label: "Profil Nayla" },
  { href: "/portofolio/talitha-sakhi", label: "Karya Talitha" },
  { href: "/portofolio/nayla-marzuqa-amidita", label: "Karya Nayla" },
  { href: "/portofolio/bukutamu", label: "Buku Tamu" },
];

export function Navbar() {
  return (
    <nav className="site-navbar" aria-label="Navigasi utama">
      {navigationItems.map((item) => (
        <Link className="site-nav-link" href={item.href} key={item.href}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
