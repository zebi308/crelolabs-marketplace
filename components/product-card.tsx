"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, ShoppingBag, Star } from "lucide-react";
import { Product } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { showToast } from "@/components/ui/toast";

export function ProductCard({ product, onPreview }: { product: Product; onPreview?: (product: Product) => void }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-lg border border-amber-300/20 bg-slate-950/60 p-4 shadow-luxe backdrop-blur-xl"
    >
      <div className={`relative mb-4 h-44 overflow-hidden rounded-md bg-gradient-to-br ${product.accent}`}>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.24),transparent_38%),radial-gradient(circle_at_30%_20%,rgba(255,255,255,.34),transparent_26%)]" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge className="border-amber-300/20 bg-slate-950/60 text-amber-100">{product.badge}</Badge>
          <h3 className="mt-3 line-clamp-2 text-xl font-semibold tracking-tight text-amber-100">{product.title}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Badge>{product.category}</Badge>
        <span className="inline-flex items-center gap-1 text-sm text-amber-100/80">
          <Star className="h-4 w-4 fill-amber-300 text-amber-300" /> {product.rating}
        </span>
      </div>
      <p className="mt-4 line-clamp-2 min-h-[48px] text-sm leading-6 text-amber-100/60">{product.description}</p>
      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <div className="text-2xl font-semibold text-white">{formatCurrency(product.price)}</div>
          {product.compareAt && <div className="text-xs text-white/[.38] line-through">{formatCurrency(product.compareAt)}</div>}
        </div>
        <div className="flex gap-2">
          {onPreview && (
            <Button variant="secondary" size="icon" aria-label="Preview product" onClick={() => onPreview(product)}>
              <Eye className="h-4 w-4" />
            </Button>
          )}
          <Button size="icon" aria-label="Add to cart" onClick={showToast}>
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Link href={`/product/${product.slug}`} className="absolute inset-x-0 top-0 h-44" aria-label={`View ${product.title}`} />
    </motion.article>
  );
}
