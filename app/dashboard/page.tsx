import { Bookmark, Download, Settings, UserRound } from "lucide-react";
import { products } from "@/lib/data";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const purchased = products.slice(0, 4);
  return (
    <Section eyebrow="Dashboard" title="Your Crelolabs library, downloads, and settings.">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <Card className="h-fit p-4">
          {[
            ["Purchased", Download],
            ["Saved items", Bookmark],
            ["Profile", UserRound],
            ["Settings", Settings]
          ].map(([label, Icon]) => (
            <button key={String(label)} className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-sm text-white/[.62] transition hover:bg-white/[.08] hover:text-white">
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </Card>
        <div className="space-y-6">
          <Card className="p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Welcome back, Alex</h2>
                <p className="mt-1 text-sm text-white/[.48]">4 products owned, 2 saved items, 1 update waiting.</p>
              </div>
              <Button>Update profile</Button>
            </div>
          </Card>
          <div className="grid gap-4">
            {purchased.map((product) => (
              <Card key={product.slug} className="grid gap-4 p-4 md:grid-cols-[64px_1fr_auto] md:items-center">
                <div className={`h-16 w-16 rounded-md bg-gradient-to-br ${product.accent}`} />
                <div>
                  <div className="font-medium text-white">{product.title}</div>
                  <p className="mt-1 text-sm text-white/[.48]">{product.description}</p>
                  <div className="mt-2 flex gap-2"><Badge>License active</Badge><Badge>v2.1</Badge></div>
                </div>
                <Button variant="secondary"><Download className="h-4 w-4" /> Download</Button>
              </Card>
            ))}
          </div>
          <Card className="p-5">
            <h3 className="font-semibold text-white">Beautiful empty state</h3>
            <p className="mt-2 text-sm text-white/50">Saved products will appear here once you bookmark systems from the store.</p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
