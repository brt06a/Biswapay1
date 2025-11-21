import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Smartphone, Lock, AlertCircle } from "lucide-react";
import { paymentPlans, generateUPIString, UPI_ID } from "@shared/payment-plans";
import logoImage from "@assets/generated_images/biswa_tech_solutions_logo.png";

interface PaymentPlanPageProps {
  planId: string;
}

function getTierClasses(tier: number) {
  const tierClasses = {
    1: { primary: "bg-tier1-primary text-tier1-foreground", text: "text-tier1-primary" },
    2: { primary: "bg-tier2-primary text-tier2-foreground", text: "text-tier2-primary" },
    3: { primary: "bg-tier3-primary text-tier3-foreground", text: "text-tier3-primary" },
    4: { primary: "bg-tier4-primary text-tier4-foreground", text: "text-tier4-primary" }
  };
  return tierClasses[tier as keyof typeof tierClasses];
}

export default function PaymentPlanPage({ planId }: PaymentPlanPageProps) {
  const plan = paymentPlans.find(p => p.id === planId);

  if (!plan) {
    return <div className="h-screen flex items-center justify-center"><p>Plan not found</p></div>;
  }

  const upiString = generateUPIString(plan.price);
  const handlePayment = () => { window.location.href = upiString; };
  const tierStyles = getTierClasses(plan.tier);

  return (
    <div className="h-screen bg-white dark:bg-neutral-950 flex flex-col overflow-hidden">
      {/* Razorpay-style Header */}
      <header className="border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-3 px-4 flex-shrink-0">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Biswa Tech" className="h-6 w-auto" data-testid="logo-image" />
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Biswa Tech Solutions</span>
          </div>
          <Lock className="h-4 w-4 text-gray-400" />
        </div>
      </header>

      {/* Main Payment Container */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-md mx-auto">
          {/* Order Summary - Razorpay Style */}
          <div className="bg-gray-50 dark:bg-neutral-900 rounded-lg p-4 mb-4 border border-gray-200 dark:border-neutral-800">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide font-medium">Subscription</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1" data-testid="text-plan-name">
              {plan.name}
            </h2>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">{plan.features[0]}</p>
            
            {/* Price Breakdown - Razorpay Style */}
            <div className="space-y-2 py-3 border-t border-gray-200 dark:border-neutral-700">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Subscription</span>
                <span className="text-gray-900 dark:text-white font-medium">{plan.currency}{plan.price}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>One-time payment</span>
                <span>Valid for 30 days</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center py-3 border-t border-gray-200 dark:border-neutral-700">
              <span className="font-medium text-gray-900 dark:text-white">Amount to pay</span>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white" data-testid="text-price">
                  {plan.currency}{plan.price}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Incl. all taxes</p>
              </div>
            </div>
          </div>

          {/* Payment Methods - Razorpay Style */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">Select Payment Method</p>

            {/* UPI Tab */}
            <div className={`border-2 rounded-lg p-4 mb-3 cursor-pointer transition-all ${tierStyles.primary} bg-opacity-5`}>
              <div className="flex items-start gap-3">
                {/* QR Code */}
                <div className="flex-shrink-0">
                  <div className="bg-white dark:bg-neutral-800 p-1.5 rounded border border-gray-200 dark:border-neutral-700">
                    <QRCodeSVG 
                      value={upiString} 
                      size={80}
                      level="H"
                      includeMargin={false}
                      data-testid="qr-code"
                    />
                  </div>
                </div>

                {/* UPI Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">UPI</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                    Pay instantly using Google Pay, PhonePe, BHIM or any UPI app
                  </p>
                  <div className="bg-white dark:bg-neutral-800 rounded px-2 py-1 inline-block">
                    <p className="text-xs font-mono text-gray-900 dark:text-white">{UPI_ID}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* OR Divider - Razorpay Style */}
            <div className="flex items-center gap-2 my-3">
              <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-800"></div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-800"></div>
            </div>

            {/* Payment Button - Razorpay Style */}
            <button
              onClick={handlePayment}
              className={`w-full ${tierStyles.primary} rounded-lg py-3 px-4 font-semibold text-base flex items-center justify-center gap-2 shadow-md hover-elevate active-elevate-2 transition-all mb-2`}
              data-testid="button-pay-upi"
            >
              <Smartphone className="h-5 w-5" />
              <span>Pay {plan.currency}{plan.price} via UPI</span>
            </button>

            {/* Info Text */}
            <p className="text-xs text-center text-gray-600 dark:text-gray-400 mb-4">
              You will be redirected to your UPI app to complete the payment
            </p>
          </div>

          {/* Features - Razorpay Style */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-3 mb-4">
            <p className="text-xs font-semibold text-blue-900 dark:text-blue-300 mb-2 uppercase">What You Get</p>
            <div className="space-y-1.5">
              {plan.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-2" data-testid={`feature-item-${index}`}>
                  <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Support - Razorpay Style */}
          <div className="bg-gray-50 dark:bg-neutral-900 rounded-lg p-3 border border-gray-200 dark:border-neutral-800">
            <div className="flex items-start gap-2 mb-3">
              <Lock className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-900 dark:text-white">Secure & Encrypted</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">256-bit SSL encryption protects your payment</p>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-neutral-700 pt-3">
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">Need help?</span> Contact support@biswatechsolutions.com
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Razorpay Style */}
      <footer className="border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 py-2 px-4 flex-shrink-0">
        <div className="text-center">
          <p className="text-xs text-gray-600 dark:text-gray-400">
            <span className="font-medium">Powered by</span> Razorpay × Biswa Tech Solutions
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Terms • Privacy • Contact Us
          </p>
        </div>
      </footer>
    </div>
  );
}
