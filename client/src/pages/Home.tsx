import { CheckCircle2, Zap, BarChart3, Lock, MessageSquare, Users, ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Round Photo_Nov122025_183837_1762953059438_1763803696843.png";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <img src={logoImage} alt="PromotionX" className="h-10 w-10 rounded-full transition-transform group-hover:scale-110" data-testid="logo-header" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 blur transition-opacity"></div>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">PromotionX</span>
          </div>
          <nav className="hidden md:flex items-center gap-12">
            <a href="#features" className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">Features</a>
            <a href="#benefits" className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">Benefits</a>
            <a href="#pricing" className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">Pricing</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Introducing Next-Gen Telegram Automation</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="block mb-4">Automate Your</span>
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 text-transparent bg-clip-text animate-pulse">
                Telegram Empire
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-30 -z-10"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the future of automated messaging. Send personalized messages at scale, manage conversations intelligently, and watch your reach multiply.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              className="relative group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-base font-semibold py-6 px-8 rounded-xl transition-all duration-300 overflow-hidden"
              data-testid="button-get-started"
            >
              <span className="relative z-10 flex items-center gap-2">
                Launch Now <Rocket className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 text-base font-semibold py-6 px-8 rounded-xl transition-all duration-300"
              data-testid="button-learn-more"
            >
              Explore Features <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Floating Cards */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl font-bold text-cyan-400">10K+</div>
              <div className="text-xs text-gray-400">Active Users</div>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl font-bold text-blue-400">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Powerful</span> Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need to dominate Telegram automation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Smart Messaging",
                description: "Send personalized bulk messages with AI-powered templates",
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                icon: Zap,
                title: "Lightning Speed",
                description: "Deliver messages at scale with millisecond response times",
                gradient: "from-cyan-600 to-blue-600"
              },
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Track engagement and conversions with detailed insights",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: Lock,
                title: "Enterprise Security",
                description: "Military-grade encryption and compliance standards",
                gradient: "from-green-600 to-emerald-600"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Work together seamlessly with role-based access",
                gradient: "from-orange-600 to-red-600"
              },
              {
                icon: Sparkles,
                title: "AI Automation",
                description: "Create custom workflows with intelligent automation",
                gradient: "from-indigo-600 to-purple-600"
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">{feature.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
                <span className="block mb-3">Why Choose</span>
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 text-transparent bg-clip-text">PromotionX?</span>
              </h2>

              <div className="space-y-6">
                {[
                  { title: "Lightning Fast", desc: "Instant message delivery with 99.9% uptime guarantee" },
                  { title: "AI Powered", desc: "Smart automation that learns and adapts to your needs" },
                  { title: "Scalable", desc: "Handle millions of messages without performance degradation" },
                  { title: "Secure", desc: "Bank-level encryption and compliance certifications" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get Started in 60 Seconds</h3>
                  <ul className="space-y-4">
                    {[
                      "Create your account",
                      "Connect your Telegram",
                      "Set up automation rules",
                      "Start reaching your audience"
                    ].map((step, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Pricing</span> Plans
            </h2>
            <p className="text-xl text-gray-400">Choose the perfect plan for your scale</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Basic", price: "₹49", badge: "STARTER", color: "from-slate-600 to-slate-700" },
              { name: "Pro", price: "₹99", badge: "POPULAR", color: "from-cyan-600 to-blue-600", popular: true },
              { name: "Standard", price: "₹199", badge: "PROFESSIONAL", color: "from-purple-600 to-pink-600" },
              { name: "Premium", price: "₹399", badge: "ENTERPRISE", color: "from-amber-600 to-orange-600" }
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative group rounded-2xl overflow-hidden transition-all duration-500 ${
                  plan.popular ? "lg:scale-105" : ""
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur`}></div>
                <div className={`relative backdrop-blur-xl bg-white/5 border transition-all duration-500 p-8 h-full flex flex-col ${
                  plan.popular ? "border-white/40 bg-white/10" : "border-white/10 hover:border-white/30"
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-xs font-bold text-white">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-6">
                    {plan.price}
                  </div>
                  <p className="text-gray-400 mb-8 flex-1">Perfect for your needs</p>
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-16">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-10"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Launch?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands automating their Telegram outreach. No credit card required.
            </p>
            <Button
              size="lg"
              className="relative group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-base font-semibold py-6 px-10 rounded-xl transition-all duration-300"
              data-testid="button-start-free"
            >
              Start Free Trial <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-12 text-center text-gray-500">
        <p>&copy; 2025 PromotionX. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
