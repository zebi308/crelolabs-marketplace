import { Mail, MessageSquare, Send } from "lucide-react";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Tell us what you are building. We will point you toward the right system." description="For support, licensing, partnerships, or custom digital product requests.">
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <Card className="p-5">
          <form className="grid gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Topic" />
            <textarea className="min-h-40 rounded-md border border-amber-300/20 bg-slate-950/50 p-4 text-sm text-amber-100 outline-none placeholder:text-amber-100/45 focus:border-amber-400/70" placeholder="What can we help with?" />
            <Button type="submit"><Send className="h-4 w-4" /> Send message</Button>
          </form>
        </Card>
        <div className="space-y-4">
          <Card className="p-5">
            <Mail className="h-6 w-6 text-amber-300" />
            <h2 className="mt-4 font-semibold text-amber-100">Support</h2>
            <p className="mt-2 text-sm text-amber-100/60">hello@crelolabs.com</p>
          </Card>
          <Card className="p-5">
            <MessageSquare className="h-6 w-6 text-amber-300" />
            <h2 className="mt-4 font-semibold text-amber-100">Response window</h2>
            <p className="mt-2 text-sm text-amber-100/60">Most messages receive a thoughtful reply within one business day.</p>
          </Card>
        </div>
      </div>
    </Section>
  );
}
