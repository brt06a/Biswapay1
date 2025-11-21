import { Link, useLocation } from "wouter";
import { paymentPlans } from "@shared/payment-plans";
import { Badge } from "@/components/ui/badge";

export function PaymentPlanNav() {
  const [location] = useLocation();

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {paymentPlans.map((plan) => {
            const isActive = location === plan.path;
            return (
              <Link key={plan.id} href={plan.path}>
                <Badge
                  variant={isActive ? "default" : "outline"}
                  className={`cursor-pointer transition-all px-3 py-1.5 text-xs font-semibold hover-elevate active-elevate-2 ${
                    isActive 
                      ? `bg-tier${plan.tier}-primary text-tier${plan.tier}-foreground border-tier${plan.tier}-primary` 
                      : 'hover:bg-accent'
                  }`}
                  data-testid={`nav-plan-${plan.id}`}
                >
                  {plan.currency}{plan.price}
                </Badge>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
