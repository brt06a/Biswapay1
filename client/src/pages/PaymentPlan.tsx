import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { paymentPlans, generateUPIString, UPI_ID, type PaymentPlan } from "@shared/payment-plans";
import logoImage from "@assets/generated_images/biswa_tech_solutions_logo.png";

interface PaymentPlanPageProps {
  planId: string;
}

function getTierClasses(tier: number) {
  const tierClasses = {
    1: {
      gradient: "bg-gradient-to-br from-tier1-gradient-from to-tier1-gradient-to",
      primary: "bg-tier1-primary text-tier1-foreground",
      accent: "bg-tier1-accent",
      border: "border-tier1-primary"
    },
    2: {
      gradient: "bg-gradient-to-br from-tier2-gradient-from to-tier2-gradient-to",
      primary: "bg-tier2-primary text-tier2-foreground",
      accent: "bg-tier2-accent",
      border: "border-tier2-primary"
    },
    3: {
      gradient: "bg-gradient-to-br from-tier3-gradient-from to-tier3-gradient-to",
      primary: "bg-tier3-primary text-tier3-foreground",
      accent: "bg-tier3-accent",
      border: "border-tier3-primary"
    },
    4: {
      gradient: "bg-gradient-to-br from-tier4-gradient-from to-tier4-gradient-to",
      primary: "bg-tier4-primary text-tier4-foreground",
      accent: "bg-tier4-accent",
      border: "border-tier4-primary"
    }
  };
  return tierClasses[tier as keyof typeof tierClasses];
}

export default function PaymentPlanPage({ planId }: PaymentPlanPageProps) {
  const plan = paymentPlans.find(p => p.id === planId);

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Plan not found</p>
      </div>
    );
  }

  const upiString = generateUPIString(plan.price);
  const handlePayment = () => {
    window.location.href = upiString;
  };

  const tierStyles = getTierClasses(plan.tier);
  const keyFeatures = plan.features.slice(0, 3);

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Compact Header */}
      <header className="border-b border-border bg-card py-2 px-4 flex-shrink-0">
        <div className="flex items-center justify-center gap-2">
          <img 
            src={logoImage} 
            alt="Biswa Tech Solutions" 
            className="h-8 w-auto"
            data-testid="logo-image"
          />
          <div className="text-center">
            <h1 className="text-sm font-bold font-display text-foreground leading-tight">
              Biswa Tech
            </h1>
            <p className="text-xs text-muted-foreground">Telegram Automation</p>
          </div>
        </div>
      </header>

      {/* Navigation - Plan Switcher */}
      <nav className="border-b border-border bg-background px-3 py-2 flex-shrink-0">
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto">
          {paymentPlans.map((p) => (
            <a
              key={p.id}
              href={p.path}
              className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                p.id === planId
                  ? `${tierStyles.primary} shadow-md`
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
              data-testid={`nav-plan-${p.id}`}
            >
              {p.currency}{p.price}
            </a>
          ))}
        </div>
      </nav>

      {/* Scrollable Content Area */}
      <main className="flex-1 overflow-y-auto px-3 py-3">
        <div className="max-w-sm mx-auto">
          <Card className={`${tierStyles.gradient} border-2 ${tierStyles.border} shadow-lg overflow-hidden`}>
            {/* Header Section - Compact */}
            <CardHeader className={`text-center space-y-2 pb-3 px-4 ${tierStyles.accent}`}>
              <Badge 
                className={`${tierStyles.primary} px-3 py-0.5 text-xs font-bold mx-auto`}
                data-testid={`badge-tier-${plan.tier}`}
              >
                {plan.badge}
              </Badge>
              <h2 className="text-xl font-bold font-display text-foreground" data-testid="text-plan-name">
                {plan.name}
              </h2>
              <div className="space-y-0">
                <span className="text-3xl font-bold font-display text-foreground" data-testid="text-price">
                  {plan.currency}{plan.price}
                </span>
                <p className="text-xs text-muted-foreground">per month</p>
              </div>
            </CardHeader>

            {/* Features - Compact */}
            <CardContent className="space-y-2 py-3 px-4">
              <p className="text-xs font-semibold text-foreground mb-2">What's Included:</p>
              {keyFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2"
                  data-testid={`feature-item-${index}`}
                >
                  <CheckCircle2 className={`h-4 w-4 flex-shrink-0 text-tier${plan.tier}-primary`} />
                  <span className="text-sm text-card-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </CardContent>

            {/* Payment Section */}
            <CardFooter className={`flex flex-col gap-2.5 p-3 ${tierStyles.accent} border-t-2 ${tierStyles.border}`}>
              {/* QR Code - Compact */}
              <div className="w-full">
                <p className="text-xs font-semibold text-foreground text-center mb-2">Scan with any UPI app:</p>
                <div className="bg-white p-2 rounded-lg mx-auto w-fit shadow-sm">
                  <QRCodeSVG 
                    value={upiString} 
                    size={120}
                    level="H"
                    includeMargin={false}
                    data-testid="qr-code"
                  />
                </div>
              </div>

              {/* Realistic UPI Payment Button */}
              <button
                onClick={handlePayment}
                className={`w-full ${tierStyles.primary} rounded-xl py-3 px-3 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover-elevate active-elevate-2 transition-all`}
                data-testid="button-pay-upi"
              >
                <Smartphone className="h-4 w-4" />
                <span>Pay {plan.currency}{plan.price} via UPI</span>
              </button>

              <p className="text-xs text-center text-muted-foreground">
                Works with Google Pay, PhonePe, BHIM & more
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Sticky Footer - Minimal */}
      <footer className="border-t border-border bg-card py-2 px-4 flex-shrink-0">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>Secure Payment</span>
          <span>•</span>
          <span>Instant Access</span>
        </div>
      </footer>
    </div>
  );
}
