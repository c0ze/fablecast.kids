export default function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fablecast logo"
      role="img"
    >
      {/* Open book */}
      <g transform="translate(8, 12)">
        {/* Left page */}
        <path
          d="M28 56 C28 56, 4 52, 4 28 C4 12, 14 8, 28 8 L28 56Z"
          fill="#FFE8A3"
          stroke="#7C5CBF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Right page */}
        <path
          d="M28 56 C28 56, 52 52, 52 28 C52 12, 42 8, 28 8 L28 56Z"
          fill="#FFF3D1"
          stroke="#7C5CBF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Spine */}
        <line x1="28" y1="8" x2="28" y2="56" stroke="#7C5CBF" strokeWidth="2" />
        {/* Page lines left */}
        <line x1="12" y1="22" x2="24" y2="22" stroke="#C4A4E8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="30" x2="24" y2="30" stroke="#C4A4E8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="38" x2="24" y2="38" stroke="#C4A4E8" strokeWidth="1.5" strokeLinecap="round" />
        {/* Page lines right */}
        <line x1="32" y1="22" x2="44" y2="22" stroke="#C4A4E8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="30" x2="42" y2="30" stroke="#C4A4E8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="38" x2="44" y2="38" stroke="#C4A4E8" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Stars popping out of book */}
      <g>
        <polygon
          points="18,10 20,4 22,10 28,10 23,14 25,20 20,16 15,20 17,14 12,10"
          fill="#F4D27A"
          stroke="#E8B94A"
          strokeWidth="0.8"
        />
        <polygon
          points="50,6 51.5,2 53,6 57,6 54,8.5 55,12.5 51.5,10 48,12.5 49,8.5 46,6"
          fill="#FF9EC6"
          stroke="#E87DA8"
          strokeWidth="0.6"
        />
        <circle cx="42" cy="14" r="3" fill="#A8E6CF" stroke="#6DC4A0" strokeWidth="0.8" />
      </g>

      {/* Wordmark */}
      <text
        x="72"
        y="52"
        fontFamily="'Fraunces', serif"
        fontWeight="700"
        fontSize="42"
        fill="#2C194A"
        letterSpacing="-0.5"
      >
        fable
        <tspan fill="#7C5CBF">cast</tspan>
      </text>

      {/* Cute sparkles around text */}
      <circle cx="82" cy="22" r="2.5" fill="#F4D27A" opacity="0.9" />
      <circle cx="230" cy="18" r="2" fill="#FF9EC6" opacity="0.8" />
      <circle cx="260" cy="28" r="1.8" fill="#A8E6CF" opacity="0.85" />
      <path d="M250 14 L252 8 L254 14 L260 14 L255 18 L257 24 L252 20 L247 24 L249 18 L244 14Z" fill="#F4D27A" opacity="0.5" transform="scale(0.5) translate(490, 10)" />

      {/* Tagline */}
      <text
        x="72"
        y="70"
        fontFamily="'Nunito Sans', sans-serif"
        fontWeight="700"
        fontSize="12"
        fill="#7C5CBF"
        letterSpacing="2"
      >
        STORIES THAT SPARKLE
      </text>
    </svg>
  );
}
