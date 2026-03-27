import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  display: "swap",
});

export default function ManifestoLetterDesk() {
  return (
    <div className="home-manifesto__letter-desk" aria-hidden="true">
      <div className="home-manifesto__letter-desk-stage">
        <div className="home-manifesto__parchment">
          <div className="home-manifesto__parchment-surface" aria-hidden="true">
            <div className="home-manifesto__parchment-edge" />
            <div className="home-manifesto__parchment-ruled" />
            <div className="home-manifesto__parchment-burn" />
            <div className="home-manifesto__parchment-scorch" />
            <div className="home-manifesto__parchment-grain" />
          </div>
          <div className={`home-manifesto__parchment-body ${caveat.className}`}>
          <p className="home-manifesto__parchment-script">
            Kelimeler sessizce süzülür…
          </p>
          <span className="home-manifesto__parchment-salutation">Saygılarımla,</span>
          <span className="home-manifesto__parchment-signature">Mavi Kadraj</span>
          <div className="home-manifesto__ink-line" />
          </div>
          <div className="home-manifesto__quill">
          <svg
            viewBox="0 0 120 200"
            xmlns="http://www.w3.org/2000/svg"
            className="home-manifesto__quill-svg"
          >
            <defs>
              <linearGradient id="quill-shaft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a332e" />
                <stop offset="100%" stopColor="#1c1816" />
              </linearGradient>
            </defs>
            <path
              d="M62 6c18 8 32 28 36 52 4 28-6 56-22 78-6 8-12 14-18 18"
              fill="none"
              stroke="url(#quill-shaft)"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M62 8C44 22 36 48 40 74c2 14 8 28 18 40"
              fill="none"
              stroke="#2a2520"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M66 32C52 50 48 72 54 94"
              fill="none"
              stroke="#2a2520"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.35"
            />
            <path
              d="M58 152c-4 10-8 20-14 28l-6 9"
              fill="none"
              stroke="#231f1c"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M38 189l-10 6 4 9 8-6z"
              fill="#1a1614"
              stroke="#0d0b0a"
              strokeWidth="0.6"
            />
            <line
              x1="36"
              y1="195"
              x2="32"
              y2="203"
              stroke="#0d0b0a"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
