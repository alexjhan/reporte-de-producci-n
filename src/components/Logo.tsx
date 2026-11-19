const Logo = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="#2563EB" />
    <text x="50" y="72" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="62" fill="#FFFFFF" textAnchor="middle">F</text>
  </svg>
);

export default Logo;
