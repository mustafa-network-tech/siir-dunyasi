import Link from "next/link";
import poems from "@/data/poems";

export default function PoemPage({ params }) {
  const slug = params.slug;
  const poem = poems.find((p) => p.slug === slug);

  if (!poem) {
    return (
      <div className="main-content poems-surface">
        <p className="poem-not-found">Şiir bulunamadı.</p>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/siirler">← Şiirler listesine dön</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="main-content poems-surface">
      <article className="poem-page">
        <Link
          href="/siirler"
          className="poem-page-back"
          aria-label="Şiirler sayfasına dön"
        >
          <span className="poem-page-back__arrow" aria-hidden>
            ←
          </span>
          Geri
        </Link>
        <h1 className="poem-page-title">{poem.title}</h1>
        <span className="poem-badge">{poem.category}</span>
        <div className="poem-page-content">{poem.content}</div>
      </article>
    </div>
  );
}
