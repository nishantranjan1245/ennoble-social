import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Heart,
  Users,
  Scale,
  Lightbulb,
  GraduationCap,
  FileText,
  Target,
  Award,
  TrendingUp,
  Handshake,
  Calendar,
  Mail,
  CheckCircle2,
  Sparkles
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

export default function Home() {
  const focusAreas = [
    {
      icon: Heart,
      title: 'Human Rights Awareness',
      description: 'Spreading knowledge about constitutional rights, human dignity, and social protection.',
      gradient: 'from-teal-500 to-emerald-600',
      image: '/image/image-1.jpg'
    },
    {
      icon: Users,
      title: 'Equality & Inclusion',
      description: 'Promoting gender equality, anti-discrimination practices, and inclusive community development.',
      gradient: 'from-emerald-500 to-green-600',
      image: '/image/image-2.jpg'
    },
    {
      icon: Lightbulb,
      title: 'Social Justice Innovation',
      description: 'Developing creative, technology-driven solutions to reduce inequality and strengthen justice.',
      gradient: 'from-violet-500 to-purple-600',
      image: '/image/image-3.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Youth & Community Empowerment',
      description: 'Training young leaders and supporting marginalized groups to participate confidently in society.',
      gradient: 'from-teal-500 to-cyan-600',
      image: '/image/image-4.jpg'
    },
    {
      icon: FileText,
      title: 'Policy & Research',
      description: 'Conducting studies, publishing reports, and driving evidence-based policy improvements.',
      gradient: 'from-violet-500 to-purple-600',
      image: '/image/image-5.jpg'
    }
  ];

  const programs = [
    {
      title: 'Human Rights Awareness Program',
      description: 'Creating workshops, campaigns, and digital education to strengthen rights awareness.',
      icon: Heart,
      color: 'teal',
      image: '/image/image-6.jpg'
    },
    {
      title: 'Equality & Anti-Discrimination Initiative',
      description: 'Working towards fairness by addressing social, cultural, and gender-based discrimination.',
      icon: Scale,
      color: 'emerald',
      image: '/image/image-7.jpg'
    },
    {
      title: 'Social Justice Innovation Lab',
      description: 'Building tools, ideas, and community-based solutions to tackle systemic inequality.',
      icon: Sparkles,
      color: 'cyan',
      image: '/image/image-8.jpg'
    },
    {
      title: 'Youth Rights & Leadership Initiative',
      description: 'Empowering youth with leadership skills, digital rights education, and social awareness.',
      icon: Target,
      color: 'indigo',
      image: '/image/image-9.jpg'
    }
  ];

  const impacts = [
    'Conducted awareness sessions to promote human rights & equality',
    'Supported vulnerable communities through outreach programs',
    'Trained youth on leadership & social responsibility',
    'Developed research insights on justice & inclusion',
    'Built partnerships to promote fair and inclusive development'
  ];

  const updates = [
    'Understanding Human Rights: A Simple Guide',
    'How Equality Strengthens Communities',
    'Innovation for Social Justice — Why It Matters',
    'Upcoming Events & Awareness Campaigns'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-3 gap-2 opacity-40">
            <motion.div 
              className="relative overflow-hidden"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/image/image-10.jpg" 
                alt="Human Rights" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="relative overflow-hidden"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <img 
                src="/image/image-11.jpg" 
                alt="Equality" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="relative overflow-hidden"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <img 
                src="/image/image-12.jpg" 
                alt="Empowerment" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-emerald-900/85 to-cyan-900/85"></div>

          {/* Animated gradient orbs */}
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
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full filter blur-3xl"
            />
          </div>

          {/* Floating Icon Elements */}
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
            <motion.div
              animate={{ 
                y: [0, -35, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 11,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-1/4 left-[20%] w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <Scale className="w-8 h-8 text-cyan-300" />
            </motion.div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -150, 0],
                  x: [0, Math.random() * 120 - 60, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8 + Math.random() * 6,
                  ease: "easeInOut",
                  delay: Math.random() * 5
                }}
                className="absolute rounded-full"
                style={{ 
                  left: `${Math.random() * 100}%`, 
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  background: i % 3 === 0 
                    ? 'linear-gradient(135deg, #14b8a6, #10b981)' 
                    : i % 3 === 1 
                    ? 'linear-gradient(135deg, #06b6d4, #14b8a6)' 
                    : 'linear-gradient(135deg, #10b981, #06b6d4)'
                }}
              />
            ))}
          </div>

          {/* Animated lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5"
                style={{ 
                  width: '100%',
                  top: `${10 + i * 12}%`,
                  background: i % 2 === 0 
                    ? 'linear-gradient(90deg, transparent, #14b8a6, transparent)' 
                    : 'linear-gradient(90deg, transparent, #06b6d4, transparent)'
                }}
                animate={{ 
                  x: ['-100%', '100%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 12 + i * 2,
                  ease: "linear",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>

          {/* Wave patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0"
                style={{ 
                  top: `${30 + i * 20}%`,
                  height: '150px',
                  background: `radial-gradient(ellipse at center, ${
                    i % 3 === 0 ? '#14b8a6' : i % 3 === 1 ? '#06b6d4' : '#10b981'
                  }40, transparent 70%)`
                }}
                animate={{ 
                  scaleX: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10 + i * 3,
                  ease: "easeInOut",
                  delay: i * 2
                }}
              />
            ))}
          </div>
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
              <motion.span 
                className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-teal-100 text-sm font-semibold border border-white/20"
                animate={{ 
                  boxShadow: ['0 0 20px rgba(20, 184, 166, 0.3)', '0 0 40px rgba(20, 184, 166, 0.5)', '0 0 20px rgba(20, 184, 166, 0.3)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Making a Difference Together
              </motion.span>
            </motion.div>

<motion.h1 
  className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>

  {/* Empowering Rights */}
  <motion.span
    className="inline-block"
    animate={{ 
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.05, 1],
      textShadow: [
        '0 0 20px rgba(20, 184, 166, 0.6)',
        '0 0 35px rgba(20, 184, 166, 0.9)',
        '0 0 20px rgba(20, 184, 166, 0.6)'
      ],
    }}
    transition={{ 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    Empowering Rights.
  </motion.span>

  <br />

  {/* Enabling Equality */}
  <motion.span 
    className="inline-block bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent"
    animate={{ 
      scale: [1, 1.07, 1],
      opacity: [0.8, 1, 0.8],
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
    }}
    transition={{ 
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{ backgroundSize: '200% 200%' }}
  >
    Enabling Equality.
  </motion.span>

</motion.h1>


            <motion.p 
              className="text-xl sm:text-2xl text-teal-50 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Ennoble Social Innovation Foundation is dedicated to advancing human rights, equality, 
              and social justice through awareness, innovation, and community empowerment.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={createPageUrl('AboutUs')}
                  className="px-8 py-4 bg-gradient-to-r from-[#F4B400] via-amber-500 to-yellow-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-yellow-500/60 transform transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ 
                      x: ['-100%', '100%']
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10 flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={createPageUrl('GetInvolved')}
                  className="px-8 py-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white/30 hover:shadow-2xl hover:shadow-white/30 transform transition-all duration-300 flex items-center justify-center group"
                >
                  Get Involved
                  <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
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

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
          {/* Decorative shapes */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full filter blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full filter blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, -40, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-100/20 to-emerald-100/20 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`
              }}
              animate={{ 
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            {...fadeInUp} 
            className="text-center"
          >
            {/* Decorative line */}
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-[#062737]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>

            <motion.div
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50 mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Ennoble Social Innovation Foundation is a non-profit organization committed to building 
                a fair, inclusive, and just society. We work to protect human dignity, promote equal 
                opportunity, and support vulnerable communities through education, research, advocacy, 
                and innovation-driven solutions.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={createPageUrl('AboutUs')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full font-semibold text-lg shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transform transition-all duration-300 group"
              >
                Read More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-teal-400 rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
              animate={{ 
                y: [0, -50, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Our Focus Areas
            </motion.h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient}`}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        backgroundColor: "rgba(255, 255, 255, 0.3)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0.9 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-teal-50/30 to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-teal-200 to-emerald-200 rounded-full filter blur-3xl"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
              animate={{ 
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ 
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <motion.h2 
              className="text-4xl font-bold mb-2 text-[#0A8080]"
              animate={{ 
                textShadow: ['0 0 20px rgba(10, 128, 128, 0.2)', '0 0 40px rgba(10, 128, 128, 0.4)', '0 0 20px rgba(10, 128, 128, 0.2)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our Programs
            </motion.h2>
            <p className="text-gray-600">Empowering communities through targeted initiatives</p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-600/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <motion.div 
                      className="w-14 h-14 bg-white/90 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 360,
                        backgroundColor: "rgba(255, 255, 255, 1)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <program.icon className="w-7 h-7 text-[#0A8080]" />
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  className="p-6 bg-white"
                  initial={{ backgroundColor: "#ffffff" }}
                  whileHover={{ backgroundColor: "#f0fdfa" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0A8080] transition-colors">{program.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={createPageUrl('Programs')}
                className="inline-flex items-center px-6 py-3 bg-[#0A8080] text-white rounded-full font-medium hover:bg-[#087070] hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 group"
              >
                View All Programs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-emerald-900 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-10 left-10 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-teal-300 rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
              animate={{ 
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ 
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-4"
              animate={{ 
                textShadow: ['0 0 20px rgba(255, 255, 255, 0.2)', '0 0 40px rgba(255, 255, 255, 0.4)', '0 0 20px rgba(255, 255, 255, 0.2)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Impact Highlights
            </motion.h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                whileHover={{ 
                  scale: 1.03,
                  x: 10,
                  backgroundColor: "rgba(255, 255, 255, 0.25)"
                }}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-teal-300 flex-shrink-0 mt-1 group-hover:text-teal-200" />
                </motion.div>
                <p className="text-lg text-gray-100 group-hover:text-white transition-colors">{impact}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-40 h-40 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full filter blur-2xl"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
              animate={{ 
                scale: [1, 1.5, 1],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Research & Innovation
              </motion.h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We develop and support new approaches to create meaningful social change.
                Our research work includes:
              </p>
              <ul className="space-y-3 mb-8">
                {['Social justice reports', 'Human rights studies', 'Policy recommendations', 'Community-based innovation projects'].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Award className="w-5 h-5 text-emerald-600" />
                    </motion.div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={createPageUrl('Research')}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 group"
                >
                  Explore Research
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="relative"
            >
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-12"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.5)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="text-center relative z-10">
                  <motion.div 
                    className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6"
                    animate={{ 
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <TrendingUp className="w-12 h-12 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-3"
                    animate={{ 
                      textShadow: ['0 0 20px rgba(255, 255, 255, 0.3)', '0 0 40px rgba(255, 255, 255, 0.5)', '0 0 20px rgba(255, 255, 255, 0.3)']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Driving Change
                  </motion.h3>
                  <p className="text-emerald-100 text-xl">Through evidence-based innovation</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 to-emerald-50/30"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Get Involved
            </motion.h2>
            <p className="text-xl text-gray-700 mb-8">
              Become part of the change. You can contribute to a more just and equal society by:
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: Handshake, text: 'Volunteering in our programs', color: 'from-teal-500 to-emerald-600' },
              { icon: Users, text: 'Partnering with us for social initiatives', color: 'from-emerald-500 to-green-600' },
              { icon: Heart, text: 'Supporting our awareness campaigns', color: 'from-cyan-500 to-teal-600' },
              { icon: TrendingUp, text: 'Sharing knowledge and promoting equality', color: 'from-teal-600 to-cyan-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <item.icon className="w-12 h-12 text-teal-600 mx-auto mb-4 group-hover:text-teal-700 transition-colors" />
                </motion.div>
                <p className="text-gray-700 font-medium relative">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={createPageUrl('GetInvolved')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-teal-500/50 transition-all duration-300 group"
              >
                Join Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-300 to-emerald-400 rounded-full filter blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-700 via-emerald-600 to-cyan-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Latest Updates
            </motion.h2>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {updates.map((update, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl p-6 border-2 border-teal-100 hover:border-teal-400 transition-all duration-300 hover:shadow-xl flex items-start space-x-4 group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Calendar className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                </motion.div>
                <p className="text-gray-800 font-medium relative z-10 group-hover:text-teal-900 transition-colors">{update}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={createPageUrl('Updates')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full font-semibold hover:shadow-xl transform transition-all duration-300 group"
              >
                View All Updates
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 bg-gradient-to-br from-[#0A8080] to-[#0D9999] text-white overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%` 
              }}
              animate={{ 
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Have questions, ideas, or collaboration opportunities?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We would love to hear from you.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center px-8 py-3 bg-white text-[#0A8080] rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}