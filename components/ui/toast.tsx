"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { CheckCircle2 } from "lucide-react";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("crelo-toast", handler);
    return () => window.removeEventListener("crelo-toast", handler);
  }, []);

  return (
    <ToastPrimitives.Provider swipeDirection="right">
      {children}
      <ToastPrimitives.Root
        open={open}
        onOpenChange={setOpen}
        className="fixed bottom-6 right-6 z-[80] flex max-w-sm items-center gap-3 rounded-lg border border-white/10 bg-zinc-950/95 p-4 text-sm text-white shadow-luxe backdrop-blur"
      >
        <CheckCircle2 className="h-5 w-5 text-blue-300" />
        <ToastPrimitives.Title>Saved to your Crelolabs cart</ToastPrimitives.Title>
      </ToastPrimitives.Root>
      <ToastPrimitives.Viewport />
    </ToastPrimitives.Provider>
  );
}

export function showToast() {
  window.dispatchEvent(new Event("crelo-toast"));
}
