import { Section } from "@/components/section";

export default function TermsPage() {
  return (
    <Section eyebrow="Legal" title="Terms & Conditions">
      <div className="max-w-3xl space-y-6 text-sm leading-7 text-white/[.58]">
        <p>By purchasing from Crelolabs, customers receive a license to access and use the purchased digital product according to the license terms shown at checkout and on the product page.</p>
        <p>Digital downloads are delivered instantly. Refund handling should be clear, fair, and product-specific, especially where files or automation templates have already been accessed.</p>
        <p>Products may not be resold, redistributed, sublicensed, or repackaged without written permission from Crelolabs. Business and client-use rights should be defined per product.</p>
      </div>
    </Section>
  );
}
