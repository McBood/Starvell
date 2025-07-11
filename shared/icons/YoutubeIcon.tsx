export const YoutubeIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7041_996)">
      <ellipse cx="22" cy="12" rx="12" ry="5" fill="#FF5C5C" />
      <foreignObject x="-40" y="-40" width="124" height="124">
        <div
          style={{
            backdropFilter: "blur(20px)",
            clipPath: "url(#bgblur_1_7041_996_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <g filter="url(#filter0_i_7041_996)" data-figma-bg-blur-radius="40">
        <circle
          cx="22"
          cy="22"
          r="22"
          transform="matrix(1 0 0 -1 0 44)"
          fill="white"
          fillOpacity="0.04"
        />
        <circle
          cx="22"
          cy="22"
          r="22"
          transform="matrix(1 0 0 -1 0 44)"
          fill="url(#paint0_radial_7041_996)"
          fillOpacity="0.5"
          style={{ mixBlendMode: "soft-light" }}
        />
        <circle
          cx="22"
          cy="22"
          r="21"
          transform="matrix(1 0 0 -1 0 44)"
          stroke="url(#paint1_linear_7041_996)"
          strokeWidth="2"
          style={{ mixBlendMode: "soft-light" }}
        />
      </g>
      <path
        d="M27.8463 14H16.1537C13.8597 14 12 16.1025 12 18.696V25.304C12 27.8975 13.8597 30 16.1537 30H27.8463C30.1403 30 32 27.8975 32 25.304V18.696C32 16.1025 30.1403 14 27.8463 14ZM25.0371 22.3215L19.5681 25.2704C19.4224 25.3489 19.2541 25.2288 19.2541 25.0463V18.9643C19.2541 18.7792 19.4268 18.6592 19.5729 18.7429L25.0418 21.8761C25.2044 21.9692 25.2016 22.2328 25.0371 22.3215Z"
        fill="#FF5C5C"
      />
    </g>
    <rect
      x="0.5"
      y="0.5"
      width="43"
      height="43"
      rx="21.5"
      stroke="url(#paint2_linear_7041_996)"
      strokeOpacity="0.32"
    />
    <defs>
      <filter
        id="filter0_i_7041_996"
        x="-40"
        y="-40"
        width="124"
        height="124"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="5.6"
          operator="erode"
          in="SourceAlpha"
          result="effect1_innerShadow_7041_996"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="6.4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.27451 0 0 0 0 0.501961 0 0 0 0 0.760784 0 0 0 0.04 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_7041_996"
        />
      </filter>
      <clipPath id="bgblur_1_7041_996_clip_path" transform="translate(40 40)">
        <circle cx="22" cy="22" r="22" transform="matrix(1 0 0 -1 0 44)" />
      </clipPath>
      <radialGradient
        id="paint0_radial_7041_996"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(28.7791 14.7093) rotate(103.031) scale(30.0649)"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.49" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_7041_996"
        x1="14.7093"
        y1="0"
        x2="14.7093"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0.49" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_7041_996"
        x1="22"
        y1="0"
        x2="22"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5C5C" />
        <stop offset="1" stopColor="#FF5C5C" stopOpacity="0.52" />
      </linearGradient>
      <clipPath id="clip0_7041_996">
        <rect width="44" height="44" rx="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
