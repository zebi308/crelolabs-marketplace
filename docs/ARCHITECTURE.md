# Crelolabs Production Architecture

## Recommended Stack

- Frontend: Next.js 15 App Router, React, TypeScript, Tailwind CSS, Framer Motion, ShadCN-style primitives.
- Database: Supabase Postgres.
- Auth: Supabase Auth with magic links, OAuth, and optional passkeys.
- Payments: Stripe Checkout or PaymentIntents with webhooks.
- Storage: Supabase Storage or S3-compatible object storage with short-lived signed URLs.
- Email: Resend for transactional email, Customer.io or ConvertKit for lifecycle marketing.
- Analytics: PostHog for product analytics, Stripe Sigma for revenue analysis.

## Database Shape

Core tables:

- `profiles`: id, email, name, avatar_url, role, created_at.
- `products`: id, slug, title, category_id, description, price_cents, status, metadata.
- `product_assets`: id, product_id, storage_key, file_name, file_size, version.
- `orders`: id, user_id, stripe_session_id, total_cents, status, created_at.
- `order_items`: id, order_id, product_id, price_cents.
- `entitlements`: id, user_id, product_id, order_id, revoked_at.
- `reviews`: id, user_id, product_id, rating, body, status.
- `newsletter_subscribers`: id, email, source, created_at.

Use row-level security so customers can only read their own orders, entitlements, and profile data. Admin users can manage products and customers through role claims.

## Secure Digital Downloads

1. User authenticates.
2. Dashboard requests `/api/downloads/[productSlug]`.
3. API verifies entitlement in Postgres.
4. API creates a signed storage URL valid for 5 minutes.
5. Client downloads directly from storage.

Never expose permanent storage URLs for paid products.

## Stripe Flow

1. Client posts cart items to `/api/checkout`.
2. API validates product IDs and creates Stripe Checkout Session.
3. Stripe webhook receives `checkout.session.completed`.
4. Webhook creates order, order items, and entitlements.
5. User dashboard unlocks downloads.

## SEO

- Add unique metadata per product, category, and blog post.
- Generate `sitemap.xml` and `robots.txt`.
- Add Product, Review, FAQ, Breadcrumb, and BlogPosting JSON-LD.
- Keep product copy outcome-focused, not keyword-stuffed.
- Use fast image previews and defer non-critical animation.

## Deployment

1. Create Supabase project and Stripe account.
2. Set environment variables in Vercel.
3. Deploy with Vercel.
4. Configure Stripe webhook endpoint.
5. Enable Supabase RLS policies.
6. Connect a custom domain such as `crelolabs.com`.

Suggested environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://crelolabs.com
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
```
