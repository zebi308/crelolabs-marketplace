import { NextResponse } from "next/server";
import { products } from "@/lib/data";

type Props = { params: Promise<{ productSlug: string }> };

export async function GET(_request: Request, { params }: Props) {
  const { productSlug } = await params;
  const product = products.find((item) => item.slug === productSlug);

  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    product: product.title,
    downloadUrl: "https://signed-storage.example.com/product-file.zip",
    expiresIn: 300,
    note: "Production should verify user entitlement, then return a short-lived Supabase Storage or S3 signed URL."
  });
}
