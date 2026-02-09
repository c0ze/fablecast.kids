export default function HeroBanner({ className = '' }) {
  return (
    <svg
      viewBox="0 0 800 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Whimsical illustration of storybook characters"
      role="img"
    >
      {/* Sky gradient background */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D5F5" />
          <stop offset="60%" stopColor="#FFF3D1" />
          <stop offset="100%" stopColor="#FFE8A3" />
        </linearGradient>
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8E6CF" />
          <stop offset="100%" stopColor="#7BC8A4" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="320" rx="24" fill="url(#sky)" />

      {/* Rolling hills */}
      <ellipse cx="200" cy="320" rx="300" ry="100" fill="#B8F0D8" />
      <ellipse cx="600" cy="320" rx="350" ry="80" fill="url(#grass)" />
      <ellipse cx="400" cy="320" rx="500" ry="60" fill="#A8E6CF" />

      {/* Cute clouds */}
      <g opacity="0.8">
        <ellipse cx="120" cy="60" rx="50" ry="22" fill="white" />
        <ellipse cx="145" cy="50" rx="35" ry="18" fill="white" />
        <ellipse cx="95" cy="52" rx="30" ry="16" fill="white" />
      </g>
      <g opacity="0.6">
        <ellipse cx="650" cy="45" rx="45" ry="18" fill="white" />
        <ellipse cx="675" cy="38" rx="30" ry="14" fill="white" />
        <ellipse cx="625" cy="40" rx="28" ry="13" fill="white" />
      </g>
      <g opacity="0.5">
        <ellipse cx="400" cy="35" rx="35" ry="14" fill="white" />
        <ellipse cx="420" cy="28" rx="25" ry="12" fill="white" />
      </g>

      {/* Sun */}
      <circle cx="700" cy="70" r="40" fill="#F4D27A" opacity="0.9" />
      <circle cx="700" cy="70" r="32" fill="#FFE066" />
      {/* Sun rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1={700 + 44 * Math.cos((angle * Math.PI) / 180)}
          y1={70 + 44 * Math.sin((angle * Math.PI) / 180)}
          x2={700 + 54 * Math.cos((angle * Math.PI) / 180)}
          y2={70 + 54 * Math.sin((angle * Math.PI) / 180)}
          stroke="#F4D27A"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
      ))}

      {/* === RUSTY THE ROBOT DOG === */}
      <g transform="translate(100, 160)">
        {/* Body */}
        <rect x="0" y="30" width="55" height="40" rx="12" fill="#E8A05C" stroke="#C47A38" strokeWidth="2" />
        {/* Head */}
        <rect x="5" y="0" width="45" height="35" rx="14" fill="#F0B87A" stroke="#C47A38" strokeWidth="2" />
        {/* Eyes */}
        <circle cx="20" cy="14" r="5" fill="white" />
        <circle cx="35" cy="14" r="5" fill="white" />
        <circle cx="21" cy="15" r="3" fill="#2C194A" />
        <circle cx="36" cy="15" r="3" fill="#2C194A" />
        {/* Eye sparkle */}
        <circle cx="19" cy="13" r="1.2" fill="white" />
        <circle cx="34" cy="13" r="1.2" fill="white" />
        {/* Nose */}
        <ellipse cx="27.5" cy="22" rx="4" ry="3" fill="#C47A38" />
        {/* Smile */}
        <path d="M20 26 Q27.5 32 35 26" fill="none" stroke="#C47A38" strokeWidth="1.5" strokeLinecap="round" />
        {/* Antenna/bolt */}
        <circle cx="27.5" cy="-4" r="4" fill="#7C5CBF" stroke="#5A3E99" strokeWidth="1.5" />
        <line x1="27.5" y1="0" x2="27.5" y2="-1" stroke="#5A3E99" strokeWidth="2" />
        {/* Legs */}
        <rect x="6" y="68" width="12" height="18" rx="5" fill="#E8A05C" stroke="#C47A38" strokeWidth="1.5" />
        <rect x="37" y="68" width="12" height="18" rx="5" fill="#E8A05C" stroke="#C47A38" strokeWidth="1.5" />
        {/* Tail */}
        <path d="M55 45 Q68 30 62 50" fill="none" stroke="#C47A38" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* === ASTRO-BUN (bunny in spacesuit) === */}
      <g transform="translate(320, 140)">
        {/* Space helmet */}
        <ellipse cx="30" cy="20" rx="28" ry="26" fill="#D4ECFF" stroke="#7C5CBF" strokeWidth="2" />
        <ellipse cx="30" cy="20" rx="22" ry="20" fill="white" opacity="0.4" />
        {/* Bunny face inside helmet */}
        <ellipse cx="30" cy="22" rx="18" ry="16" fill="#FFD6E8" />
        {/* Ears poking up from helmet */}
        <ellipse cx="20" cy="-10" rx="6" ry="18" fill="#FFD6E8" stroke="#E8A0C0" strokeWidth="1.5" />
        <ellipse cx="40" cy="-10" rx="6" ry="18" fill="#FFD6E8" stroke="#E8A0C0" strokeWidth="1.5" />
        <ellipse cx="20" cy="-10" rx="3" ry="12" fill="#FFB3D1" />
        <ellipse cx="40" cy="-10" rx="3" ry="12" fill="#FFB3D1" />
        {/* Eyes */}
        <circle cx="23" cy="18" r="4" fill="#2C194A" />
        <circle cx="37" cy="18" r="4" fill="#2C194A" />
        <circle cx="22" cy="16" r="1.5" fill="white" />
        <circle cx="36" cy="16" r="1.5" fill="white" />
        {/* Nose */}
        <ellipse cx="30" cy="25" rx="2.5" ry="2" fill="#FF9EC6" />
        {/* Cheeks */}
        <ellipse cx="18" cy="26" rx="4" ry="2.5" fill="#FFB3D1" opacity="0.5" />
        <ellipse cx="42" cy="26" rx="4" ry="2.5" fill="#FFB3D1" opacity="0.5" />
        {/* Mouth */}
        <path d="M26 29 Q30 33 34 29" fill="none" stroke="#E8A0C0" strokeWidth="1.2" strokeLinecap="round" />
        {/* Body (spacesuit) */}
        <rect x="10" y="44" width="40" height="40" rx="14" fill="#B8C8F0" stroke="#7C5CBF" strokeWidth="2" />
        {/* Suit detail */}
        <circle cx="30" cy="56" r="6" fill="#7C5CBF" opacity="0.3" />
        {/* Arms */}
        <ellipse cx="2" cy="58" rx="10" ry="7" fill="#B8C8F0" stroke="#7C5CBF" strokeWidth="1.5" />
        <ellipse cx="58" cy="58" rx="10" ry="7" fill="#B8C8F0" stroke="#7C5CBF" strokeWidth="1.5" />
        {/* Legs */}
        <ellipse cx="20" cy="86" rx="9" ry="8" fill="#B8C8F0" stroke="#7C5CBF" strokeWidth="1.5" />
        <ellipse cx="40" cy="86" rx="9" ry="8" fill="#B8C8F0" stroke="#7C5CBF" strokeWidth="1.5" />
      </g>

      {/* === CAPTAIN BARNACLES (cute fish/sea captain) === */}
      <g transform="translate(540, 170)">
        {/* Body */}
        <ellipse cx="30" cy="40" rx="28" ry="30" fill="#A8D8EA" stroke="#5B9EC4" strokeWidth="2" />
        {/* Captain hat */}
        <rect x="8" y="2" width="44" height="16" rx="8" fill="#2C194A" />
        <rect x="4" y="14" width="52" height="6" rx="3" fill="#3A2562" />
        <circle cx="30" cy="10" r="5" fill="#F4D27A" />
        {/* Eyes */}
        <circle cx="20" cy="32" r="5" fill="white" />
        <circle cx="40" cy="32" r="5" fill="white" />
        <circle cx="21" cy="33" r="3" fill="#2C194A" />
        <circle cx="41" cy="33" r="3" fill="#2C194A" />
        <circle cx="19.5" cy="31.5" r="1.2" fill="white" />
        <circle cx="39.5" cy="31.5" r="1.2" fill="white" />
        {/* Smile */}
        <path d="M20 44 Q30 52 40 44" fill="none" stroke="#5B9EC4" strokeWidth="2" strokeLinecap="round" />
        {/* Fins */}
        <ellipse cx="-2" cy="42" rx="10" ry="6" fill="#A8D8EA" stroke="#5B9EC4" strokeWidth="1.5" />
        <ellipse cx="62" cy="42" rx="10" ry="6" fill="#A8D8EA" stroke="#5B9EC4" strokeWidth="1.5" />
        {/* Tail */}
        <path d="M30 70 Q20 82 10 78 Q22 76 30 70Z" fill="#A8D8EA" stroke="#5B9EC4" strokeWidth="1.5" />
        <path d="M30 70 Q40 82 50 78 Q38 76 30 70Z" fill="#A8D8EA" stroke="#5B9EC4" strokeWidth="1.5" />
      </g>

      {/* Scattered stars */}
      {[
        { x: 60, y: 40, s: 0.6, fill: '#F4D27A' },
        { x: 280, y: 30, s: 0.5, fill: '#FF9EC6' },
        { x: 480, y: 50, s: 0.7, fill: '#F4D27A' },
        { x: 750, y: 120, s: 0.4, fill: '#A8E6CF' },
        { x: 180, y: 80, s: 0.35, fill: '#B8C8F0' },
        { x: 580, y: 25, s: 0.45, fill: '#FFE066' },
      ].map(({ x, y, s, fill }, i) => (
        <polygon
          key={i}
          points="0,-10 3,-3 10,-3 4.5,1.5 6.5,9 0,4.5 -6.5,9 -4.5,1.5 -10,-3 -3,-3"
          fill={fill}
          transform={`translate(${x}, ${y}) scale(${s})`}
          opacity="0.8"
        />
      ))}

      {/* Floating books */}
      <g transform="translate(240, 70) rotate(-12)">
        <rect x="0" y="0" width="24" height="30" rx="3" fill="#FFB3D1" stroke="#E8A0C0" strokeWidth="1.5" />
        <line x1="12" y1="2" x2="12" y2="28" stroke="#E8A0C0" strokeWidth="1" />
        <rect x="3" y="8" width="7" height="2" rx="1" fill="white" opacity="0.6" />
        <rect x="14" y="8" width="7" height="2" rx="1" fill="white" opacity="0.6" />
      </g>
      <g transform="translate(500, 90) rotate(8)">
        <rect x="0" y="0" width="22" height="28" rx="3" fill="#B8C8F0" stroke="#7C5CBF" strokeWidth="1.5" />
        <line x1="11" y1="2" x2="11" y2="26" stroke="#7C5CBF" strokeWidth="1" />
        <rect x="3" y="7" width="6" height="2" rx="1" fill="white" opacity="0.6" />
        <rect x="13" y="7" width="6" height="2" rx="1" fill="white" opacity="0.6" />
      </g>

      {/* Rainbow arc */}
      <path
        d="M50 320 Q200 160 400 180 Q600 200 750 320"
        fill="none"
        stroke="#FFB3D1"
        strokeWidth="4"
        opacity="0.25"
      />
      <path
        d="M50 316 Q200 156 400 176 Q600 196 750 316"
        fill="none"
        stroke="#F4D27A"
        strokeWidth="4"
        opacity="0.2"
      />
      <path
        d="M50 312 Q200 152 400 172 Q600 192 750 312"
        fill="none"
        stroke="#A8E6CF"
        strokeWidth="4"
        opacity="0.18"
      />

      {/* Flowers in grass */}
      {[
        { x: 80, y: 290 },
        { x: 180, y: 295 },
        { x: 350, y: 288 },
        { x: 500, y: 292 },
        { x: 650, y: 285 },
        { x: 720, y: 295 },
      ].map(({ x, y }, i) => (
        <g key={i} transform={`translate(${x}, ${y})`}>
          <line x1="0" y1="0" x2="0" y2="16" stroke="#6DC4A0" strokeWidth="2" />
          {[0, 72, 144, 216, 288].map((angle) => (
            <circle
              key={angle}
              cx={5 * Math.cos((angle * Math.PI) / 180)}
              cy={5 * Math.sin((angle * Math.PI) / 180)}
              r="3.5"
              fill={i % 3 === 0 ? '#FFB3D1' : i % 3 === 1 ? '#F4D27A' : '#B8C8F0'}
              opacity="0.9"
            />
          ))}
          <circle cx="0" cy="0" r="2.5" fill="#FFE066" />
        </g>
      ))}
    </svg>
  );
}
