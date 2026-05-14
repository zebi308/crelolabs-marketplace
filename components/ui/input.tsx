import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-amber-300/20 bg-slate-950/40 px-4 py-2 text-sm text-amber-100 outline-none transition placeholder:text-amber-100/45 focus:border-amber-400/70 focus:ring-2 focus:ring-amber-300/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
