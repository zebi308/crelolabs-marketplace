import Link from "next/link";
import { Mail, ShieldCheck, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[.08] bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_.8fr_.8fr_.8fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-white text-sm font-black text-black">C</span>
            <span className="font-semibold text-white">Crelolabs</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/[.56]">
            Digital systems designed for ambitious people upgrading their workflow, creativity, health, travel, and income.
          </p>
          <div className="mt-5 flex gap-3 text-xs text-white/[.45]">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Secure downloads</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Premium support</span>
          </div>
        </div>
        <FooterColumn title="Explore" links={[["Store", "/store"], ["Best sellers", "/store"], ["Blog", "/blog"], ["About", "/about"]]} />
        <FooterColumn title="Account" links={[["Dashboard", "/dashboard"], ["Checkout", "/checkout"], ["Contact", "/contact"], ["Admin", "/admin"]]} />
        <FooterColumn title="Legal" links={[["Privacy", "/legal/privacy"], ["Terms", "/legal/terms"]]} />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/[.08] px-4 py-5 text-xs text-white/[.38] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <span>© 2026 Crelolabs. Premium digital products for modern builders.</span>
        <span className="inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> hello@crelolabs.com</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium text-white">{title}</h3>
      <div className="space-y-3">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="block text-sm text-white/[.48] transition hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
