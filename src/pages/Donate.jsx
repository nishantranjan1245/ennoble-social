import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Target, CheckCircle2, CreditCard } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function Donate() {
  const impacts = [
    {
      icon: Users,
      title: 'Run human rights awareness workshops',
      description: 'Help communities understand their rights and responsibilities through comprehensive education programs.'
    },
    {
      icon: Award,
      title: 'Promote equality & anti-discrimination efforts',
      description: 'Support initiatives that challenge bias and build inclusive environments across all sections of society.'
    },
    {
      icon: Target,
      title: 'Empower youth through leadership programs',
      description: 'Provide young people with skills, knowledge, and platforms to become advocates for justice and equality.'
    },
    {
      icon: Heart,
      title: 'Develop social justice research & innovation tools',
      description: 'Create evidence-based solutions and tools that address systemic inequality and strengthen justice systems.'
    },
    {
      icon: Users,
      title: 'Reach vulnerable and marginalized communities',
      description: 'Ensure that those most in need receive support, awareness, and access to resources and protection.'
    },
    {
      icon: CheckCircle2,
      title: 'Build safe, inclusive, and fair environments',
      description: 'Create spaces where every individual feels valued, protected, and empowered to participate fully in society.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-19.jpg" 
              alt="Donation" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/85 via-emerald-900/88 to-teal-900/85"></div>
        </div>

        <div className="absolute inset-0 opacity-30">
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full filter blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, -50, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full filter blur-3xl"
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-[10%] w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Heart className="w-8 h-8 text-teal-300" />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 40, 0],
              rotate: [0, -360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 12,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-[15%] w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Users className="w-8 h-8 text-emerald-300" />
          </motion.div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -120, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 10 + Math.random() * 8,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
              className="absolute w-1 h-1 bg-teal-300 rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-16 h-16 text-[#F4B400] mx-auto mb-6" fill="currentColor" />
              </motion.div>
              <motion.span 
                className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-teal-100 text-sm font-semibold border border-white/20"
                animate={{ 
                  boxShadow: ['0 0 20px rgba(20, 184, 166, 0.3)', '0 0 40px rgba(20, 184, 166, 0.5)', '0 0 20px rgba(20, 184, 166, 0.3)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Your Support Creates Change
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Donate & Make
              <br />
              <motion.span 
                className="bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                an Impact
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-teal-50 mb-6 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your contribution helps us create a society where every individual enjoys dignity, equality, and justice.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Together, we can bring real, meaningful change through human rights education, equality awareness, 
              and community empowerment programs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="px-8 py-4 bg-[#F4B400] text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Donate Now
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#062737]">
              Why Your Donation Matters
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              Your support helps us strengthen our ability to serve more communities.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every contribution strengthens our ability to serve more communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-2 hover:border-[#F4B400] transition-all duration-300 hover:-translate-y-2"
              >
                <impact.icon className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{impact.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-[#062737]">
              How Your Donation Helps
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { amount: '₹500', impact: 'Supports rights education material for a community' },
              { amount: '₹1,000', impact: 'Helps run an equality awareness session' },
              { amount: '₹2,500', impact: 'Supports a youth leadership workshop' },
              { amount: '₹5,000', impact: 'Contributes to social justice innovation tools' }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-xl p-6 text-center border-2 border-teal-200 hover:border-[#F4B400] transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl font-bold text-teal-700 mb-3">{item.amount}</div>
                <p className="text-gray-700">{item.impact}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-8">
            <p className="text-lg text-gray-700">
              <strong>Custom Amount</strong> – Fund any initiative you care about
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#062737]">
              Donation Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-2 hover:border-[#F4B400] transition-all duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">One-Time Donation</h3>
                <p className="text-gray-700">Support any ongoing program or initiative</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-2 hover:border-[#F4B400] transition-all duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Monthly Contribution</h3>
                <p className="text-gray-700">Become a sustaining supporter and help us create long-term impact</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-2 hover:border-[#F4B400] transition-all duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign-Specific</h3>
                <p className="text-gray-700">Choose a campaign you believe in and support it directly</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-white rounded-3xl shadow-2xl p-10">
            <div className="text-center mb-10">
              <CreditCard className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-[#062737]">
                Make Your Donation
              </h2>
              <p className="text-gray-700">
                Choose an amount or enter a custom donation
              </p>
            </div>

            <div className="space-y-8">
              {/* Donation Amounts */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['₹500', '₹1,000', '₹2,500', '₹5,000'].map((amount, index) => (
                  <button
                    key={index}
                    className="py-4 px-6 border-2 border-teal-600 text-teal-600 rounded-xl font-bold hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Or Enter Custom Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter amount in ₹"
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all text-lg"
                />
              </div>

              {/* Donor Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>

              {/* Tax Benefit Info */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    <strong>Tax Benefits:</strong> Your donation is eligible for tax deduction under 
                    Section 80G of the Income Tax Act. You will receive a receipt for your donation.
                  </p>
                </div>
              </div>

              {/* Donate Button */}
              <button className="w-full py-4 bg-[#F4B400] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                Donate Now
              </button>

              <p className="text-center text-sm text-gray-600">
                Your donation is secure and encrypted. We value your trust and privacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency & Trust */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-[#062737]">
              Transparency & Trust
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Ennoble Social Innovation Foundation ensures complete transparency in the use of all donations. 
              Funds directly support human rights, equality, and social justice initiatives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Annual reports available on request',
                'Fund utilization transparency',
                'Compliant with NGO standards and regulations'
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:border-2 hover:border-[#F4B400] transition-all duration-300">
                  <CheckCircle2 className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#062737]">
              Donation Methods
            </h2>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bank Transfer</h3>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6">
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Account Name:</strong> Ennoble Social Innovation Foundation</p>
                    <p><strong>Bank:</strong> [Contact us for details]</p>
                    <p><strong>Account Number:</strong> [Contact us for details]</p>
                    <p><strong>IFSC Code:</strong> [Contact us for details]</p>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Please email us at <a href="mailto:info@ennoblesocial.org" className="text-blue-600 hover:text-blue-700">info@ennoblesocial.org</a> after making a bank transfer to receive your donation receipt.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['UPI', 'Razorpay', 'PayPal', 'QR Code'].map((method, index) => (
                  <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
                    <CreditCard className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-700">{method}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Become a Change Supporter</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join hands with us to build an equal, just, and empowered society. 
              Every donation—big or small—creates a lasting difference.
            </p>
            <button className="px-10 py-4 bg-[#F4B400] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center">
              <Heart className="w-6 h-6 mr-2" fill="currentColor" />
              Donate Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}