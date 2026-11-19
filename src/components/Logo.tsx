const Logo = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size * 1.8}
    height={size}
    viewBox="0 0 180 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="180" height="100" rx="16" fill="#DC2626" />
    <text
      x="90"
      y="65"
      fontFamily="Inter, Arial, sans-serif"
      fontWeight="700"
      fontSize="42"
      fill="#FFFFFF"
      textAnchor="middle"
    >
      Nova
    </text>
  </svg>
);

export default Logo;
