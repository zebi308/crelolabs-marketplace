import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Connect to Resend, ConvertKit, or Customer.io for production email capture.",
    email: parsed.data.email
  });
}
