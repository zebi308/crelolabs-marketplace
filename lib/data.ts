import {
  Activity,
  Bot,
  BriefcaseBusiness,
  Camera,
  Clapperboard,
  Compass,
  CreditCard,
  Network,
  Plane,
  Sparkles,
  Workflow
} from "lucide-react";

export type Product = {
  slug: string;
  title: string;
  category: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  badge: string;
  tags: string[];
  description: string;
  outcome: string;
  featured?: boolean;
  bestseller?: boolean;
  trending?: boolean;
  includes: string[];
  benefits: string[];
  accent: string;
};

export const categories = [
  { name: "Fitness coaching", icon: Activity, count: 18 },
  { name: "Minimal travel", icon: Compass, count: 12 },
  { name: "Travel itineraries", icon: Plane, count: 24 },
  { name: "Photography", icon: Camera, count: 15 },
  { name: "Video editing", icon: Clapperboard, count: 20 },
  { name: "Finance systems", icon: CreditCard, count: 16 },
  { name: "AI automation", icon: Bot, count: 22 },
  { name: "AI workflows", icon: Workflow, count: 19 },
  { name: "n8n automations", icon: Network, count: 14 },
  { name: "Business systems", icon: BriefcaseBusiness, count: 17 }
];

export const products: Product[] = [
  {
    slug: "ai-operator-os",
    title: "AI Operator OS",
    category: "AI automation",
    price: 149,
    compareAt: 249,
    rating: 4.9,
    reviews: 284,
    badge: "Best seller",
    tags: ["AI", "Operations", "Automation"],
    description:
      "A command center of prompts, SOPs, dashboards, and automations for turning repeated work into reliable AI-assisted systems.",
    outcome: "Build a calmer business that compounds while you sleep.",
    featured: true,
    bestseller: true,
    trending: true,
    accent: "from-blue-500 to-violet-500",
    includes: ["AI task router", "Client delivery SOPs", "Automation map", "Prompt vault", "30-day implementation plan"],
    benefits: ["Replace recurring admin loops", "Standardize team handoffs", "Ship polished client work faster"]
  },
  {
    slug: "creator-finance-vault",
    title: "Creator Finance Vault",
    category: "Finance systems",
    price: 79,
    rating: 4.8,
    reviews: 191,
    badge: "New",
    tags: ["Money", "Creator", "Notion"],
    description:
      "A financial operating system for creators and solo founders who want clarity across income, taxes, runway, and investments.",
    outcome: "Know exactly where your money is going and what it can become.",
    featured: true,
    trending: true,
    accent: "from-cyan-400 to-blue-600",
    includes: ["Revenue tracker", "Tax reserve planner", "Subscription audit", "Investment dashboard"],
    benefits: ["See profit by product", "Plan quarterly cash flow", "Reduce expensive financial drift"]
  },
  {
    slug: "minimalist-japan-guide",
    title: "Minimalist Japan Guide",
    category: "Minimal travel",
    price: 39,
    rating: 4.9,
    reviews: 322,
    badge: "Reader favorite",
    tags: ["Travel", "Japan", "Minimal"],
    description:
      "A visually precise, low-friction travel guide for Tokyo, Kyoto, Osaka, and quiet side quests without itinerary bloat.",
    outcome: "Travel lighter, move smarter, and keep the magic intact.",
    featured: true,
    bestseller: true,
    accent: "from-fuchsia-500 to-blue-500",
    includes: ["7-day route", "Neighborhood maps", "Packing system", "Budget matrix", "Food shortlist"],
    benefits: ["Avoid decision fatigue", "Spend less time planning", "Experience more with less luggage"]
  },
  {
    slug: "cinematic-reels-kit",
    title: "Cinematic Reels Kit",
    category: "Video editing",
    price: 59,
    compareAt: 99,
    rating: 4.7,
    reviews: 158,
    badge: "Trending",
    tags: ["Premiere", "CapCut", "Templates"],
    description:
      "Editing templates, pacing formulas, LUTs, captions, and hooks for creators who want their short-form content to feel expensive.",
    outcome: "Turn raw clips into a visual signature people remember.",
    trending: true,
    accent: "from-violet-500 to-cyan-400",
    includes: ["42 edit templates", "Hook library", "Caption styles", "LUT pack", "Export presets"],
    benefits: ["Create faster", "Raise production value", "Build a recognizable content style"]
  },
  {
    slug: "lean-body-protocol",
    title: "Lean Body Protocol",
    category: "Fitness coaching",
    price: 69,
    rating: 4.8,
    reviews: 247,
    badge: "Coach made",
    tags: ["Fitness", "Nutrition", "Habits"],
    description:
      "A focused 8-week training, nutrition, and accountability system for busy people who want visible change without chaos.",
    outcome: "Build strength, structure, and a body that fits your ambition.",
    bestseller: true,
    accent: "from-blue-400 to-emerald-400",
    includes: ["8-week training blocks", "Meal templates", "Progress tracker", "Habit scorecards"],
    benefits: ["Train with intent", "Eat without overthinking", "Measure progress with confidence"]
  },
  {
    slug: "n8n-revenue-automations",
    title: "n8n Revenue Automations",
    category: "n8n automations",
    price: 129,
    rating: 4.9,
    reviews: 119,
    badge: "Automation pack",
    tags: ["n8n", "CRM", "Sales"],
    description:
      "Prebuilt n8n workflows for lead capture, enrichment, follow-up, onboarding, reporting, and renewal reminders.",
    outcome: "Make your revenue workflow feel quietly inevitable.",
    featured: true,
    bestseller: true,
    accent: "from-purple-500 to-blue-500",
    includes: ["Lead enrichment flow", "CRM sync", "Proposal reminders", "Slack alerts", "Loom walkthroughs"],
    benefits: ["Capture more pipeline", "Reduce manual follow-up", "Create clean operational rhythm"]
  }
];

