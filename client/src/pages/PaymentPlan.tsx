import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Smartphone, Lock, Zap } from "lucide-react";
import { paymentPlans, generateUPIString, UPI_ID } from "@shared/payment-plans";
import logoImage from "@assets/generated_images/biswa_tech_solutions_logo.png";

interface PaymentPlanPageProps {
  planId: string;
}

function getTierClasses(tier: number) {
  const tierClasses = {
    1: {
      primary: "bg-tier1-primary text-tier1-foreground",
      light: "bg-tier1-gradient-from",
      border: "border-tier1-primary",
      text: "text-tier1-primary"
    },
    2: {
      primary: "bg-tier2-primary text-tier2-foreground",
      light: "bg-tier2-gradient-from",
      border: "border-tier2-primary",
      text: "text-tier2-primary"
    },
    3: {
      primary: "bg-tier3-primary text-tier3-foreground",
      light: "bg-tier3-gradient-from",
      border: "border-tier3-primary",
      text: "text-tier3-primary"
    },
    4: {
      primary: "bg-tier4-primary text-tier4-foreground",
      light: "bg-tier4-gradient-from",
      border: "border-tier4-primary",
      text: "text-tier4-primary"
    }
  };
  return tierClasses[tier as keyof typeof tierClasses];
}

export default function PaymentPlanPage({ planId }: PaymentPlanPageProps) {
  const plan = paymentPlans.find(p => p.id === planId);

  if (!plan) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Plan not found</p>
      </div>
    );
  }

  const upiString = generateUPIString(plan.price);
  const handlePayment = () => {
    window.location.href = upiString;
  };

  const tierStyles = getTierClasses(plan.tier);

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Compact Header */}
      <header className="border-b border-border/20 bg-card/80 py-2 px-3 flex-shrink-0">
        <div className="flex items-center justify-center gap-2">
          <img 
            src={logoImage} 
            alt="Biswa Tech Solutions" 
            className="h-6 w-auto"
            data-testid="logo-image"
          />
          <div className="text-center">
            <h1 className="text-xs font-bold text-foreground leading-none">
              Biswa Tech
            </h1>
            <p className="text-xs text-muted-foreground leading-none">Automation</p>
          </div>
        </div>
      </header>

      {/* Main Content - No Scroll */}
      <main className="flex-1 px-3 py-3 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-sm h-full flex flex-col">
          {/* Payment Card - Compact */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-border/30 bg-card flex flex-col h-full">
            {/* Color Bar */}
            <div className={`h-1.5 ${tierStyles.primary}`}></div>

            {/* Header Section - Minimal */}
            <div className={`px-4 py-2.5 bg-gradient-to-br ${tierStyles.light} to-card text-center`}>
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-semibold text-xs ${tierStyles.primary} mb-1.5`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                {plan.badge}
              </div>
              <h2 className="text-lg font-bold font-display text-foreground leading-tight" data-testid="text-plan-name">
                {plan.name}
              </h2>
              <div className="space-y-0.5 mt-1.5">
                <div className="text-3xl font-bold font-display text-foreground" data-testid="text-price">
                  {plan.currency}{plan.price}
                </div>
                <p className="text-xs text-muted-foreground">One-time payment</p>
              </div>
            </div>

            {/* Features Section - Compact */}
            <div className="px-4 py-2 flex-shrink-0">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Includes</p>
              <div className="space-y-1">
                {plan.features.slice(0, 2).map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2"
                    data-testid={`feature-item-${index}`}
                  >
                    <CheckCircle2 className={`h-3.5 w-3.5 flex-shrink-0 ${tierStyles.text}`} />
                    <span className="text-xs text-card-foreground line-clamp-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Section - Compact */}
            <div className="px-4 py-2 flex-1 flex flex-col gap-1.5 overflow-hidden">
              {/* QR Code - Small */}
              <div className="bg-muted/40 rounded-lg p-2 text-center">
                <p className="text-xs font-medium text-foreground mb-1">Scan to Pay</p>
                <div className="flex justify-center">
                  <div className="bg-white p-1.5 rounded shadow-sm">
                    <QRCodeSVG 
                      value={upiString} 
                      size={100}
                      level="H"
                      includeMargin={false}
                      data-testid="qr-code"
                    />
                  </div>
                </div>
              </div>

              {/* OR Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-border/30"></div>
                <span className="text-xs text-muted-foreground font-medium">OR</span>
                <div className="flex-1 h-px bg-border/30"></div>
              </div>

              {/* Payment Button - Full Width */}
              <button
                onClick={handlePayment}
                className={`w-full ${tierStyles.primary} rounded-lg py-2.5 px-3 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover-elevate active-elevate-2 transition-all flex-shrink-0`}
                data-testid="button-pay-upi"
              >
                <Smartphone className="h-4 w-4" />
                <span>Pay {plan.currency}{plan.price}</span>
              </button>

              <p className="text-xs text-center text-muted-foreground leading-snug">
                Works with all UPI apps
              </p>
            </div>

            {/* Security Footer */}
            <div className="px-4 py-2 bg-muted/20 border-t border-border/30 flex-shrink-0">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="space-y-0.5">
                  <Lock className="h-3.5 w-3.5 text-green-600 dark:text-green-400 mx-auto" />
                  <p className="text-xs font-medium text-foreground">Secure</p>
                </div>
                <div className="space-y-0.5">
                  <Zap className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400 mx-auto" />
                  <p className="text-xs font-medium text-foreground">Instant</p>
                </div>
                <div className="space-y-0.5">
                  <svg className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-xs font-medium text-foreground">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border/20 bg-card/80 py-1.5 px-3 flex-shrink-0">
        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
          <span>Biswa Tech Solutions</span>
          <span>•</span>
          <span>Secure Payment</span>
        </div>
      </footer>
    </div>
  );
}
