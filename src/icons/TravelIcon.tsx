export const TravelIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Train body */}
      <rect
        x="4"
        y="3"
        width="16"
        height="14"
        rx="2"
        ry="2"
        stroke="#3b82f6"
        strokeWidth="2"
      />
      {/* Windows */}
      <line x1="8" y1="7" x2="10" y2="7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="7" x2="16" y2="7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      {/* Wheels */}
      <circle cx="8" cy="17.5" r="1.5" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="16" cy="17.5" r="1.5" stroke="#3b82f6" strokeWidth="2" />
      {/* Tracks */}
      <line x1="2" y1="21" x2="8" y2="21" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="21" x2="22" y2="21" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};