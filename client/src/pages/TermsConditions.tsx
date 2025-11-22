import logoImage from "@assets/Round Photo_Nov122025_183837_1762953059438_1763803696843.png";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TermsConditionsPage() {
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

          <h1 className="text-5xl font-black text-white mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on PromotionX's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Violate any applicable laws or regulations related to the access to or use of the Site</li>
                <li>Harass or cause distress or inconvenience to any person</li>
                <li>Offend the decency of Internet by transmitting obscene or offensive content</li>
                <li>Disrupt the normal flow of dialogue within the Site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p>The materials on PromotionX's website are provided on an 'as is' basis. PromotionX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">4. Limitations</h2>
              <p>In no event shall PromotionX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on PromotionX's website, even if PromotionX or a PromotionX authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
              <p>The materials appearing on PromotionX's website could include technical, typographical, or photographic errors. PromotionX does not warrant that any of the materials on its website are accurate, complete, or current. PromotionX may make changes to the materials contained on its website at any time without notice.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">6. Links</h2>
              <p>PromotionX has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by PromotionX of the site. Use of any such linked website is at the user's own risk.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">7. Modifications</h2>
              <p>PromotionX may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">8. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-4">9. Contact Information</h2>
              <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
              <p className="mt-4 font-semibold">Email: <a href="mailto:biswatechsolution@gmail.com" className="text-blue-400 hover:text-cyan-400">biswatechsolution@gmail.com</a></p>
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
