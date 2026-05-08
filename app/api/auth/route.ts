import { NextResponse } from "next/server";
import { z } from "zod";

const authSchema = z.object({
  email: z.string().email(),
  intent: z.enum(["signin", "signup"]).default("signin")
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = authSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid authentication payload." }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Wire this route to Supabase Auth magic links or OAuth providers.",
    user: { email: parsed.data.email, intent: parsed.data.intent }
  });
}
