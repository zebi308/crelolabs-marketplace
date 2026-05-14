import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function BlogPage() {
  return (
    <Section eyebrow="Journal" title="Intelligent notes on better systems, sharper taste, and modern digital leverage." description="SEO-friendly essays for people building healthier bodies, calmer workflows, richer travel, stronger finances, and better creator businesses.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Card key={post.slug} className="group overflow-hidden">
            <div className={`h-48 bg-gradient-to-br ${index % 2 ? "from-amber-500 to-amber-300" : "from-amber-400 to-amber-200"}`} />
            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <Badge>{post.category}</Badge>
                <span className="text-xs text-white/[.38]">{post.read}</span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-white">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Practical strategy, clean frameworks, and product-minded thinking for modern builders.
              </p>
              <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-200">
                Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
