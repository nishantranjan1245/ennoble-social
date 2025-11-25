import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function PrivacyPolicy() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-20.jpg" 
              alt="Privacy" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/90 via-teal-900/88 to-emerald-900/85"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-teal-400 rounded-full filter blur-3xl"
              style={{ left: `${i * 20}%`, top: `${i % 2 ? '20%' : '60%'}` }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ y: [0, -80, 0], opacity: [0, 1, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
            >
              <Shield className="w-5 h-5 text-teal-200" />
            </motion.div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <Shield className="w-full h-full text-teal-300" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-teal-100">Effective Date: November 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  Ennoble Social Innovation Foundation ("we", "our", "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, store, and protect your personal information when 
                  you visit our website, engage with our programs, communicate with us, or submit any details through 
                  forms or email.
                </p>
                <p className="mt-4">
                  By using our website <strong>ennoblesocial.org</strong>, you agree to the terms outlined in this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect information in the following ways:</p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">A) Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>Messages sent through contact forms</li>
                  <li>Volunteer or partnership application details</li>
                  <li>Donation-related information (if applicable)</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">B) Automatically Collected Information</h3>
                <p className="mb-3">When you visit our website, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                  <li>Time spent on site</li>
                  <li>Cookies & analytics data</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">C) Third-Party Tools</h3>
                <p className="mb-3">We may use trusted third-party tools for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analytics (e.g., Google Analytics)</li>
                  <li>Email communication</li>
                  <li>Payment processing (if donation system enabled)</li>
                </ul>
                <p className="mt-3">These tools may collect anonymous usage data.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries</li>
                  <li>Process volunteer or partnership requests</li>
                  <li>Share updates, newsletters, or announcements</li>
                  <li>Improve our website and user experience</li>
                  <li>Maintain internal records</li>
                  <li>Process donations and send receipts (if applicable)</li>
                  <li>Enhance awareness, outreach, and program engagement</li>
                </ul>
                <p className="mt-4">
                  <strong>We do not sell, rent, or share your personal information with unauthorized third parties.</strong>
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Cookies & Tracking Technologies</h2>
                <p className="mb-4">Our website may use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve site performance</li>
                  <li>Remember preferences</li>
                  <li>Analyze site traffic</li>
                  <li>Provide better user experience</li>
                </ul>
                <p className="mt-4">You can disable cookies through your browser settings.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Protection & Security</h2>
                <p className="mb-4">We implement industry-standard security measures to protect your information from:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Unauthorized access</li>
                  <li>Loss</li>
                  <li>Misuse</li>
                  <li>Alteration</li>
                </ul>
                <p className="mt-4">However, no online platform is 100% secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Sharing of Information</h2>
                <p className="mb-4">We may share information only in the following cases:</p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">A) With Your Consent</h3>
                <p>If you request information, sign up, or volunteer.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">B) For Legal Compliance</h3>
                <p>If required by law, court order, or government authority.</p>

                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">C) With Service Providers</h3>
                <p>Trusted partners who help us operate the website, process email, or manage secure donations.</p>
                <p className="mt-3">All third-party partners follow strict confidentiality rules.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. External Links</h2>
                <p>
                  Our website may contain links to external sites. We are not responsible for the privacy practices, 
                  content, or security of those websites. We encourage you to read their privacy policies separately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                <p>
                  We do not knowingly collect personal information from children under 13 years of age. If you believe 
                  a child has provided information, please contact us and we will remove it immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Your Rights</h2>
                <p className="mb-4">Depending on your region, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request correction or deletion</li>
                  <li>Opt-out of emails or communication</li>
                  <li>Withdraw consent</li>
                  <li>Ask how your data is being used</li>
                </ul>
                <p className="mt-4">To request any of these actions, contact us at: info@ennoblesocial.org</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Data Retention</h2>
                <p className="mb-4">We retain your personal information only as long as necessary for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Program-related communication</li>
                  <li>Legal compliance</li>
                  <li>Operational needs</li>
                </ul>
                <p className="mt-4">After this period, data is securely deleted.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will always include the 
                  "Effective Date". We encourage you to review this page periodically.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                <p className="mb-4">
                  If you have questions or concerns about this Privacy Policy, please contact:
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <p className="font-semibold text-gray-900">Ennoble Social Innovation Foundation</p>
                  <p className="text-gray-700 mt-2">
                    B/601, B Wing, Runwal Elina Cts No.687/1 to 6,<br />
                    Mehra Compound, Kurla West,<br />
                    Mumbai, Maharashtra – 400072
                  </p>
                  <p className="text-gray-700 mt-3">
                    <strong>Email:</strong> <a href="mailto:info@ennoblesocial.org" className="text-blue-600 hover:text-blue-700">info@ennoblesocial.org</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}