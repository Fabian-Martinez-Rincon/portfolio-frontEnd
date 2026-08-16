function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 ${filled ? "text-(--gold)" : "text-(--line-strong)"}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m10 1.5 2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.5-4.1 6-.7Z" />
    </svg>
  );
}

export function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className ?? ""}`} role="img" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rating} />
      ))}
    </div>
  );
}
