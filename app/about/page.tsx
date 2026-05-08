import { Compass, Layers3, Sparkles, LucideIcon } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { stats } from "@/lib/data";

const principles: { title: string; copy: string; Icon: LucideIcon }[] = [
  { title: "Useful before clever", copy: "Every Crelolabs release must create visible progress in a real week.", Icon: Compass },
  { title: "Premium by restraint", copy: "We remove clutter until the system feels obvious, calm, and expensive.", Icon: Sparkles },
  { title: "Built to compound", copy: "Templates, dashboards, and automations are designed to evolve with the buyer.", Icon: Layers3 },
];

export default function AboutPage() {
  return (
    <>
      <Section eyebrow="About Crelolabs" title="We build digital products for people who want life to feel more designed." description="Crelolabs started with a simple belief: the best digital products do not add more noise. They compress expertise into systems that help ambitious people move with clarity.">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-5">
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-white/[.42]">{stat.label}</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Our taste is the product.">
        <div className="grid gap-6 lg:grid-cols-3">
          {principles.map(({ title, copy, Icon }) => (
            <Card key={title} className="p-6">
              <Icon className="h-6 w-6 text-blue-300" />
              <h2 className="mt-5 text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/[.52]">{copy}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}