import type React from "react";
import { BarChart3, DollarSign, PackagePlus, UploadCloud, Users } from "lucide-react";
import { products } from "@/lib/data";
import { Section } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function AdminPage() {
  return (
    <Section eyebrow="Admin" title="A lean control room for digital product operations.">
      <div className="grid gap-4 md:grid-cols-4">
        <AdminMetric label="Revenue" value="$48.2k" icon={<DollarSign />} />
        <AdminMetric label="Orders" value="1,284" icon={<BarChart3 />} />
        <AdminMetric label="Customers" value="8,940" icon={<Users />} />
        <AdminMetric label="Products" value="57" icon={<PackagePlus />} />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <Card className="p-5">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-amber-100"><UploadCloud className="h-5 w-5 text-amber-300" /> Upload product</h2>
          <div className="grid gap-3">
            <Input placeholder="Product title" />
            <Input placeholder="Category" />
            <Input placeholder="Price" />
            <div className="grid min-h-40 place-items-center rounded-lg border border-dashed border-amber-300/20 bg-slate-950/30 p-6 text-center text-sm text-amber-100/60">
              Drop product files, previews, licenses, and documentation.
            </div>
            <Button>Publish product</Button>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="border-b border-amber-300/15 p-5">
            <h2 className="text-xl font-semibold text-amber-100">Manage products</h2>
          </div>
          <div className="divide-y divide-amber-300/15">
            {products.map((product) => (
              <div key={product.slug} className="grid gap-3 p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
                <div>
                  <div className="font-medium text-amber-100">{product.title}</div>
                  <div className="mt-1 text-sm text-amber-100/60">{product.category}</div>
                </div>
                <Badge>{product.badge}</Badge>
                <Button variant="secondary" size="sm">Edit</Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-5">
          <h2 className="text-xl font-semibold text-amber-100">Sales overview</h2>
          <div className="mt-6 flex h-64 items-end gap-3">
            {[34, 52, 47, 72, 65, 86, 78, 94].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-md bg-gradient-to-t from-amber-500 to-amber-300" style={{ height: `${height}%` }} />
            ))}
          </div>
        </Card>
        <Card className="p-5">
          <h2 className="text-xl font-semibold text-amber-100">Customer management</h2>
          {['maya@studio.com', 'andre@creator.co', 'sofia@design.io'].map((email) => (
            <div key={email} className="mt-4 flex items-center justify-between rounded-md border border-amber-300/15 bg-slate-950/35 p-3">
              <span className="text-sm text-amber-100/70">{email}</span>
              <Badge>Active</Badge>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}

function AdminMetric({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between text-amber-300">{icon}</div>
      <div className="mt-5 text-2xl font-semibold text-amber-100">{value}</div>
      <div className="text-sm text-amber-100/60">{label}</div>
    </Card>
  );
}
