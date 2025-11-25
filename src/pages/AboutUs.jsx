import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  Scale,
  Lightbulb,
  Target,
  Award,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Eye,
  Flag
} from 'lucide-react';

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

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'Human Dignity',
      description: 'Every life deserves respect and equal treatment.',
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      icon: Scale,
      title: 'Justice & Fairness',
      description: 'Advocate for systems that protect the vulnerable.',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: Users,
      title: 'Equality for All',
      description: 'Promote inclusion across gender, caste, culture, and communities.',
      gradient: 'from-cyan-500 to-teal-600'
    },
    {
      icon: CheckCircle2,
      title: 'Transparency',
      description: 'Work with honesty, integrity, and accountability.',
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      icon: Lightbulb,
      title: 'Social Innovation',
      description: 'Use creativity and research to solve real social challenges.',
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  const whatWeDo = [
    {
      icon: Heart,
      title: 'Human Rights Awareness',
      description: 'Workshops, campaigns, and educational programs to help communities understand their rights.',
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Equality & Anti-Discrimination Efforts',
      description: 'Initiatives challenging gender bias, social exclusion, and discrimination at all levels.',
      color: 'emerald'
    },
    {
      icon: Sparkles,
      title: 'Social Justice Innovation',
      description: 'Developing human-centered tools, resources, and solutions to reduce inequality.',
      color: 'cyan'
    },
    {
      icon: Target,
      title: 'Youth Rights & Leadership',
      description: 'Empowering young people to become active leaders supporting justice and equality.',
      color: 'teal'
    },
    {
      icon: Award,
      title: 'Research & Policy Support',
      description: 'Producing reports and recommendations that promote fair, inclusive systems.',
      color: 'teal'
    }
  ];

  const leadership = [
    { name: 'Chirag Bhandari', role: 'Board Member' },
    { name: 'Kamla Bhandari', role: 'Board Member' },
    { name: 'Narendra Bhandari', role: 'Board Member' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-8.jpg" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/90 via-emerald-900/90 to-teal-900/85"></div>
        </div>
        
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-300 rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
              animate={{ 
                y: [0, -150, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: 8 + Math.random() * 8,
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
              className="mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-teal-100 text-sm font-semibold border border-white/20"
                animate={{ 
                  boxShadow: ['0 0 20px rgba(20, 184, 166, 0.3)', '0 0 40px rgba(20, 184, 166, 0.5)', '0 0 20px rgba(20, 184, 166, 0.3)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Since 2019
              </motion.div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-teal-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building a fair, inclusive, and just society through dedication and innovation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-[#062737]">
              About Ennoble Social Innovation Foundation
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ennoble Social Innovation Foundation is a non-profit organization dedicated to advancing 
                human rights, equality, and social justice. Founded in 2019, our mission is to empower 
                communities, protect human dignity, and promote inclusive development through awareness, 
                research, advocacy, and innovation-driven social solutions.
              </p>
              <p>
                We work with individuals, youth, communities, and partners to create a society where every 
                person has the right to live with freedom, fairness, and equal opportunity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              {...fadeInUp}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#F4B400] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To strengthen human rights, promote equality, and drive social justice by creating awareness, 
                empowering communities, and developing innovative solutions that address systemic challenges.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-2 hover:border-[#F4B400] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A just, inclusive, and equitable world where every individual enjoys dignity, protection, 
                and equal opportunity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#062737]">
              Our Values
            </h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-2 hover:border-[#F4B400] transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#062737]">
              What We Do
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We work across key social-impact areas to promote fairness and inclusion
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="space-y-6"
          >
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-2 hover:border-[#F4B400] transition-all duration-300 hover:-translate-x-2 border-l-4 border-teal-500"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#062737]">
              Leadership
            </h2>
            <p className="text-xl text-gray-700">
              Guided by visionary leaders committed to human rights and inclusive development
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:border-2 hover:border-[#F4B400] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-teal-600 font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <p className="text-lg text-gray-700 font-semibold">Board of Directors</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <Flag className="w-16 h-16 text-[#F4B400] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Our Story & Identity</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                Registered on <span className="text-[#F4B400] font-semibold">4 December 2019</span>, 
                Ennoble Social Innovation Foundation was established to address the growing need for 
                rights awareness, equity, and justice-based innovation in India.
              </p>
              <p>
                Through community engagement, technology, education, and research, we aim to uplift 
                marginalized groups and build a society that is fair, compassionate, and inclusive.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-10 shadow-xl hover:border-2 hover:border-[#F4B400] transition-all duration-300 text-center">
            <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Location</h2>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-900 mb-3">Registered Address:</p>
              <p>B/601, B Wing, Runwal Elina Cts No.687/1 to 6,</p>
              <p>Mehra Compound, Kurla West,</p>
              <p>Mumbai, Maharashtra – 400072</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0b8989]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-xl text-white/90 mb-8">
              Whether you want to volunteer, collaborate, or support our initiatives, 
              your involvement can help shape a more equal and just world.
            </p>
            <Link
              to={createPageUrl('GetInvolved')}
              className="inline-flex items-center px-8 py-4 bg-white text-teal-900 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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