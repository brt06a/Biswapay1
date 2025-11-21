import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Shield, Zap, MessageCircle, ArrowRight, Star, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { paymentPlans, generateUPIString, UPI_ID, type PaymentPlan } from "@shared/payment-plans";
import { PaymentPlanNav } from "@/components/PaymentPlanNav";
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
  const tierGradient = tierStyles.gradient;
  const tierPrimary = tierStyles.primary;
  const tierAccent = tierStyles.accent;
  const tierBorder = tierStyles.border;

  const BadgeIcon = plan.tier === 4 ? Crown : plan.tier === 3 ? Sparkles : plan.tier === 2 ? Star : null;

  return (
    <div className="min-h-screen bg-background">
      <PaymentPlanNav />
      
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <img 
              src={logoImage} 
              alt="Biswa Tech Solutions" 
              className="h-12 w-auto"
              data-testid="logo-image"
            />
            <div className="text-center">
              <h1 className="text-2xl font-bold font-display text-foreground">
                Biswa Tech Solutions
              </h1>
              <p className="text-sm text-muted-foreground">Telegram Automation Platform</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-md mx-auto px-4 py-8">
        {/* Pricing Card */}
        <Card className={`${tierGradient} border-2 ${tierBorder} shadow-2xl overflow-hidden`}>
          <CardHeader className="text-center space-y-4 pb-6 px-4 sm:px-6">
            {/* Badge */}
            <div className="flex justify-center">
              <Badge 
                className={`${tierPrimary} px-4 py-1.5 text-xs font-bold tracking-wide flex items-center gap-1.5`}
                data-testid={`badge-tier-${plan.tier}`}
              >
                {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
                {plan.badge}
              </Badge>
            </div>

            {/* Plan Name */}
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground" data-testid="text-plan-name">
              {plan.name}
            </h2>

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl md:text-6xl font-bold font-display text-foreground" data-testid="text-price">
                  {plan.currency}{plan.price}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pb-6 px-4 sm:px-6">
            {/* Features */}
            <div className="space-y-3">
              {plan.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3"
                  data-testid={`feature-item-${index}`}
                >
                  <CheckCircle2 className={`h-5 w-5 flex-shrink-0 mt-0.5 text-tier${plan.tier}-primary`} />
                  <span className="text-base text-card-foreground leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            {/* Payment Methods Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center text-foreground">
                Choose Payment Method
              </h3>

              {/* QR Code */}
              <div className="space-y-3">
                <div className={`${tierAccent} rounded-xl p-6 space-y-4`}>
                  <div className="bg-white p-4 rounded-lg mx-auto w-fit shadow-md">
                    <QRCodeSVG 
                      value={upiString} 
                      size={200}
                      level="H"
                      includeMargin={false}
                      data-testid="qr-code"
                    />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-sm font-semibold text-foreground">Scan to Pay</p>
                    <p className="text-xs text-muted-foreground">UPI ID: {UPI_ID}</p>
                    <p className="text-xs text-muted-foreground">Amount: {plan.currency}{plan.price}</p>
                  </div>
                </div>
              </div>

              {/* OR Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">or</span>
                </div>
              </div>

              {/* Payment Button */}
              <Button
                size="lg"
                className={`w-full ${tierPrimary} text-lg font-semibold py-6 shadow-lg hover-elevate active-elevate-2`}
                onClick={handlePayment}
                data-testid="button-pay-upi"
              >
                Pay {plan.currency}{plan.price} via UPI
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Opens your UPI payment app
              </p>
            </div>
          </CardContent>

          <CardFooter className={`${tierAccent} border-t-2 ${tierBorder} py-4 px-4 sm:px-6`}>
            {/* Trust Badges */}
            <div className="w-full grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Shield className="h-5 w-5 text-foreground" />
                <span className="text-xs font-medium text-foreground">Secure</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Zap className="h-5 w-5 text-foreground" />
                <span className="text-xs font-medium text-foreground">Instant</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <MessageCircle className="h-5 w-5 text-foreground" />
                <span className="text-xs font-medium text-foreground">24/7 Support</span>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* Footer */}
        <footer className="mt-8 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Powered by Biswa Tech Solutions
          </p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms
            </a>
            <span className="text-border">•</span>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy
            </a>
            <span className="text-border">•</span>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-support"
            >
              Support
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
