"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CATEGORIES = ["Sevda", "Hasret", "Ayrılık"];

const categoryEmoji = {
  Sevda: "❤️",
  Hasret: "💔",
  Ayrılık: "😔",
};

/** URL / data-attribute için güvenli anahtar */
function categoryToMode(cat) {
  if (!cat) return "all";
  if (cat === "Ayrılık") return "ayrilik";
  return cat.toLowerCase();
}

export default function PoemsIndexClient({ poems }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [shownPoems, setShownPoems] = useState(poems);
  /** null: ilk yükleme / sakin; out: sönme; in: sırayla belirme */
  const [innerPhase, setInnerPhase] = useState(null);
  const firstInteraction = useRef(true);

  function toggleCategory(cat) {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  }

  useEffect(() => {
    if (firstInteraction.current) {
      firstInteraction.current = false;
      return;
    }

    const next =
      activeCategory === null
        ? poems
        : poems.filter((p) => p.category === activeCategory);

    let cancelled = false;
    let settleTimer;

    setInnerPhase("out");
    /* Çıkış kısa: yeni liste çabuk başlasın (globals: .poem-list-flow--out ~0.32s) */
    const outMs = 300;
    const t1 = window.setTimeout(() => {
      if (cancelled) return;
      setShownPoems(next);
      setInnerPhase("in");
      /* Son kart: (n-1)*stagger + poem-card-reveal süresi — CSS ile uyumlu */
      const staggerStep = 115;
      const cardRevealMs = 1550;
      const lastStart = Math.max(0, next.length - 1) * staggerStep;
      settleTimer = window.setTimeout(() => {
        if (!cancelled) setInnerPhase(null);
      }, lastStart + cardRevealMs + 450);
    }, outMs);

    return () => {
      cancelled = true;
      window.clearTimeout(t1);
      window.clearTimeout(settleTimer);
    };
  }, [activeCategory, poems]);

  const sceneMode = categoryToMode(activeCategory);

  return (
    <div
      className="poems-filter-scene"
      data-poem-scene={sceneMode}
    >
      <div
        className="poem-filter-badges"
        role="group"
        aria-label="Kategoriye göre filtrele"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`poem-filter-badge poem-filter-badge--${categoryToMode(cat)}${
              activeCategory === cat ? " poem-filter-badge--active" : ""
            }${activeCategory && activeCategory !== cat ? " poem-filter-badge--muted" : ""}`}
            onClick={() => toggleCategory(cat)}
            aria-pressed={activeCategory === cat}
          >
            <span className="poem-filter-badge__emoji" aria-hidden>
              {categoryEmoji[cat]}
            </span>
            {cat}
          </button>
        ))}
        {activeCategory ? (
          <span
            key={activeCategory}
            className="poem-filter-badges__selection-icon"
            data-ambient={categoryToMode(activeCategory)}
            aria-hidden
          >
            {categoryEmoji[activeCategory]}
          </span>
        ) : null}
      </div>

      {!activeCategory ? (
        <p className="poem-filter-hint">Sevda, hasret, ayrılık — aynı nefeste, yan yana.</p>
      ) : null}

      <div
        className={[
          "poem-list-flow",
          innerPhase === "out" ? "poem-list-flow--out" : "",
          innerPhase === "in" ? "poem-list-flow--in" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-live="polite"
        aria-busy={innerPhase === "out"}
      >
        <ul className="poem-list poem-list--filtered">
          {shownPoems.map((p, i) => (
            <li
              key={p.slug}
              className="poem-card"
              style={{ "--poem-enter-i": i }}
            >
              <Link href={`/siirler/${p.slug}`}>
                <h2 className="poem-card-title">{p.title}</h2>
                <p className="poem-card-category">{p.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
