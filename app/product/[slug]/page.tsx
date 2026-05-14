import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Download, ShieldCheck, Star } from "lucide-react";
import { Metadata } from "next";
import { products } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return {
    title: product?.title ?? "Product",
    description: product?.description
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).concat(products.filter((item) => item.slug !== product.slug)).slice(0, 3);

  return (
    <>
      <Section className="pb-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <div className={`min-h-[420px] rounded-lg border border-amber-300/15 bg-gradient-to-br ${product.accent} p-6 shadow-luxe`}>
              <div className="flex justify-between">
                <Badge className="border-amber-300/20 bg-slate-950/40 text-amber-100">{product.badge}</Badge>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/40 px-3 py-1 text-sm text-amber-100"><Star className="h-4 w-4 fill-amber-300 text-amber-300" /> {product.rating}</span>
              </div>
              <div className="mt-44 max-w-xl">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-100/70">{product.category}</p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-amber-100 md:text-6xl">{product.title}</h1>
              </div>
            </div>
          </div>
          <Card className="p-6 lg:sticky lg:top-24">
            <h2 className="text-2xl font-semibold text-white">{product.outcome}</h2>
            <p className="mt-4 leading-7 text-amber-100/70">{product.description}</p>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-4xl font-semibold text-amber-100">{formatCurrency(product.price)}</span>
              {product.compareAt && <span className="pb-1 text-amber-100/45 line-through">{formatCurrency(product.compareAt)}</span>}
            </div>
            <div className="mt-6 grid gap-3">
              <Button size="lg" asChild><Link href="/checkout">Buy now <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button variant="secondary" size="lg"><Download className="h-4 w-4" /> Save preview</Button>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-amber-100/70">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-300" /> Secure checkout and instant entitlement</span>
              <span className="inline-flex items-center gap-2"><Download className="h-4 w-4 text-amber-300" /> Re-download from dashboard any time</span>
            </div>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Inside" title="Everything included to move from interest to implementation.">
        <div className="grid gap-4 md:grid-cols-2">
          {product.includes.map((item) => (
            <Card key={item} className="flex items-center gap-3 p-4 text-amber-100/70">
              <CheckCircle2 className="h-5 w-5 text-amber-300" /> {item}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Benefits" title="Designed for momentum, not decoration.">
        <div className="grid gap-5 md:grid-cols-3">
          {product.benefits.map((benefit) => (
            <Card key={benefit} className="p-6">
              <h3 className="text-lg font-semibold text-amber-100">{benefit}</h3>
              <p className="mt-3 text-sm leading-6 text-amber-100/60">A polished system that keeps the next action visible and the setup friction low.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Screenshots" title="A preview of the product experience.">
        <div className="grid gap-4 md:grid-cols-3">
          {["Command dashboard", "Implementation map", "Resource vault"].map((label, index) => (
            <div key={label} className={`min-h-64 rounded-lg border border-amber-300/15 bg-gradient-to-br ${product.accent} p-4`}>
              <div className="rounded-md border border-amber-300/20 bg-slate-950/30 p-4 text-sm text-amber-100/80">{label}</div>
              <div className="mt-16 h-2 rounded-full bg-amber-300/25" style={{ width: `${80 - index * 14}%` }} />
              <div className="mt-3 h-2 rounded-full bg-amber-300/20" style={{ width: `${56 + index * 10}%` }} />
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Reviews" title={`${product.reviews} buyers, ${product.rating} average rating.`}>
        <div className="grid gap-5 md:grid-cols-3">
          {["Sharper than any template pack I have bought.", "The setup felt premium and oddly calming.", "Useful on day one, deeper by week two."].map((quote) => (
            <Card key={quote} className="p-5">
              <div className="mb-3 flex gap-1 text-amber-300">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-sm leading-6 text-amber-100/70">“{quote}”</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Related" title="Other systems that pair well.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => <ProductCard key={item.slug} product={item} />)}
        </div>
      </Section>
    </>
  );
}
