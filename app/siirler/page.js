import PoemsIndexClient from "@/components/PoemsIndexClient";
import poems from "@/data/poems";

export default function PoemsIndexPage() {
  return (
    <div className="main-content poems-surface">
      <h1 className="page-title">Şiirler</h1>
      <PoemsIndexClient poems={poems} />
    </div>
  );
}
