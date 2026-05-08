"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, Product, products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { ProductPreview } from "@/components/product-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function Storefront({ mode = "full" }: { mode?: "full" | "featured" }) {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [preview, setPreview] = useState<Product | null>(null);

  const visible = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = active === "All" || product.category === active;
      const text = `${product.title} ${product.description} ${product.tags.join(" ")}`.toLowerCase();
      const queryMatch = text.includes(query.toLowerCase());
      return categoryMatch && queryMatch && (mode === "full" || product.featured);
    });
  }, [active, query, mode]);

  return (
    <div>
      {mode === "full" && (
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/[.35]" />
            <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search AI systems, travel guides, finance tools..." className="pl-10" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {["All", ...categories.map((category) => category.name)].map((category) => (
              <Button
                key={category}
                variant={active === category ? "default" : "secondary"}
                size="sm"
                className={cn("shrink-0", active === category && "shadow-glow")}
                onClick={() => setActive(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} onPreview={setPreview} />
        ))}
      </div>
      {visible.length === 0 && (
        <div className="rounded-lg border border-dashed border-white/[.14] p-12 text-center">
          <p className="text-lg font-medium text-white">No matching systems yet.</p>
          <p className="mt-2 text-sm text-white/[.48]">Try a broader search or reset the category filter.</p>
        </div>
      )}
      <ProductPreview product={preview} onClose={() => setPreview(null)} />
    </div>
  );
}
