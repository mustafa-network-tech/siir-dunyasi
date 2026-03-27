"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PHRASES = [
  "Kelimeler sessizleştiğinde başlar.",
  "Burada her satır, bir nefes kadar yavaş.",
  "Okumak — durmak — hissetmek.",
  "Mavi Kadraj'dan özgün şiirler.",
];

export default function HomeHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const full = PHRASES[phraseIndex];
    let t;

    if (phase === "typing") {
      if (display.length < full.length) {
        t = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), 58);
      } else {
        t = setTimeout(() => setPhase("pause"), 3000);
      }
    } else if (phase === "pause") {
      t = setTimeout(() => setPhase("deleting"), 350);
    } else if (phase === "deleting") {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay((d) => d.slice(0, -1)), 22);
      } else {
        t = setTimeout(() => {
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
          setPhase("typing");
        }, 500);
      }
    }

    return () => clearTimeout(t);
  }, [display, phase, phraseIndex]);

  return (
    <section className="home-hero" aria-label="Karşılama">
      <div className="home-hero__inner">
        <h1 className="home-hero__title">
          Sessizliğin içinde,
          <span className="home-hero__title-italic"> kelimeler yürür.</span>
        </h1>
        <p className="home-hero__typewriter home-sans" aria-live="polite">
          <span>{display}</span>
          <span className="home-hero__cursor" aria-hidden="true" />
        </p>
        <Link href="/siirler" className="home-cta home-sans">
          Şiirleri Keşfet
        </Link>
      </div>
    </section>
  );
}
