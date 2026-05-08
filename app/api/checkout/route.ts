import { NextResponse } from "next/server";
import { z } from "zod";
import { products } from "@/lib/data";

const checkoutSchema = z.object({
  productSlugs: z.array(z.string()).min(1),
  discountCode: z.string().optional()
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid checkout payload." }, { status: 400 });
  }

  const lineItems = products.filter((product) => parsed.data.productSlugs.includes(product.slug));
  const amount = lineItems.reduce((sum, product) => sum + product.price, 0);

  return NextResponse.json({
    ok: true,
    amount,
    currency: "usd",
    lineItems,
    stripe: "Create a Stripe PaymentIntent or Checkout Session here using server-side Stripe SDK."
  });
}
