import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Smartphone, Lock, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { paymentPlans, generateUPIString, UPI_ID } from "@shared/payment-plans";
import logoImage from "@assets/Round Photo_Nov122025_183837_1762953059438_1763803696843.png";

interface PaymentPlanPageProps {
  planId: string;
}

// Session utilities
function generateSessionId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function getOrCreateSession(planId: string): string {
  const storageKey = `session_${planId}`;
  let sessionId = sessionStorage.getItem(storageKey);
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem(storageKey, sessionId);
  }
  return sessionId;
}

function getGradientByTier(tier: number): string {
  const gradients = {
    1: "bg-gradient-to-b from-white via-gray-50 to-slate-200 dark:from-neutral-950 dark:via-slate-900 dark:to-slate-800",
    2: "bg-gradient-to-b from-white via-cyan-50 to-cyan-200 dark:from-neutral-950 dark:via-cyan-900/30 dark:to-cyan-800/40",
    3: "bg-gradient-to-b from-white via-purple-50 to-purple-200 dark:from-neutral-950 dark:via-purple-900/30 dark:to-purple-800/40",
    4: "bg-gradient-to-b from-white via-amber-50 to-amber-200 dark:from-neutral-950 dark:via-amber-900/30 dark:to-amber-800/40"
  };
  return gradients[tier as keyof typeof gradients] || gradients[1];
}

function getButtonByTier(tier: number): string {
  const buttons = {
    1: "bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800",
    2: "bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800",
    3: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800",
    4: "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
  };
  return buttons[tier as keyof typeof buttons] || buttons[1];
}

function getAccentByTier(tier: number): string {
  const accents = {
    1: "text-slate-600 dark:text-slate-400",
    2: "text-cyan-600 dark:text-cyan-400",
    3: "text-purple-600 dark:text-purple-400",
    4: "text-amber-600 dark:text-amber-400"
  };
  return accents[tier as keyof typeof accents] || accents[1];
}

function getQRGradientByTier(tier: number): string {
  const gradients = {
    1: "from-slate-50 to-slate-100 dark:from-slate-950/30 dark:to-slate-900/30",
    2: "from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30",
    3: "from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30",
    4: "from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30"
  };
  return gradients[tier as keyof typeof gradients] || gradients[1];
}

function getSecurityByTier(tier: number): string {
  const styles = {
    1: "bg-slate-50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-900/30",
    2: "bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-900/30",
    3: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900/30",
    4: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30"
  };
  return styles[tier as keyof typeof styles] || styles[1];
}

export default function PaymentPlanPage({ planId }: PaymentPlanPageProps) {
  const [location, setLocation] = useLocation();
  const plan = paymentPlans.find(p => p.id === planId);

  useEffect(() => {
    if (!plan) return;

    // Get or create session ID
    const sessionId = getOrCreateSession(planId);
    
    // Get current URL params
    const url = new URL(window.location.href);
    const currentSession = url.searchParams.get('session');
    
    // Update URL with session ID if not present
    if (currentSession !== sessionId) {
      const pathOnly = location.split('?')[0]; // Remove existing params
      setLocation(`${pathOnly}?session=${sessionId}`);
    }
  }, []);

  if (!plan) {
    return <div className="h-screen flex items-center justify-center"><p>Plan not found</p></div>;
  }

  const upiString = generateUPIString(plan.price);
  const handlePayment = () => {
    // Open UPI app using deeplink
    if (window.location.href !== upiString) {
      setTimeout(() => {
        window.location.href = upiString;
      }, 100);
    }
  };
  
  const bgGradient = getGradientByTier(plan.tier);
  const buttonGradient = getButtonByTier(plan.tier);
  const accentColor = getAccentByTier(plan.tier);
  const qrGradient = getQRGradientByTier(plan.tier);
  const securityStyle = getSecurityByTier(plan.tier);

  return (
    <div className={`min-h-screen w-full ${bgGradient} flex flex-col`}>
      
      {/* Header */}
      <header className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 py-3 px-4">
        <div className="max-w-lg mx-auto flex items-center gap-2">
          <img src={logoImage} alt="PromotionX" className="h-8 w-8 rounded-full" data-testid="logo-image" />
          <span className="text-sm font-semibold text-gray-900 dark:text-white">PromotionX</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 flex flex-col">
        <div className="max-w-sm mx-auto w-full flex flex-col">
          
          {/* Amount Section - PhonePe Style */}
          <div className="text-center mb-6">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Amount to Pay</p>
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-1" data-testid="text-price">
              {plan.currency}{plan.price}
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-xs">{plan.name}</p>
          </div>

          {/* QR Code Container - PhonePe Style */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg mb-6 flex flex-col items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-4">Scan to Pay</p>
            
            {/* QR Code */}
            <div className={`bg-gradient-to-br ${qrGradient} p-4 rounded-xl mb-4`}>
              <QRCodeSVG 
                value={upiString} 
                size={140}
                level="H"
                includeMargin={false}
                data-testid="qr-code"
              />
            </div>

            {/* UPI Details */}
            <div className="w-full">
              <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold text-center mb-2">Open UPI App</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs text-center mb-3">
                Google Pay, PhonePe, BHIM or any UPI app
              </p>
              <div className="bg-gray-100 dark:bg-neutral-700 rounded-lg p-2 text-center">
                <p className={`text-sm font-mono font-bold text-gray-900 dark:text-white`}>{UPI_ID}</p>
              </div>
            </div>
          </div>

          {/* Pay Button - PhonePe Style */}
          <button
            onClick={handlePayment}
            className={`w-full ${buttonGradient} text-white rounded-full py-4 px-4 font-bold text-base flex items-center justify-center gap-2 shadow-lg hover-elevate active-elevate-2 transition-all mb-6`}
            data-testid="button-pay-upi"
          >
            <Smartphone className="h-5 w-5" />
            <span>Pay Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Security Info */}
          <div className={`${securityStyle} border rounded-xl p-4 mb-6`}>
            <div className="flex items-start gap-3">
              <Lock className={`h-4 w-4 ${accentColor} flex-shrink-0 mt-0.5`} />
              <div>
                <p className={`text-xs font-semibold ${accentColor}`}>Your payment is secure</p>
                <p className={`text-xs ${accentColor} opacity-75`}>256-bit encryption protects your data</p>
              </div>
            </div>
          </div>

          {/* Plan Benefits */}
          <div className="mb-4">
            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">Includes</p>
            <div className="space-y-2">
              {plan.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`feature-item-${index}`}>
                  <CheckCircle2 className={`h-4 w-4 ${accentColor} flex-shrink-0 mt-0.5`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-t border-gray-200 dark:border-neutral-800 py-3 px-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Powered by Biswa Tech Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
