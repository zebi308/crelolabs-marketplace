import { Metadata } from "next";
import type React from "react";
import { Flame, Star, TrendingUp } from "lucide-react";
import { Storefront } from "@/components/storefront";
import { Section } from "@/components/section";
import { products } from "@/lib/data";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Store",
  description: "Browse premium Crelolabs digital products, AI automations, travel guides, finance systems, and creator templates."
};

export default function StorePage() {
  return (
    <>
      <Section eyebrow="Store" title="Premium digital products for the life you are building." description="Search the full Crelolabs catalog, filter by category, preview products, and find systems built for fast implementation.">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Metric icon={<Star className="h-5 w-5" />} label="Featured" value={`${products.filter((p) => p.featured).length} systems`} />
          <Metric icon={<Flame className="h-5 w-5" />} label="Best sellers" value={`${products.filter((p) => p.bestseller).length} products`} />
          <Metric icon={<TrendingUp className="h-5 w-5" />} label="Trending" value={`${products.filter((p) => p.trending).length} launches`} />
        </div>
        <Storefront />
      </Section>
    </>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <span className="grid h-11 w-11 place-items-center rounded-md bg-blue-400/10 text-blue-200">{icon}</span>
      <span>
        <span className="block text-sm text-white/[.42]">{label}</span>
        <span className="font-semibold text-white">{value}</span>
      </span>
    </Card>
  );
}
