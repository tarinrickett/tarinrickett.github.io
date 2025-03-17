'use client';

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="tag rounded-lg bg-canvas border-1 border-base px-2 py-1 text-sm">{children}</span>
  );
}