export const testimonials = [
  {
    quote:
      "Crelolabs products feel like someone cleaned up the hard part of my ambition. I went from scattered tabs to a working operating system in a weekend.",
    name: "Maya Chen",
    role: "Founder, Studio Meridian"
  },
  {
    quote:
      "The automation packs paid for themselves before the week ended. Sharp copy, clean systems, and no filler.",
    name: "Andre Ellis",
    role: "Creator and consultant"
  },
  {
    quote:
      "The travel guides are the rare kind of minimal: less noise, more taste. It changed how I plan every trip.",
    name: "Sofia Karim",
    role: "Product designer"
  }
];

export const blogPosts = [
  { slug: "ai-workflows-for-solo-founders", title: "AI workflows that make solo founders feel like small teams", category: "AI", read: "7 min" },
  { slug: "fitness-systems-for-busy-builders", title: "Fitness systems for ambitious people with crowded calendars", category: "fitness", read: "5 min" },
  { slug: "minimalist-travel-planning", title: "Minimalist travel planning without flattening the adventure", category: "travel", read: "6 min" },
  { slug: "money-dashboard-creator-economy", title: "The money dashboard every creator should build before scaling", category: "finance", read: "8 min" },
  { slug: "productivity-without-performance-theater", title: "Productivity without performance theater", category: "productivity", read: "4 min" },
  { slug: "creator-economy-product-stack", title: "The premium digital product stack for modern creators", category: "creator economy", read: "9 min" }
];

export const stats = [
  { label: "Digital systems shipped", value: "175+" },
  { label: "Average customer rating", value: "4.86" },
  { label: "Countries reached", value: "41" },
  { label: "Hours saved by users", value: "38k+" }
];

export const faqs = [
  ["Are these products instantly downloadable?", "Yes. Purchases unlock immediately inside the dashboard and can be re-downloaded any time."],
  ["Can I use the templates for client work?", "Most products include commercial-friendly use. Each product page lists its license details before checkout."],
  ["Do automations require technical experience?", "The systems are built for operators, creators, and founders. Technical products include walkthroughs, setup notes, and support-ready structure."],
  ["What database should power this marketplace?", "Use Supabase Postgres for catalog, users, orders, entitlements, reviews, and signed download metadata. It pairs cleanly with Stripe and Next.js."]
];

export const featuredIcon = Sparkles;
