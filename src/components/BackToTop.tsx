"use client";

import { useState } from "react";

export default function BackToTop() {
  const [launching, setLaunching] = useState(false);

  const handleLaunch = () => {
    if (launching) return;

    setLaunching(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.setTimeout(() => {
      setLaunching(false);
    }, 1600);
  };

  return (
    <button
      onClick={handleLaunch}
      disabled={launching}
      aria-label="Launch rocket to top"
      title="Launch to top"
      className={`rocket-button fixed bottom-7 right-7 z-50 grid h-20 w-20 place-items-center rounded-full border border-red-400/30 bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-white shadow-xl shadow-red-600/30 transition-colors hover:from-red-400 hover:to-red-700 ${
        launching ? "is-launching" : ""
      }`}
    >
      {/* Orbiting sparks */}
      <span className="rocket-spark rocket-spark-one" />
      <span className="rocket-spark rocket-spark-two" />
      <span className="rocket-spark rocket-spark-three" />

      {/* Rocket SVG */}
      <svg
        viewBox="0 0 64 76"
        xmlns="http://www.w3.org/2000/svg"
        className="rocket-svg h-14 w-14 overflow-visible"
      >
        {/* Exhaust flame */}
        <g className="rocket-fire">
          <path d="M23 43 Q16 53 24 69 Q28 62 30 51Z" fill="#EF4444" />
          <path d="M30 44 Q25 58 32 74 Q39 59 34 44Z" fill="#F97316" />
          <path d="M35 43 Q43 54 39 67 Q34 60 32 49Z" fill="#EF4444" />
          <path d="M28 47 Q27 58 32 65 Q37 55 34 47Z" fill="#FDE047" />
        </g>

        {/* Rocket body */}
        <path
          d="M32 4 C22 15 19 26 23 43 L32 50 L41 43 C45 26 42 15 32 4Z"
          fill="#FFFFFF"
          stroke="#991B1B"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Highlight */}
        <path
          d="M32 7 C27 16 25 22 25 29"
          stroke="#FCA5A5"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Window */}
        <circle
          cx="32"
          cy="26"
          r="5.5"
          fill="#38BDF8"
          stroke="#1D4ED8"
          strokeWidth="2"
        />
        <circle cx="30" cy="24" r="1.5" fill="#FFFFFF" />

        {/* Fins */}
        <path
          d="M23 32 L13 44 L24 42"
          fill="#FCA5A5"
          stroke="#991B1B"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M41 32 L51 44 L40 42"
          fill="#FCA5A5"
          stroke="#991B1B"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Base */}
        <path
          d="M26 43 L32 48 L38 43"
          stroke="#991B1B"
          strokeWidth="2"
          fill="#D1D5DB"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
