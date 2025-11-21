import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Smartphone, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const keyFeatures = plan.features.slice(0, 4);

  return (
    <div className="h-screen bg-gradient-to-br from-background to-background via-background flex flex-col overflow-hidden">
      {/* Professional Header */}
      <header className="border-b border-border/20 bg-background/50 backdrop-blur-md py-3 px-4 flex-shrink-0">
        <div className="flex items-center justify-center gap-2.5">
          <img 
            src={logoImage} 
            alt="Biswa Tech Solutions" 
            className="h-7 w-auto"
            data-testid="logo-image"
          />
          <div className="text-center">
            <h1 className="text-xs font-bold font-display text-foreground leading-tight">
              Biswa Tech Solutions
            </h1>
            <p className="text-xs text-muted-foreground">Payment Gateway</p>
          </div>
        </div>
      </header>

      {/* Main Content - Centered */}
      <main className="flex-1 overflow-y-auto px-3 py-4 flex items-center justify-center">
        <div className="w-full max-w-sm">
          {/* Professional Payment Card */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/30 bg-card">
            {/* Top Color Bar */}
            <div className={`h-2 ${tierStyles.primary}`}></div>

            {/* Header Section */}
            <div className={`px-6 pt-6 pb-4 bg-gradient-to-br ${tierStyles.light} to-card`}>
              <div className="text-center space-y-3">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-semibold text-xs ${tierStyles.primary}`}>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  {plan.badge}
                </div>
                <h2 className="text-2xl font-bold font-display text-foreground" data-testid="text-plan-name">
                  {plan.name}
                </h2>
                <div className="space-y-1">
                  <div className="text-4xl font-bold font-display text-foreground" data-testid="text-price">
                    {plan.currency}<span className="text-4xl">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Features Section */}
            <div className="px-6 py-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">What You Get</p>
              <div className="space-y-2.5">
                {keyFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3"
                    data-testid={`feature-item-${index}`}
                  >
                    <CheckCircle2 className={`h-4.5 w-4.5 flex-shrink-0 ${tierStyles.text}`} />
                    <span className="text-sm text-card-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Payment Section */}
            <div className="px-6 py-5 space-y-4">
              {/* Payment Methods Header */}
              <div className="text-center">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Complete Payment</p>
              </div>

              {/* QR Code - Prominent */}
              <div className="bg-muted/40 rounded-xl p-5 text-center space-y-3">
                <p className="text-xs font-medium text-foreground">Scan with any UPI app</p>
                <div className="flex justify-center">
                  <div className="bg-white p-3 rounded-lg shadow-md">
                    <QRCodeSVG 
                      value={upiString} 
                      size={140}
                      level="H"
                      includeMargin={false}
                      data-testid="qr-code"
                    />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  UPI ID: <span className="font-medium text-foreground">{UPI_ID}</span>
                </p>
              </div>

              {/* Divider Text */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-border/30"></div>
                <span className="text-xs text-muted-foreground font-medium">OR</span>
                <div className="flex-1 h-px bg-border/30"></div>
              </div>

              {/* Realistic UPI Payment Button */}
              <button
                onClick={handlePayment}
                className={`w-full ${tierStyles.primary} rounded-lg py-3.5 px-4 font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg hover-elevate active-elevate-2 transition-all transform`}
                data-testid="button-pay-upi"
              >
                <Smartphone className="h-4.5 w-4.5" />
                <span>Pay {plan.currency}{plan.price} via UPI</span>
              </button>

              <p className="text-xs text-center text-muted-foreground leading-relaxed">
                Works with Google Pay, PhonePe, BHIM, Paytm & all UPI apps
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

            {/* Security Footer */}
            <div className="px-6 py-4 bg-muted/20">
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center space-y-1.5">
                  <div className="flex justify-center">
                    <Lock className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Secure</p>
                </div>
                <div className="text-center space-y-1.5">
                  <div className="flex justify-center">
                    <Zap className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Instant</p>
                </div>
                <div className="text-center space-y-1.5">
                  <div className="flex justify-center">
                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-foreground">24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges - Below Card */}
          <div className="mt-4 px-2 text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" />
              <span>Your payment is encrypted & secure</span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-medium">Trusted by thousands of users</p>
              <p>Powered by Biswa Tech Solutions</p>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-border/20 bg-background/50 backdrop-blur-md py-2 px-4 flex-shrink-0">
        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <span>Terms</span>
          <span className="text-border">•</span>
          <span>Privacy</span>
          <span className="text-border">•</span>
          <span>Support</span>
        </div>
      </footer>
    </div>
  );
}
