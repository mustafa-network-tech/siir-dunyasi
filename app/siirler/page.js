import poems from "@/data/poems";
import PoemCard from "@/components/PoemCard";

export default function SiirlerPage() {
  return (
    <div className="main-content">
      <h1 className="page-title">Tüm Şiirler</h1>
      <ul className="poem-list">
        {poems.map((poem) => (
          <PoemCard key={poem.slug} poem={poem} />
        ))}
      </ul>
    </div>
  );
}
