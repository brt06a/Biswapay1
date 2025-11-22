import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Smartphone, Lock, ArrowRight } from "lucide-react";
import { paymentPlans, generateUPIString, UPI_ID } from "@shared/payment-plans";
import logoImage from "@assets/generated_images/biswa_tech_solutions_logo.png";

interface PaymentPlanPageProps {
  planId: string;
}

export default function PaymentPlanPage({ planId }: PaymentPlanPageProps) {
  const plan = paymentPlans.find(p => p.id === planId);

  if (!plan) {
    return <div className="h-screen flex items-center justify-center"><p>Plan not found</p></div>;
  }

  const upiString = generateUPIString(plan.price);
  const handlePayment = () => { window.location.href = upiString; };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white dark:from-neutral-950 to-gray-50 dark:to-neutral-900 flex flex-col">
      
      {/* Header */}
      <header className="bg-white dark:bg-neutral-950 border-b border-gray-200 dark:border-neutral-800 py-3 px-4">
        <div className="max-w-lg mx-auto flex items-center gap-2">
          <img src={logoImage} alt="Biswa Tech" className="h-5 w-auto" data-testid="logo-image" />
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Biswa Tech</span>
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
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 p-4 rounded-xl mb-4">
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
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-4 px-4 font-bold text-base flex items-center justify-center gap-2 shadow-lg hover-elevate active-elevate-2 transition-all mb-6"
            data-testid="button-pay-upi"
          >
            <Smartphone className="h-5 w-5" />
            <span>Pay Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Security Info */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-blue-900 dark:text-blue-300">Your payment is secure</p>
                <p className="text-xs text-blue-700 dark:text-blue-400">256-bit encryption protects your data</p>
              </div>
            </div>
          </div>

          {/* Plan Benefits */}
          <div className="mb-4">
            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">Includes</p>
            <div className="space-y-2">
              {plan.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`feature-item-${index}`}>
                  <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800 py-3 px-4">
        <div className="text-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Powered by Biswa Tech Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
