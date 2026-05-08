import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <Badge>{post.category}</Badge>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-white/[.58]">
          Crelolabs essays are written for people who want fewer scattered tactics and more durable operating systems.
        </p>
        <div className="mt-10 max-w-none space-y-5 text-white/[.60]">
          <h2>The operating principle</h2>
          <p>
            Modern progress is rarely blocked by ambition. It is blocked by unmanaged loops: repeated choices, unclear dashboards, fragmented tools, and systems that depend too heavily on mood.
          </p>
          <h2>A better way to build</h2>
          <p>
            Start with the outcome, reduce the number of decisions required to reach it, then design a rhythm that makes useful behavior easier to repeat.
          </p>
          <h2>What to implement this week</h2>
          <p>
            Pick one workflow, make its inputs visible, document the next five actions, and add a weekly review so the system improves instead of quietly decaying.
          </p>
        </div>
      </article>
    </Section>
  );
}
