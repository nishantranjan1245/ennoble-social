import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Disclaimer() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-22.jpg" 
              alt="Disclaimer" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/88 via-[#0A8080]/90 to-emerald-800/85"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          <motion.div animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.3, 1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl" />
          <motion.div animate={{ x: [0, -50, 0], y: [0, -40, 0], scale: [1, 1.4, 1] }} transition={{ duration: 14, repeat: Infinity, delay: 1 }} className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl" />
        </div>

        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-300 rounded-full"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -100, 0], opacity: [0, 0.8, 0], scale: [0, 1.5, 0] }}
              transition={{ duration: 7 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <AlertCircle className="w-full h-full text-amber-300" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">Disclaimer</h1>
            <p className="text-xl text-teal-100 mb-2">Ennoble Social Innovation Foundation</p>
            <p className="text-lg text-teal-200">Effective Date: November 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. General Information</h2>
                <p>
                  The information provided on ennoblesocial.org ("the Website") is for general awareness, educational, 
                  and informational purposes only. Ennoble Social Innovation Foundation ("we", "our", "us") makes every 
                  effort to ensure the accuracy of information, but we do not guarantee completeness, reliability, or 
                  absolute accuracy. Users accessing this website do so at their own responsibility.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. No Professional Advice</h2>
                <p className="mb-4">Content on this website does not constitute:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Legal advice</li>
                  <li>Medical advice</li>
                  <li>Professional guidance</li>
                  <li>Emergency assistance</li>
                </ul>
                <p className="mt-4">Users are encouraged to consult qualified professionals for specific advice or support.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. No Legal Liability</h2>
                <p className="mb-4">Ennoble Social Innovation Foundation is not liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Errors or omissions in content</li>
                  <li>Any loss, damage, or inconvenience caused by reliance on website information</li>
                  <li>Technical issues, downtime, or interrupted service</li>
                  <li>Viruses, malware, or harmful components</li>
                </ul>
                <p className="mt-4">Your use of the website is at your own risk.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. External Links Disclaimer</h2>
                <p className="mb-4">
                  Our website may include links to external websites for reference or awareness. We do not control, 
                  endorse, or guarantee:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The accuracy of external content</li>
                  <li>The practices of external websites</li>
                  <li>The availability or security of external resources</li>
                </ul>
                <p className="mt-4">Visiting external links is solely the user's responsibility.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Program & Impact Information</h2>
                <p>
                  All information related to programs, research, impact stories, reports, and success indicators is 
                  presented for transparency and informational purposes. Actual outcomes may vary depending on field 
                  conditions, community engagement, and external factors.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Donations & Financial Disclaimer</h2>
                <p className="mb-4">If the website includes donation options:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Donations are voluntary</li>
                  <li>Contributions are used for programs and charitable activities</li>
                  <li>Refunds, where applicable, follow our Refund / Donation Policy</li>
                  <li>We are not responsible for technical issues in third-party payment gateways</li>
                  <li>We do not guarantee that any specific impact or outcome will result from a donation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Copyright & Usage Disclaimer</h2>
                <p>
                  All content—including text, images, graphics, and materials—is the property of Ennoble Social Innovation 
                  Foundation unless otherwise stated. Unauthorized use, reproduction, or distribution of our content is prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Changes to This Disclaimer</h2>
                <p>
                  We may update this Disclaimer without prior notice. The revised date will always appear at the top of 
                  this page. Users are encouraged to review this page periodically.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <p>
                  For questions or clarifications related to this Disclaimer, contact:
                  <br /><br />
                  <strong>Ennoble Social Innovation Foundation</strong>
                  <br />
                  B/601, B Wing, Runwal Elina<br />
                  Cts No.687/1 to 6, Mehra Compound<br />
                  Kurla West, Mumbai<br />
                  Maharashtra – 400072
                  <br /><br />
                  Email: info@ennoblesocial.org
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}