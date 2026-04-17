import React from "react";

// Minimal, editorial abaya silhouette SVGs. Used in hero and collections grid.
// Variant controls subtle style differences (sleeve shape, hem flare, neckline).

export const AbayaSilhouette = ({ variant = "classic", className = "", stroke = "#D4AF37", fill = "none" }) => {
  const base = {
    classic: (
      <g>
        {/* Head */}
        <ellipse cx="200" cy="70" rx="32" ry="38" strokeWidth="1" />
        {/* Shoulders & body */}
        <path d="M 120 120 Q 140 115 200 118 Q 260 115 280 120 L 320 560 Q 200 590 80 560 Z" strokeWidth="1.2" />
        {/* Center seam */}
        <line x1="200" y1="118" x2="200" y2="585" strokeWidth="0.5" opacity="0.5" />
        {/* Sleeve seam */}
        <path d="M 120 120 Q 100 280 95 430" strokeWidth="0.8" opacity="0.7" />
        <path d="M 280 120 Q 300 280 305 430" strokeWidth="0.8" opacity="0.7" />
        {/* Subtle embellishment line */}
        <path d="M 165 200 Q 200 195 235 200" strokeWidth="0.5" opacity="0.6" />
      </g>
    ),
    flared: (
      <g>
        <ellipse cx="200" cy="70" rx="30" ry="36" strokeWidth="1" />
        <path d="M 130 130 Q 150 125 200 128 Q 250 125 270 130 L 350 580 Q 200 600 50 580 Z" strokeWidth="1.2" />
        <line x1="200" y1="128" x2="200" y2="595" strokeWidth="0.5" opacity="0.4" />
        <path d="M 130 130 Q 80 320 60 500" strokeWidth="0.8" opacity="0.6" />
        <path d="M 270 130 Q 320 320 340 500" strokeWidth="0.8" opacity="0.6" />
        <path d="M 170 220 L 200 250 L 230 220" strokeWidth="0.6" opacity="0.7" />
      </g>
    ),
    kaftan: (
      <g>
        <ellipse cx="200" cy="70" rx="32" ry="38" strokeWidth="1" />
        {/* Wide sleeves kaftan */}
        <path d="M 110 125 L 60 260 L 110 280 L 130 580 Q 200 595 270 580 L 290 280 L 340 260 L 290 125 Q 250 118 200 120 Q 150 118 110 125 Z" strokeWidth="1.2" />
        <line x1="200" y1="120" x2="200" y2="585" strokeWidth="0.5" opacity="0.4" />
        <circle cx="200" cy="160" r="4" strokeWidth="0.6" opacity="0.8" />
        <circle cx="200" cy="200" r="3" strokeWidth="0.5" opacity="0.7" />
        <circle cx="200" cy="240" r="2.5" strokeWidth="0.5" opacity="0.6" />
      </g>
    ),
    structured: (
      <g>
        <ellipse cx="200" cy="70" rx="30" ry="36" strokeWidth="1" />
        {/* Sharper shoulders */}
        <path d="M 115 118 L 105 145 L 115 560 Q 200 580 285 560 L 295 145 L 285 118 Q 245 112 200 115 Q 155 112 115 118 Z" strokeWidth="1.3" />
        <line x1="200" y1="115" x2="200" y2="572" strokeWidth="0.6" opacity="0.5" />
        <path d="M 115 145 L 95 440" strokeWidth="0.8" opacity="0.6" />
        <path d="M 285 145 L 305 440" strokeWidth="0.8" opacity="0.6" />
        {/* Belt / waist detail */}
        <rect x="140" y="270" width="120" height="8" strokeWidth="0.8" opacity="0.8" />
      </g>
    ),
    editorial: (
      <g>
        <ellipse cx="200" cy="68" rx="28" ry="34" strokeWidth="0.8" />
        {/* Graceful A-line */}
        <path d="M 125 125 Q 150 120 200 122 Q 250 120 275 125 Q 290 330 330 590 Q 200 608 70 590 Q 110 330 125 125 Z" strokeWidth="1" />
        {/* Asymmetric drape */}
        <path d="M 200 122 Q 190 300 170 590" strokeWidth="0.5" opacity="0.5" />
        <path d="M 215 130 Q 240 250 260 400" strokeWidth="0.4" opacity="0.4" />
        {/* Cuff detail */}
        <path d="M 95 440 Q 105 445 115 440" strokeWidth="0.6" opacity="0.8" />
        <path d="M 285 440 Q 295 445 305 440" strokeWidth="0.6" opacity="0.8" />
      </g>
    ),
  };

  return (
    <svg
      viewBox="0 0 400 620"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke={stroke}
      fill={fill}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {base[variant] || base.classic}
    </svg>
  );
};

export default AbayaSilhouette;
