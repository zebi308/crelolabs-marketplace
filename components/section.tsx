import { cn } from "@/lib/utils";
import type React from "react";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", className)}>
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">{eyebrow}</p>}
          {title && <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>}
          {description && <p className="mt-4 text-base leading-7 text-white/[.56] md:text-lg">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
