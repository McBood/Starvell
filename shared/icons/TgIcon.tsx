export const TelegramIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_7041_984)">
      <ellipse cx="22" cy="12" rx="12" ry="5" fill="#23A5E6" />
      <foreignObject x="-40" y="-40" width="124" height="124">
        <div
          style={{
            backdropFilter: "blur(20px)",
            clipPath: "url(#bgblur_1_7041_984_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <g filter="url(#filter0_i_7041_984)" data-figma-bg-blur-radius="40">
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
          fill="url(#paint0_radial_7041_984)"
          fillOpacity="0.5"
          style={{ mixBlendMode: "soft-light" }}
        />
        <circle
          cx="22"
          cy="22"
          r="21"
          transform="matrix(1 0 0 -1 0 44)"
          stroke="url(#paint1_linear_7041_984)"
          strokeWidth="2"
          style={{ mixBlendMode: "soft-light" }}
        />
      </g>
      <path
        d="M30.9832 15.3815C31.139 14.4609 30.1817 13.7343 29.2865 14.0937L11.456 21.2512C10.814 21.5089 10.861 22.3981 11.5268 22.5919L15.2039 23.6625C15.9057 23.8669 16.6656 23.7611 17.2785 23.3741L25.5687 18.1375C25.8187 17.9795 26.0912 18.3046 25.8776 18.5058L19.9101 24.131C19.3312 24.6767 19.4461 25.6014 20.1425 26.0006L26.8237 29.8312C27.5731 30.2608 28.5371 29.8293 28.6772 29.0013L30.9832 15.3815Z"
        fill="#37BBFE"
      />
    </g>
    <rect
      x="0.5"
      y="0.5"
      width="43"
      height="43"
      rx="21.5"
      stroke="url(#paint2_linear_7041_984)"
      strokeOpacity="0.32"
    />
    <defs>
      <filter
        id="filter0_i_7041_984"
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
          result="effect1_innerShadow_7041_984"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="6.4" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.137255 0 0 0 0 0.647059 0 0 0 0 0.901961 0 0 0 0.04 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_7041_984"
        />
      </filter>
      <clipPath id="bgblur_1_7041_984_clip_path" transform="translate(40 40)">
        <circle cx="22" cy="22" r="22" transform="matrix(1 0 0 -1 0 44)" />
      </clipPath>
      <radialGradient
        id="paint0_radial_7041_984"
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
        id="paint1_linear_7041_984"
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
        id="paint2_linear_7041_984"
        x1="22"
        y1="0"
        x2="22"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#23A5E6" />
        <stop offset="1" stopColor="#23A5E6" stopOpacity="0.52" />
      </linearGradient>
      <clipPath id="clip0_7041_984">
        <rect width="44" height="44" rx="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
