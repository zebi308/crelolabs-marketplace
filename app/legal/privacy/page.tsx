import { Section } from "@/components/section";

export default function PrivacyPage() {
  return (
    <Section eyebrow="Legal" title="Privacy Policy">
      <div className="max-w-3xl space-y-6 text-sm leading-7 text-white/[.58]">
        <p>Crelolabs collects account, purchase, support, and analytics data needed to deliver digital products, secure downloads, improve the marketplace, and provide customer support.</p>
        <p>Payment details should be processed by Stripe. Crelolabs should store order references, entitlement records, and non-sensitive customer metadata, not raw card data.</p>
        <p>Customers may request export, correction, or deletion of personal data by contacting hello@crelolabs.com. Some order records may be retained for tax, fraud prevention, and legal compliance.</p>
      </div>
    </Section>
  );
}
