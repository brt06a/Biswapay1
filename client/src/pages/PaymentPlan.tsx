import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Smartphone, Lock, AlertCircle } from "lucide-react";
import { paymentPlans, generateUPIString, UPI_ID } from "@shared/payment-plans";
import logoImage from "@assets/generated_images/biswa_tech_solutions_logo.png";

interface PaymentPlanPageProps {
  planId: string;
}

// Cashfree-inspired color scheme - Vibrant teal throughout
const cashfreeColors = {
  primary: "bg-[#00A699] text-white",
  primaryHover: "hover:bg-[#008B7E]",
  text: "text-[#00A699]",
  light: "bg-[#00A699]/15 dark:bg-[#00A699]/10 border-[#00A699]/30",
  accent: "text-[#00A699]",
  darkAccent: "#00A699"
};

export default function PaymentPlanPage({ planId }: PaymentPlanPageProps) {
  const plan = paymentPlans.find(p => p.id === planId);

  if (!plan) {
    return <div className="h-screen flex items-center justify-center"><p>Plan not found</p></div>;
  }

  const upiString = generateUPIString(plan.price);
  const handlePayment = () => { window.location.href = upiString; };

  return (
    <div className="h-screen bg-white dark:bg-neutral-950 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-2 px-3 flex-shrink-0">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img src={logoImage} alt="Biswa Tech" className="h-5 w-auto" data-testid="logo-image" />
            <span className="text-xs font-semibold text-gray-900 dark:text-white">Biswa Tech</span>
          </div>
          <Lock className="h-3 w-3 text-gray-400" />
        </div>
      </header>

      {/* Main Payment Container */}
      <main className="flex-1 overflow-hidden px-3 py-2 flex flex-col">
        <div className="max-w-md mx-auto w-full h-full flex flex-col">
          {/* Order Summary */}
          <div className="bg-gray-50 dark:bg-neutral-900 rounded-lg p-2.5 mb-2 border border-gray-200 dark:border-neutral-800 flex-shrink-0">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-0.5" data-testid="text-plan-name">
              {plan.name}
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-600 dark:text-gray-400">{plan.features[0]}</p>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900 dark:text-white" data-testid="text-price">
                  {plan.currency}{plan.price}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-2 flex-1 flex flex-col min-h-0">
            {/* UPI Tab */}
            <div className={`border-2 rounded-lg p-2.5 mb-2 cursor-pointer transition-all ${cashfreeColors.light} flex-1 flex flex-col items-center justify-center`}>
              <div className="flex flex-col items-center gap-2 w-full">
                {/* QR Code */}
                <div className={`bg-white dark:bg-neutral-800 p-2 rounded-lg border-2 ${cashfreeColors.text} shadow-md flex-shrink-0`}>
                  <QRCodeSVG 
                    value={upiString} 
                    size={100}
                    level="H"
                    includeMargin={false}
                    data-testid="qr-code"
                  />
                </div>

                {/* UPI Details */}
                <div className="w-full text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Smartphone className={`h-3 w-3 ${cashfreeColors.accent}`} />
                    <span className={`font-semibold text-gray-900 dark:text-white text-xs ${cashfreeColors.accent}`}>UPI</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 line-clamp-2">
                    Scan & pay with Google Pay, PhonePe, BHIM
                  </p>
                  <div className={`${cashfreeColors.light} rounded-lg px-2 py-0.5 inline-block border border-current/20`}>
                    <p className={`text-xs font-semibold ${cashfreeColors.accent}`}>{UPI_ID}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              className={`w-full ${cashfreeColors.primary} rounded-lg py-2.5 px-3 font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover-elevate active-elevate-2 transition-all flex-shrink-0`}
              data-testid="button-pay-upi"
            >
              <Smartphone className="h-4 w-4" />
              <span>Pay {plan.currency}{plan.price}</span>
            </button>
          </div>

          {/* Features & Security */}
          <div className="flex gap-2 flex-shrink-0">
            {/* Features */}
            <div className={`${cashfreeColors.light} border-2 border-current/30 rounded-lg p-1.5 flex-1`}>
              <p className={`text-xs font-semibold ${cashfreeColors.accent} mb-1 leading-none`}>Benefits</p>
              <div className="space-y-0.5">
                {plan.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-start gap-1" data-testid={`feature-item-${index}`}>
                    <CheckCircle2 className={`h-2.5 w-2.5 flex-shrink-0 mt-0.5 ${cashfreeColors.accent}`} />
                    <span className="text-xs text-gray-700 dark:text-gray-300 line-clamp-1">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-gray-50 dark:bg-neutral-900 rounded-lg p-1.5 flex-1 border border-gray-200 dark:border-neutral-800">
              <div className="flex items-start gap-1">
                <Lock className="h-2.5 w-2.5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white leading-tight">Secure</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">SSL encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 py-1 px-3 flex-shrink-0">
        <p className="text-xs text-center text-gray-500 dark:text-gray-500 leading-tight">
          Powered by Cashfree × Biswa Tech Solutions
        </p>
      </footer>
    </div>
  );
}
