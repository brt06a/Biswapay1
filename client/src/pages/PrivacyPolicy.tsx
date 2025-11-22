import logoImage from "@assets/Round Photo_Nov122025_183837_1762953059438_1763803696843.png";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="PromotionX" className="h-10 w-10 rounded-full" />
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent bg-clip-text">PromotionX</span>
          </Link>
        </div>
      </header>

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <h1 className="text-5xl font-black text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">1. Introduction</h2>
              <p>PromotionX ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site</li>
                <li>Financial Data: Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase</li>
                <li>Data From Social Networks: User information from social networks, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts</li>
                <li>Mobile Device Data: Device information such as your mobile device ID, model, and manufacturer, and information about the location of your device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Generate a personal profile about you so that future visits to the Site will be personalized as possible</li>
                <li>Increase the efficiency and operation of the Site</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
                <li>Notify you of updates to the Site</li>
                <li>Offer new products, services, and/or recommendations to you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">4. Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>By Law or to Protect Rights: If we believe the release of information is necessary to comply with the law</li>
                <li>Third-Party Service Providers: We may share your information with parties who provide us with business services, including but not limited to payment processors, data analyzers, email delivery services, hosting providers, customer service, and analytics providers</li>
                <li>Business Transfers: If we are involved in a merger, acquisition, or asset sale, your information may be transferred</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">5. Security of Your Information</h2>
              <p>We use administrative, technical, and physical security measures to protect your personal information. However, perfect security cannot be guaranteed.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <p className="mt-4 font-semibold">Email: <a href="mailto:biswatechsolution@gmail.com" className="text-blue-400 hover:text-cyan-400">biswatechsolution@gmail.com</a></p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">7. Changes to This Privacy Policy</h2>
              <p>PromotionX reserves the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy.</p>
            </section>

            <section className="pt-8 border-t border-white/10 mt-8">
              <p className="text-gray-500 text-sm">Last Updated: November 22, 2025</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
