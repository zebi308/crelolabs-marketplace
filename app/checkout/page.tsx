"use client";

import { CreditCard, Lock, ShoppingBag, Tag } from "lucide-react";
import { products } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function CheckoutPage() {
  const cart = products.slice(0, 2);
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = 29;
  const total = subtotal - discount;

  return (
    <Section eyebrow="Checkout" title="A focused checkout experience built for digital products.">
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <div className="space-y-6">
          <Card className="p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-amber-100"><ShoppingBag className="h-5 w-5 text-amber-300" /> Cart</h2>
            <div className="space-y-3">
              {cart.map((product) => (
                <div key={product.slug} className="grid grid-cols-[56px_1fr_auto] items-center gap-3 rounded-md border border-amber-300/15 bg-slate-950/35 p-3">
                  <div className={`h-14 w-14 rounded-md bg-gradient-to-br ${product.accent}`} />
                  <div>
                    <div className="font-medium text-amber-100">{product.title}</div>
                    <div className="text-sm text-amber-100/60">Instant download</div>
                  </div>
                  <div className="font-semibold text-amber-100">{formatCurrency(product.price)}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-amber-100"><CreditCard className="h-5 w-5 text-amber-300" /> Payment</h2>
            <div className="grid gap-4">
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Card number 4242 4242 4242 4242" inputMode="numeric" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="MM / YY" />
                <Input placeholder="CVC" />
              </div>
              <p className="text-xs text-amber-100/60">Stripe-ready UI. In production, mount Stripe Elements here and create PaymentIntents through a secure API route.</p>
            </div>
          </Card>
        </div>
        <Card className="h-fit p-5 lg:sticky lg:top-24">
          <h2 className="text-xl font-semibold text-white">Order summary</h2>
          <div className="mt-5 flex gap-2">
            <Input placeholder="CRELOLAUNCH" />
            <Button variant="secondary"><Tag className="h-4 w-4" /> Apply</Button>
          </div>
          <div className="mt-6 space-y-3 text-sm">
            <Row label="Subtotal" value={formatCurrency(subtotal)} />
            <Row label="Launch discount" value={`-${formatCurrency(discount)}`} />
            <Row label="Tax" value="Calculated by Stripe" />
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-amber-300/20 pt-5 text-lg font-semibold text-amber-100">
            <span>Total</span><span>{formatCurrency(total)}</span>
          </div>
          <Button className="mt-6 w-full" size="lg"><Lock className="h-4 w-4" /> Complete secure purchase</Button>
          <div className="mt-4 flex justify-center"><Badge>Downloads unlock instantly</Badge></div>
        </Card>
      </div>
    </Section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between text-amber-100/70"><span>{label}</span><span>{value}</span></div>;
}
