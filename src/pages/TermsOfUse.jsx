import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function TermsOfUse() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-21.jpg" 
              alt="Terms" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/88 via-emerald-900/90 to-teal-800/85"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: `${150 + Math.random() * 150}px`, height: `${150 + Math.random() * 150}px` }}
              animate={{ rotate: [0, 360], scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 15 + i * 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full bg-emerald-400 rounded-full filter blur-3xl"></div>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ scale: [0, 1.5, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: Math.random() * 5 }}
            >
              <FileText className="w-6 h-6 text-emerald-200" />
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
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <FileText className="w-full h-full text-emerald-300" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">Terms of Use</h1>
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
                  Welcome to <strong>ennoblesocial.org</strong>, the official website of Ennoble Social Innovation 
                  Foundation ("we", "our", "us"). By accessing or using this website, you agree to comply with and 
                  be bound by these Terms of Use.
                </p>
                <p className="mt-4">
                  If you do not agree with any part of these terms, please do not use our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Use of Website</h2>
                <p className="mb-4">You agree to use this website only for lawful purposes and in a manner that does not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any local, national, or international laws</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Harm or interfere with the website's functionality</li>
                  <li>Spread harmful content, spam, or malware</li>
                </ul>
                <p className="mt-4">We reserve the right to restrict or block access if misuse is detected.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                <p className="mb-4">
                  All content on this website—including text, logos, graphics, images, reports, and design—is the 
                  property of Ennoble Social Innovation Foundation unless stated otherwise.
                </p>
                <p className="mb-4">You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copy</li>
                  <li>Distribute</li>
                  <li>Modify</li>
                  <li>Reproduce</li>
                  <li>Publish</li>
                  <li>Sell</li>
                </ul>
                <p className="mt-4">any content without written permission from us.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. User Submissions</h2>
                <p className="mb-4">When you submit information (via forms, email, volunteer applications, etc.), you agree that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The information is true and accurate</li>
                  <li>You have permission to share it</li>
                  <li>We may use it for communication or program-related purposes</li>
                  <li>We may store it in accordance with our Privacy Policy</li>
                </ul>
                <p className="mt-4">We do not accept responsibility for misleading, inaccurate, or incomplete user submissions.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Third-Party Links</h2>
                <p className="mb-4">
                  Our website may contain links to external websites. We do not control these websites and are not 
                  responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Their content</li>
                  <li>Their privacy practices</li>
                  <li>Their security</li>
                </ul>
                <p className="mt-4">You access third-party websites at your own risk.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
                <p className="mb-4">
                  Our website is provided on an "as is" and "as available" basis. We do not guarantee that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The website will always be available</li>
                  <li>Content is always error-free or updated</li>
                  <li>The site will be free from viruses, malware, or interruptions</li>
                </ul>
                <p className="mt-4">Users are responsible for ensuring security on their own devices.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">Ennoble Social Innovation Foundation is not liable for any:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Losses</li>
                  <li>Damages</li>
                  <li>Errors</li>
                  <li>Downtime</li>
                  <li>Data loss</li>
                  <li>Technical issues</li>
                  <li>Indirect or consequential damages</li>
                </ul>
                <p className="mt-4">arising from the use or inability to use this website. Your use of this site is at your own risk.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Donations & Payments (If Applicable)</h2>
                <p className="mb-4">If donation or payment options are available:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All payments must be made through trusted, authorized channels</li>
                  <li>Refunds, if any, will follow our Refund / Donation Policy</li>
                  <li>We are not responsible for issues arising from third-party payment platforms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Privacy</h2>
                <p>
                  Your use of this website is also governed by our Privacy Policy. Please review it to understand 
                  how your personal data is collected and used.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p>
                  We may update these Terms of Use at any time without prior notice. The updated version will always 
                  include the "Effective Date." Continued use of the website indicates acceptance of updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Termination of Access</h2>
                <p className="mb-4">We reserve the right to suspend or terminate access to any user who:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violates these terms</li>
                  <li>Interferes with website operations</li>
                  <li>Engages in unlawful or harmful activities</li>
                </ul>
                <p className="mt-4">Termination may occur without prior notice.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p>
                  These Terms of Use are governed by and interpreted in accordance with the laws of India. 
                  Any disputes will fall under the jurisdiction of courts in Mumbai, Maharashtra.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p>
                  The content, organization, graphics, design, and other matters related to the Site are protected under 
                  applicable copyrights and other proprietary laws. Copying, redistribution, or publication of any such 
                  matters is strictly prohibited without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                <p>
                  The materials on our Site are provided "as is." We make no warranties, expressed or implied, and 
                  hereby disclaim all other warranties, including implied warranties or conditions of merchantability, 
                  fitness for a particular purpose, or non-infringement of intellectual property.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitations</h2>
                <p>
                  In no event shall Ennoble Social Innovation Foundation or its suppliers be liable for any damages 
                  arising out of the use or inability to use the materials on our Site.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Modifications</h2>
                <p>
                  We may revise these Terms of Use at any time without notice. By using this Site, you agree to be 
                  bound by the current version of these Terms of Use.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
                <p className="mb-4">For questions related to these Terms of Use, please contact:</p>
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