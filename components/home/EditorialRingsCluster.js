const ELLIPSES = [
  { rx: 75, ry: 58 },
  { rx: 109, ry: 84 },
  { rx: 144, ry: 111 },
  { rx: 178, ry: 137 },
  { rx: 210, ry: 162 },
];
const RINGS_CX = 230;
const RINGS_CY = 230;

/**
 * Yayılmış halka kümesi — SVG feGaussianBlur/CSS blur yok (bazı GPU’larda boş sayfa tetikliyordu).
 */
export default function EditorialRingsCluster({ patchId }) {
  return (
    <div
      className={`home-editorial-body__rings home-editorial-body__rings--${patchId}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 460 460"
        xmlns="http://www.w3.org/2000/svg"
        className="home-editorial-body__rings-svg"
      >
        <g
          className="home-editorial-body__rings-shape"
          transform={`translate(12 -8) rotate(-11 ${RINGS_CX} ${RINGS_CY})`}
        >
          {ELLIPSES.map((e, i) => (
            <ellipse
              key={`${patchId}-${e.rx}-${e.ry}`}
              cx={RINGS_CX}
              cy={RINGS_CY}
              rx={e.rx}
              ry={e.ry}
              fill="none"
              className="home-editorial-body__ring"
              stroke={i % 2 === 0 ? "rgba(188, 178, 228, 0.22)" : "rgba(165, 155, 210, 0.18)"}
              strokeWidth="1.1"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
