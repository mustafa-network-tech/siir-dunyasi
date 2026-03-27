"use client";

import { useEffect, useState } from "react";

const BEAD_COUNT = 40;
const MIN_SIZE = 6;
const MAX_SIZE = 14;
const FALL_DURATION_MIN = 8;
const FALL_DURATION_MAX = 16;
const DELAY_MAX = 4;

function createBead(id) {
  return {
    id,
    left: Math.random() * 100,
    size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
    duration: FALL_DURATION_MIN + Math.random() * (FALL_DURATION_MAX - FALL_DURATION_MIN),
    delay: Math.random() * DELAY_MAX,
  };
}

export default function RoseBeads() {
  const [beads, setBeads] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setBeads(Array.from({ length: BEAD_COUNT }, (_, i) => createBead(i)));
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {beads.map((bead) => (
        <div
          key={bead.id}
          className="rose-bead"
          style={{
            left: `${bead.left}%`,
            width: bead.size,
            height: bead.size,
            top: "-20px",
            animation: `rose-fall ${bead.duration}s linear ${bead.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
