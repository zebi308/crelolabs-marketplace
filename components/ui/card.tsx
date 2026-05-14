import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border border-amber-300/15 bg-slate-950/70 shadow-luxe backdrop-blur-xl", className)}
      {...props}
    />
  );
}
