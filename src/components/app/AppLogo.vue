<template>
  <svg
    width="220"
    height="64"
    viewBox="0 0 220 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Sun -->
    <circle
      cx="28"
      cy="26"
      r="12"
      fill="#FDB813"
    />
    <!-- Sun rays -->
    <g
      stroke="#FDB813"
      stroke-width="2"
      stroke-linecap="round"
    >
      <line
        x1="28"
        y1="8"
        x2="28"
        y2="2"
      />
      <line
        x1="28"
        y1="50"
        x2="28"
        y2="56"
      />
      <line
        x1="10"
        y1="26"
        x2="4"
        y2="26"
      />
      <line
        x1="46"
        y1="26"
        x2="52"
        y2="26"
      />
    </g>

    <!-- Cloud -->
    <path
      d="M20 40c0-6 5-10 11-10 2 0 4 .5 6 1.5 2-3 5-5 9-5 6 0 11 5 11 11 4 0 7 3 7 7s-3 7-7 7H27c-4 0-7-3-7-7s3-7 7-7z"
      fill="#4F7FFF"
    />

    <!-- Text -->
    <text
      x="80"
      y="42"
      font-family="Inter, system-ui, sans-serif"
      font-size="28"
      font-weight="600"
      fill="#1A1A1A"
    >
      Weather
    </text>
  </svg>
</template>