"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, CheckCircle2, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { showToast } from "@/components/ui/toast";

export function ProductPreview({ product, onClose }: { product: Product | null; onClose: () => void }) {
  return (
    <Dialog.Root open={Boolean(product)} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[71] max-h-[88vh] w-[calc(100vw-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg border border-white/10 bg-zinc-950 p-5 shadow-luxe">
          {product && (
            <>
              <div className={`h-56 rounded-md bg-gradient-to-br ${product.accent}`} />
              <Dialog.Title className="mt-5 text-2xl font-semibold text-white">{product.title}</Dialog.Title>
              <Dialog.Description className="mt-2 text-sm leading-6 text-white/[.58]">{product.description}</Dialog.Description>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.includes.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-md border border-white/[.08] bg-white/5 p-3 text-sm text-white/70">
                    <CheckCircle2 className="h-4 w-4 text-blue-300" /> {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-3xl font-semibold text-white">{formatCurrency(product.price)}</div>
                <Button onClick={showToast}>
                  <ShoppingBag className="h-4 w-4" /> Add to cart
                </Button>
              </div>
            </>
          )}
          <Dialog.Close className="absolute right-4 top-4 rounded-md bg-black/40 p-2 text-white/60 hover:text-white" aria-label="Close">
            <X className="h-4 w-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
