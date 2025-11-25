import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Target, CheckCircle2, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true }
};

export default function Programs() {
  const programs = [
    {
      icon: Heart,
      title: 'Human Rights Awareness Program',
      description: 'We conduct awareness drives, educational workshops, and community sessions to help people understand their fundamental rights and responsibilities. Our goal is to build informed, empowered communities that can stand against injustice and protect human dignity.',
      gradient: 'from-rose-500 to-pink-600',
      features: [
        'Rights education workshops',
        'Awareness campaigns (offline & digital)',
        'Community outreach sessions',
        'Resource materials & guides'
      ]
    },
    {
      icon: Users,
      title: 'Equality & Anti-Discrimination Initiative',
      description: 'This program promotes fairness and equal treatment across gender, caste, class, and identity. We address common forms of discrimination and work to build inclusive environments at home, school, workplace, and society.',
      gradient: 'from-blue-500 to-cyan-600',
      features: [
        'Gender equality',
        'Social & cultural inclusion',
        'Anti-discrimination awareness',
        'Inclusive community dialogue'
      ]
    },
    {
      icon: Sparkles,
      title: 'Social Justice Innovation Lab',
      description: 'A unique initiative driving innovation for social impact. We research problems, co-create solutions, and develop tools that support justice, fairness, and community empowerment.',
      gradient: 'from-purple-500 to-indigo-600',
      features: [
        'Social innovation research',
        'Development of awareness tools',
        'Prototype social solutions',
        'Community-driven innovation models'
      ]
    },
    {
      icon: Target,
      title: 'Youth Rights & Leadership Initiative',
      description: 'We believe youth are key drivers of social change. This program empowers young people with knowledge, leadership skills, and digital rights awareness to become advocates for equality and justice.',
      gradient: 'from-amber-500 to-orange-600',
      features: [
        'Youth leadership training',
        'Digital rights & safety education',
        'Campus campaigns',
        'Advocacy for equality & inclusion'
      ]
    },
    {
      icon: Handshake,
      title: 'Community Outreach & Support Program',
      description: 'Supporting vulnerable and marginalized groups through targeted interventions and community engagement. We work to ensure that every individual feels safe, supported, and informed about their rights.',
      gradient: 'from-teal-500 to-emerald-600',
      features: [
        'Community helpdesks',
        'Support for at-risk groups',
        'Local awareness events',
        'Collaboration with local leaders'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 1, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-13.jpg" 
              alt="Programs" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/85 via-teal-900/90 to-emerald-900/85"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.4, 1]
            }}
            transition={{ duration: 13, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl"
          />
        </div>

        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              animate={{ 
                textShadow: ['0 0 20px rgba(255,255,255,0.3)', '0 0 40px rgba(255,255,255,0.5)', '0 0 20px rgba(255,255,255,0.3)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our Programs
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-teal-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Empowering communities through targeted social initiatives focused on human rights, equality, and justice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...staggerContainer}
            className="space-y-16"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`bg-gradient-to-br ${program.gradient} p-12 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <program.icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">{program.title}</h3>
                    </div>
                  </div>
                  <div className="p-12">
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-xl text-gray-700 leading-relaxed">
              Ennoble Social Innovation Foundation runs community-centered programs focused on promoting human rights, 
              equality, social justice, and inclusive development. Each initiative is designed to empower individuals, 
              support vulnerable groups, and create long-term, sustainable social impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Our Programs Matter */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Why Our Programs Matter</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Strengthen awareness of human rights',
              'Reduce discrimination and inequality',
              'Empower youth & local communities',
              'Support vulnerable groups',
              'Promote justice and fairness',
              'Encourage innovation for social change'
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <CheckCircle2 className="w-6 h-6 text-amber-300 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-100">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b8989]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">Be Part of the Change</h2>
            <p className="text-xl text-white/90 mb-8">
              Your support helps us reach more communities and create lasting impact. Join us in building a society 
              where every person enjoys dignity, equality, and justice.
            </p>
            <Link
              to={createPageUrl('GetInvolved')}
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}