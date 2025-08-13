export const DollarIcon = () => {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      {/* Vertical line */}
      <path
        d="M12 2v20"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* S-shaped dollar curve */}
      <path
        d="M16 8c0-2-1.9-3-4-3s-4 1-4 3c0 2 2 2.5 4 3s4 1 4 3-2 3-4 3-4-1-4-3"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};