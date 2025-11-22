import { CheckCircle2, Zap, BarChart3, Lock, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Round Photo_Nov122025_183837_1762953059438_1763803696843.png";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-neutral-950 dark:via-blue-950/20 dark:to-neutral-950 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="PromotionX" className="h-8 w-8 rounded-full" data-testid="logo-header" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">PromotionX</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">Features</a>
            <a href="#benefits" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">Benefits</a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">Pricing</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 px-4 py-16 md:py-24 flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full text-center">
          <div className="mb-6 inline-block">
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              Automate Your Telegram Outreach
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Your Telegram <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Automation</span> Partner
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Streamline your Telegram messaging with intelligent automation. Send personalized messages, manage conversations, and scale your outreach effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base"
              data-testid="button-get-started"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 flex-wrap">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>Free Trial Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-16 bg-white dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Everything you need to manage your Telegram presence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 p-6 rounded-xl border border-blue-200 dark:border-blue-900/30">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Smart Messaging</h3>
              <p className="text-gray-600 dark:text-gray-400">Send personalized bulk messages with advanced templating and scheduling</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-xl border border-purple-200 dark:border-purple-900/30">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">Send messages instantly with reliable delivery and zero downtime</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 p-6 rounded-xl border border-amber-200 dark:border-amber-900/30">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">Track delivery, engagement, and conversions with detailed insights</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 p-6 rounded-xl border border-green-200 dark:border-green-900/30">
              <div className="bg-green-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security with encrypted data and compliance</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 p-6 rounded-xl border border-red-200 dark:border-red-900/30">
              <div className="bg-red-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400">Collaborate seamlessly with your team with role-based access</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-900/30">
              <div className="bg-indigo-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Automation Rules</h3>
              <p className="text-gray-600 dark:text-gray-400">Create custom workflows and automate repetitive tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Choose PromotionX?</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Easy to Use</h3>
                    <p className="text-gray-600 dark:text-gray-400">Intuitive interface that requires no technical knowledge</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Affordable Plans</h3>
                    <p className="text-gray-600 dark:text-gray-400">Flexible pricing for startups, agencies, and enterprises</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Expert Support</h3>
                    <p className="text-gray-600 dark:text-gray-400">Dedicated support team available around the clock</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Always Updated</h3>
                    <p className="text-gray-600 dark:text-gray-400">Regular features and improvements based on user feedback</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Get Started in Minutes</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>Sign up for a free account</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>Connect your Telegram account</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span>Start automating your messages</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span>Scale your outreach instantly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-16 bg-white dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Choose the plan that works best for you</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Basic", price: "₹49", features: ["100 messages/day", "Basic features", "Email support"] },
              { name: "Pro", price: "₹99", features: ["500 messages/day", "Advanced automation", "Priority support"], popular: true },
              { name: "Standard", price: "₹199", features: ["Unlimited messages", "AI automation", "API access"], },
              { name: "Premium", price: "₹399", features: ["All features", "Dedicated manager", "Custom integration"] }
            ].map((plan) => (
              <div 
                key={plan.name}
                className={`rounded-xl p-6 flex flex-col ${
                  plan.popular 
                    ? "bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-xl relative" 
                    : "bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className={`text-lg font-semibold mb-2 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <div className={`text-3xl font-bold mb-4 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.price}
                </div>
                <ul className={`space-y-2 mb-6 flex-1 text-sm ${plan.popular ? "text-cyan-50" : "text-gray-600 dark:text-gray-400"}`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Automate?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">Join thousands of users who are already automating their Telegram outreach</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-base"
            data-testid="button-start-free"
          >
            Start Your Free Trial Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-neutral-800 px-4 py-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>&copy; 2025 PromotionX. All rights reserved.</p>
      </footer>
    </div>
  );
}
