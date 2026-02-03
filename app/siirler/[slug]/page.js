import Link from "next/link";
import poems from "@/data/poems";

export default function PoemPage({ params }) {
  const slug = params.slug;
  const poem = poems.find((p) => p.slug === slug);

  if (!poem) {
    return (
      <div className="main-content">
        <p className="poem-not-found">Şiir bulunamadı.</p>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href="/siirler">← Şiirler listesine dön</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="main-content">
      <article className="poem-page">
        <h1 className="poem-page-title">{poem.title}</h1>
        <p className="poem-page-author">Mavi Kadraj</p>
        <span className="poem-badge">{poem.category}</span>
        <div className="poem-page-content">{poem.content}</div>
      </article>
    </div>
  );
}
