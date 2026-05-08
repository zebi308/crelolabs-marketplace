import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Download, LucideIcon, PlayCircle, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";
import { categories, faqs, products, stats, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/section";
import { Storefront } from "@/components/storefront";
import { Input } from "@/components/ui/input";

const credibility: { title: string; copy: string; Icon: LucideIcon }[] = [
  { title: "Instant access", copy: "Secure downloads unlock immediately after purchase.", Icon: Download },
  { title: "Built for outcomes", copy: "Every resource maps to measurable lifestyle or business progress.", Icon: CheckCircle2 },
  { title: "Stripe-ready commerce", copy: "Checkout, entitlements, and order flow are structured for production.", Icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <>
      <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <Badge className="mb-5 border-blue-300/20 bg-blue-400/10 text-blue-100">
            <Sparkles className="mr-2 h-3.5 w-3.5" /> Digital systems designed for ambitious people
          </Badge>
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Upgrade your workflow, creativity, health, and income.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[.58]">
            Crelolabs builds premium digital resources for modern builders: AI automations, travel systems, creator templates, money dashboards, and lifestyle protocols that feel beautiful to use.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/store">Explore products <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/product/ai-operator-os"><PlayCircle className="h-4 w-4" /> Preview flagship</Link>
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/[.08] bg-white/5 p-3">
                <div className="text-xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-xs leading-4 text-white/[.42]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Card className="relative overflow-hidden p-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
          <div className="relative rounded-md border border-white/10 bg-black/40 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-white">Crelolabs Command Shelf</span>
              <Badge>Live catalog</Badge>
            </div>
            <div className="grid gap-3">
              {products.slice(0, 4).map((product, index) => (
                <Link key={product.slug} href={`/product/${product.slug}`} className="group grid grid-cols-[44px_1fr_auto] items-center gap-3 rounded-md border border-white/[.08] bg-white/[0.045] p-3 transition hover:bg-white/[.09]">
                  <div className={`grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br ${product.accent}`}>
                    {index === 0 ? <Bot className="h-5 w-5 text-white" /> : <Zap className="h-5 w-5 text-white" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{product.title}</div>
                    <div className="text-xs text-white/[.42]">{product.outcome}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/[.32] transition group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <Section eyebrow="Featured products" title="Built like premium software. Delivered as instant digital leverage." description="Every product is designed around a practical outcome, polished enough to trust, and structured so you can implement quickly.">
        <Storefront mode="featured" />
      </Section>

      <Section eyebrow="Categories" title="A marketplace for the whole modern operating system.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} href="/store" className="rounded-lg border border-white/10 bg-white/[0.045] p-4 transition hover:-translate-y-1 hover:bg-white/[.08]">
                <Icon className="h-5 w-5 text-blue-300" />
                <div className="mt-4 font-medium text-white">{category.name}</div>
                <div className="mt-1 text-sm text-white/40">{category.count} resources</div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Proof" title="Trusted by people building sharper lives and leaner businesses.">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="p-6">
              <div className="mb-4 flex gap-1 text-blue-300">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-sm leading-6 text-white/[.68]">"{item.quote}"</p>
              <div className="mt-5 text-sm font-medium text-white">{item.name}</div>
              <div className="text-xs text-white/[.38]">{item.role}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Credibility" title="Premium resources with serious operational taste.">
        <div className="grid gap-5 lg:grid-cols-3">
          {credibility.map(({ title, copy, Icon }) => (
            <Card key={title} className="p-6">
              <Icon className="h-6 w-6 text-blue-300" />
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/[.52]">{copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Quiet answers before you buy.">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <Card key={question} className="p-5">
              <h3 className="font-medium text-white">{question}</h3>
              <p className="mt-2 text-sm leading-6 text-white/[.52]">{answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="rounded-lg border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.035] p-6 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <Badge className="mb-4">Newsletter</Badge>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Get the next premium system before it becomes obvious.</h2>
              <p className="mt-4 max-w-2xl text-white/[.55]">Monthly drops on AI, money, fitness, travel, productivity, and creator leverage. No noisy growth theater.</p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="you@company.com" aria-label="Email address" />
              <Button type="submit">Join list</Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}