export interface PaymentPlan {
  id: string;
  tier: 1 | 2 | 3 | 4;
  name: string;
  badge: string;
  price: number;
  currency: string;
  features: string[];
  path: string;
}

export const paymentPlans: PaymentPlan[] = [
  {
    id: "basic",
    tier: 1,
    name: "Mater9692 Pro",
    badge: "STARTER",
    price: 49,
    currency: "₹",
    path: "/plan/basic",
    features: [
      "Access to basic automation features",
      "Up to 100 messages per day",
      "Standard support",
      "Email notifications"
    ]
  },
  {
    id: "standard",
    tier: 2,
    name: "Hiding 8455",
    badge: "POPULAR",
    price: 99,
    currency: "₹",
    path: "/plan/standard",
    features: [
      "All Basic features included",
      "Up to 500 messages per day",
      "Priority support",
      "Advanced automation rules",
      "Custom message templates",
      "Analytics dashboard"
    ]
  },
  {
    id: "pro",
    tier: 3,
    name: "Create9938",
    badge: "PRO",
    price: 199,
    currency: "₹",
    path: "/plan/pro",
    features: [
      "All Standard features included",
      "Unlimited messages",
      "24/7 priority support",
      "Advanced AI automation",
      "Multi-channel integration",
      "Custom workflows",
      "API access",
      "Team collaboration tools"
    ]
  },
  {
    id: "premium",
    tier: 4,
    name: "Life 9999",
    badge: "ENTERPRISE",
    price: 399,
    currency: "₹",
    path: "/plan/premium",
    features: [
      "All Pro features included",
      "Dedicated account manager",
      "White-label solutions",
      "Custom integrations",
      "Advanced security features",
      "SLA guarantee",
      "Onboarding & training",
      "Priority feature requests",
      "Custom development support",
      "Enterprise-grade infrastructure"
    ]
  }
];

export const UPI_ID = "bishwa6@ptyes";

export function generateUPIString(amount: number): string {
  const payeeName = encodeURIComponent("Biswa Tech Solutions");
  const transactionNote = encodeURIComponent("Payment for Telegram Automation Bot");
  return `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${payeeName}&am=${amount}&cu=INR&tn=${transactionNote}`;
}
