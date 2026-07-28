"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function BukuTamuPage() {
  const [inputTeks, setInputTeks] = useState("");
  const [pesanTamu, setPesanTamu] = useState<string[]>([]);

  function tambahPesan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const pesanBaru = inputTeks.trim();
    if (!pesanBaru) return;

    setPesanTamu([...pesanTamu, pesanBaru]);
    setInputTeks("");
  }

  return (
    <main className="guestbook-page">
      <div className="guestbook-dots guestbook-dots-left" aria-hidden="true" />
      <div className="guestbook-dots guestbook-dots-right" aria-hidden="true" />
      <section className="guestbook-content" aria-labelledby="guestbook-title">
        <Link className="guestbook-back" href="/profil">
          &larr; Kembali ke profil
        </Link>
        <nav className="guestbook-quick-links" aria-label="Pintasan portofolio">
          <Link href="/portofolio/talitha-sakhi">Karya Talitha</Link>
          <Link href="/portofolio/nayla-marzuqa-amidita">Karya Nayla</Link>
        </nav>
        <p className="guestbook-kicker">Portfolio Guestbook</p>
        <h1 id="guestbook-title">Buku Tamu</h1>

        <form className="guestbook-form" onSubmit={tambahPesan}>
          <label htmlFor="guest-message">Tinggalkan pesan</label>
          <div className="guestbook-input-row">
            <input
              id="guest-message"
              type="text"
              value={inputTeks}
              onChange={(e) => setInputTeks(e.target.value)}
              placeholder="Tulis pesan untuk portfolio ini..."
            />
            <button type="submit">Kirim</button>
          </div>
        </form>

        <section className="guestbook-messages" aria-label="Daftar pesan tamu">
          {pesanTamu.length === 0 ? (
            <p className="guestbook-empty">Belum ada pesan. Jadilah tamu pertama!</p>
          ) : (
            <ul>
              {pesanTamu.map((pesan, index) => (
                <li key={`${pesan}-${index}`}>
                  <span>#{index + 1}</span>
                  <p>{pesan}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </main>
  );
}
