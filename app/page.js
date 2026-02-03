import poems from "@/data/poems";
import PoemCard from "@/components/PoemCard";
import RoseBeads from "@/components/RoseBeads";

const categoryOrder = ["Sevda", "Hasret", "Ayrılık"];

const sortedPoems = [...poems].sort((a, b) => {
  return (
    categoryOrder.indexOf(a.category) -
    categoryOrder.indexOf(b.category)
  );
});

export default function HomePage() {
  return (
    <div className="page-home">
      <RoseBeads />

      <div className="main-content">
        <h1 className="home-title">Şiir Dünyası</h1>

        <p className="home-description">
          Mavi Kadraj imzalı şiirler. Başlığa tıklayarak şiiri okuyabilirsiniz.
        </p>

        <ul className="poem-list">
          {sortedPoems.map((poem) => (
            <PoemCard key={poem.slug} poem={poem} />
          ))}
        </ul>
      </div>
    </div>
  );
}