export default function Text({ children, size = "", className }) {
  const sizes = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  return <p className={`${sizes[size]} ${className}`}>{children}</p>;
}
