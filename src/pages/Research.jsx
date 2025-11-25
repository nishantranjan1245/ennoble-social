import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { FileText, Award, TrendingUp, Users, Lightbulb, Target, Download, Handshake, ArrowRight, BookOpen, Shield, Smartphone, Sparkles } from 'lucide-react';

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

export default function Research() {
  const researchAreas = [
    {
      icon: Shield,
      title: 'Human Rights Studies',
      description: 'Analyzing rights awareness, accessibility, violations, and community-level challenges to strengthen protection and dignity for all.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Equality & Inclusion Research',
      description: 'Understanding gender disparities, social exclusion, and discrimination across various groups and communities.',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Target,
      title: 'Justice System & Policy Studies',
      description: 'Evaluating systemic barriers and recommending policy improvements that promote fairness and accountability.',
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      icon: Smartphone,
      title: 'Digital Rights & Access Research',
      description: 'Studying online safety, privacy, and the digital divide—especially among youth and vulnerable groups.',
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const innovationAreas = [
    'Social awareness tools',
    'Human rights education resources',
    'Community-based support models',
    'Digital learning & safety tools',
    'Research-backed advocacy campaigns'
  ];

  const publications = [
    'Human Rights Reports',
    'Equality & Inclusion Studies',
    'Social Justice Analysis',
    'Youth Rights & Digital Safety Guides',
    'Community Impact Assessments'
  ];

  const policyAreas = [
    'Human rights protection',
    'Social inclusion',
    'Youth & education systems',
    'Online safety & privacy',
    'Community justice and support mechanisms'
  ];

  const innovationProjects = [
    'Rights awareness toolkits',
    'Digital rights literacy campaigns',
    'Inclusive leadership modules',
    'Community justice support models'
  ];

  const approach = [
    {
      title: 'Evidence-Based Research',
      description: 'Using data and rigorous methodology to understand social issues'
    },
    {
      title: 'Community Participation',
      description: 'Involving affected communities in research design and implementation'
    },
    {
      title: 'Innovative Solutions',
      description: 'Developing creative approaches to address systemic challenges'
    },
    {
      title: 'Policy Impact',
      description: 'Translating research findings into actionable policy recommendations'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-14.jpg" 
              alt="Research" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/90 via-emerald-800/85 to-teal-900/90"></div>
        </div>
        
        <div className="absolute inset-0 opacity-25">
          <motion.div
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl"
          />
        </div>

        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-8 bg-gradient-to-b from-teal-300 to-transparent"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`
              }}
              animate={{ 
                opacity: [0, 0.6, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{ 
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <Lightbulb className="w-full h-full text-teal-300" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Research & Innovation
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-teal-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Developing evidence-based approaches and innovative solutions to advance human rights, equality, and social justice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At Ennoble Social Innovation Foundation, we believe that evidence-based research and creative 
              innovation are powerful tools for building a fair, inclusive, and just society.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our Research & Innovation initiatives are designed to create meaningful knowledge, develop practical 
              solutions, and support communities through informed, data-driven action. We work to understand social 
              challenges, explore root causes, and develop human-centered innovations that support equality and justice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Our Research Focus
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovation for Social Justice */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Innovation for Social Justice
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We design, test, and implement innovative models that help solve real-world social problems. 
              Our innovations focus on technology, education, and community empowerment.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Innovation Areas Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {innovationAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications & Reports */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
                Publications & Reports
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We regularly create reports, guides, and research summaries that help policymakers, educators, 
                and communities act on critical issues.
              </p>
              <div className="space-y-3 mb-8">
                {publications.map((pub, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{pub}</span>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Publications
              </button>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
                Policy Recommendations
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Based on evidence and field insights, we provide recommendations to help strengthen public 
                systems and institutions. Our goal is to support transparent, fair, and inclusive governance.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Areas Include:</h3>
                <ul className="space-y-3">
                  {policyAreas.map((area, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Innovation Projects
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We collaborate with communities, youth groups, experts, and partners to co-create innovative 
              projects that address emerging social challenges.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {innovationProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <Award className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-gray-800 font-medium">{project}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <Handshake className="w-16 h-16 text-amber-300 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Research and innovation thrive on collaboration. We invite institutions, organizations, 
              and individuals to work with us on research, studies, and social justice projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl('Contact')}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl('Programs')}
                className="inline-flex items-center px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}