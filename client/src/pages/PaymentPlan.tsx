import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Smartphone, Lock } from "lucide-react";
import { paymentPlans, generateUPIString, UPI_ID } from "@shared/payment-plans";
import logoImage from "@assets/generated_images/biswa_tech_solutions_logo.png";

interface PaymentPlanPageProps {
  planId: string;
}

const cashfreeColors = {
  primary: "bg-[#00A699] text-white",
  text: "text-[#00A699]",
  light: "bg-[#00A699]/10 dark:bg-[#00A699]/5 border-[#00A699]/20",
  accent: "text-[#00A699]",
};

export default function PaymentPlanPage({ planId }: PaymentPlanPageProps) {
  const plan = paymentPlans.find(p => p.id === planId);

  if (!plan) {
    return <div className="h-screen flex items-center justify-center"><p>Plan not found</p></div>;
  }

  const upiString = generateUPIString(plan.price);
  const handlePayment = () => { window.location.href = upiString; };

  return (
    <div className="h-screen w-full bg-white dark:bg-neutral-950 flex flex-col overflow-y-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-3 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Biswa Tech" className="h-6 w-auto" data-testid="logo-image" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Biswa Tech Solutions</span>
          </div>
          <Lock className="h-4 w-4 text-gray-400" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        <div className="max-w-md mx-auto w-full">
          
          {/* Order Summary Card */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-850 rounded-xl p-5 mb-6 border border-gray-200 dark:border-neutral-800 shadow-sm">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest font-semibold">Your Plan</p>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="text-plan-name">
                  {plan.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{plan.features[0]}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="text-price">
                  {plan.currency}{plan.price}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">for 30 days</p>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className={`${cashfreeColors.light} border-2 border-current/30 rounded-xl p-6 mb-5`}>
            <p className={`text-xs font-bold ${cashfreeColors.accent} mb-4 uppercase tracking-wide`}>Scan to Pay</p>
            <div className="flex flex-col items-center gap-4">
              {/* QR Code */}
              <div className={`bg-white dark:bg-neutral-800 p-3 rounded-lg border-2 ${cashfreeColors.text} shadow-lg`}>
                <QRCodeSVG 
                  value={upiString} 
                  size={120}
                  level="H"
                  includeMargin={false}
                  data-testid="qr-code"
                />
              </div>
              
              {/* UPI Details */}
              <div className="text-center w-full">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Smartphone className={`h-4 w-4 ${cashfreeColors.accent}`} />
                  <span className={`font-semibold text-sm ${cashfreeColors.accent}`}>UPI Payment</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  Open Google Pay, PhonePe, BHIM or any UPI app to scan
                </p>
                <div className="bg-white dark:bg-neutral-800 rounded-lg px-3 py-2 inline-block border border-gray-200 dark:border-neutral-700">
                  <p className={`text-sm font-mono font-semibold ${cashfreeColors.accent}`}>{UPI_ID}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className={`w-full ${cashfreeColors.primary} rounded-lg py-3.5 px-4 font-semibold text-base flex items-center justify-center gap-2 shadow-md hover-elevate active-elevate-2 transition-all mb-5`}
            data-testid="button-pay-upi"
          >
            <Smartphone className="h-5 w-5" />
            <span>Pay {plan.currency}{plan.price} via UPI</span>
          </button>

          {/* Features */}
          <div className="mb-5">
            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">What You Get</p>
            <div className="space-y-2">
              {plan.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`feature-item-${index}`}>
                  <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5 ${cashfreeColors.accent}`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Footer */}
          <div className="bg-gray-50 dark:bg-neutral-900 rounded-lg p-4 border border-gray-200 dark:border-neutral-800 mb-6">
            <div className="flex items-start gap-3">
              <Lock className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">Secure & Encrypted</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">256-bit SSL encryption protects your data</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 py-3 px-4">
        <div className="text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            <span className="font-semibold">Powered by</span> Cashfree
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Biswa Tech Solutions © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
