import React from 'react';
import { motion } from 'framer-motion';
import { Receipt } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function RefundPolicy() {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [0, -25, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-23.jpg" 
              alt="Refund Policy" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-900/88 to-[#0A8080]/85"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 rounded-full filter blur-3xl"
              style={{ left: `${i * 10}%`, top: `${i % 2 ? '30%' : '70%'}`, background: i % 2 ? '#14b8a6' : '#10b981' }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.6, 0.3], x: [0, 40, 0] }}
              transition={{ duration: 12 + i, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
              animate={{ rotate: [0, 360], scale: [0, 1, 0], opacity: [0, 0.9, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: Math.random() * 5 }}
            >
              <Receipt className="w-5 h-5 text-emerald-200" />
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
              transition={{ duration: 3.5, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <Receipt className="w-full h-full text-amber-300" />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">Refund & Donation Policy</h1>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  Ennoble Social Innovation Foundation ("we", "our", "us") deeply appreciates your support and 
                  contributions toward promoting human rights, equality, and social justice. This policy outlines 
                  how donations are handled and under what circumstances refunds may be provided.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. General Donation Policy</h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>All donations made to Ennoble Social Innovation Foundation are final and non-refundable, except in specific cases mentioned in this policy.</li>
                  <li>Donations are used to support programs, research, awareness activities, community outreach, and operational needs aligned with our mission.</li>
                  <li>We ensure responsible and transparent use of funds.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Eligibility for Refunds</h2>
                <p className="mb-4">Refunds may be considered only under the following limited circumstances:</p>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">✔ A) Duplicate Transaction</p>
                    <p>If a donor accidentally makes a duplicate payment, they may request a refund.</p>
                  </div>
                  <div>
                    <p className="font-semibold">✔ B) Transaction Error</p>
                    <p>If a technical error occurs during payment from the donor's bank, payment gateway, or UPI system.</p>
                  </div>
                  <div>
                    <p className="font-semibold">✔ C) Unauthorized Transaction</p>
                    <p>If a donation was made without the donor's authorization (example: card misuse), subject to verification.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Non-Refundable Situations</h2>
                <p className="mb-4">Refunds cannot be provided in cases such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Change of mind by the donor</li>
                  <li>Funds already allocated or utilized for programs</li>
                  <li>Anonymous donations without proper identification</li>
                  <li>Donations made during special campaigns, events, or emergencies</li>
                  <li>Any request made after the refund window has passed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Refund Request Procedure</h2>
                <p className="mb-4">To request a refund, donors must email us within 7 days of the transaction.</p>
                <p className="mb-4">
                  <strong>Email:</strong> info@ennoblesocial.org<br />
                  <strong>Subject Line:</strong> Refund Request – [Your Name]
                </p>
                <p className="mb-3">Include the following details:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name</li>
                  <li>Date of donation</li>
                  <li>Amount donated</li>
                  <li>Mode of payment (UPI/Bank/Card)</li>
                  <li>Transaction ID / Reference number</li>
                  <li>Reason for refund request</li>
                </ul>
                <p className="mt-4">Our team will verify the request and respond within 7–10 working days.</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Processing of Refunds</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Approved refunds will be processed to the original payment method used for the donation.</li>
                  <li>Refund completion may take 7–15 business days, depending on the bank or payment gateway.</li>
                  <li>Any payment gateway fees or service charges may be deducted.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Tax Exemption Receipts</h2>
                <p>
                  Once a tax-exemption/donation receipt is issued, refund cannot be processed unless it is a verified technical error.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Security & Transaction Safety</h2>
                <p>
                  We use trusted payment gateways and verified channels to ensure safe and secure donation processing. 
                  However, we do not control failures caused by banks, UPI apps, or third-party platforms.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Amendments to This Policy</h2>
                <p>
                  We may update or modify this policy at any time to comply with legal, financial, or organizational changes. 
                  The updated version will always display the "Effective Date."
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p>
                  For donation or refund-related queries, please contact:
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