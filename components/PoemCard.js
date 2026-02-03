import Link from "next/link";
const categoryEmoji = {
  Sevda: "❤️",
  Hasret: "💔",
  Ayrılık: "😔"
};

export default function PoemCard({ poem }) {
  return (
    <li className="poem-card">
      <Link href={`/siirler/${poem.slug}`}>
        <h3 className="poem-card-title">{poem.title}</h3>
       <p className="poem-card-category">
          {categoryEmoji[poem.category]} {poem.category}
        </p>
      </Link>
    </li>
  );
}
