import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper, Award, Users, TrendingUp, BookOpen } from 'lucide-react';

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

export default function Updates() {
  const updates = [
    {
      title: 'Understanding Human Rights: A Simple Guide',
      date: '2025-01-15',
      category: 'Education',
      description: 'A beginner-friendly guide explaining basic human rights, why they matter, and how communities can protect them.',
      color: 'blue'
    },
    {
      title: 'How Equality Strengthens Communities',
      date: '2025-01-10',
      category: 'Research',
      description: 'Exploring the importance of gender equality, social inclusion, and fair opportunities in building strong societies.',
      color: 'purple'
    },
    {
      title: 'Innovation in Social Justice: Why It Matters',
      date: '2025-01-05',
      category: 'Innovation',
      description: 'How new tools, research, and creative ideas can help fight inequality and enable positive social change.',
      color: 'amber'
    },
    {
      title: 'Digital Rights & Online Safety for Youth',
      date: '2024-12-28',
      category: 'Digital Rights',
      description: 'A practical awareness piece on privacy, online behaviour, cyber safety, and digital responsibility.',
      color: 'teal'
    }
  ];

  const newsItems = [
    {
      icon: Users,
      title: 'Community Awareness Drives',
      description: 'Ongoing workshops and field sessions focused on rights education, equality, and community empowerment.'
    },
    {
      icon: TrendingUp,
      title: 'Youth Leadership Activities',
      description: 'Training events and youth-oriented programs to develop leadership skills and promote inclusion.'
    },
    {
      icon: Award,
      title: 'New Research & Publications',
      description: 'Updates on newly published reports, research papers, and policy recommendations.'
    },
    {
      icon: Calendar,
      title: 'Upcoming Events & Campaigns',
      description: 'Information on upcoming awareness events, social justice campaigns, and community outreach initiatives.'
    }
  ];

  const stories = [
    'Empowering Communities Through Awareness',
    'Youth Leading Change',
    'Reducing Social Barriers Through Dialogue'
  ];

  const categoryColors = {
    blue: 'from-blue-500 to-cyan-600',
    purple: 'from-purple-500 to-indigo-600',
    amber: 'from-amber-500 to-orange-600',
    rose: 'from-rose-500 to-pink-600',
    teal: 'from-teal-500 to-emerald-600'
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <img 
              src="/image/image-17.jpg" 
              alt="News Updates" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8080]/85 via-teal-800/90 to-emerald-900/85"></div>
        </div>
        
        <div className="absolute inset-0 opacity-30">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`
              }}
              animate={{ 
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-full h-full bg-teal-400 rounded-full filter blur-3xl"></div>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`
              }}
              animate={{ 
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <Calendar className="w-6 h-6 text-teal-200" />
            </motion.div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <Calendar className="w-full h-full text-teal-300" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Latest Updates
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-teal-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Stay informed with our latest news, articles, campaigns, and research insights on human rights, equality, and social justice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-br from-white to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our updates cover topics related to human rights, equality, social justice, youth empowerment, 
              digital rights, and ongoing community initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Latest Articles
            </h2>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="space-y-8"
          >
            {updates.map((update, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                  <div className={`bg-gradient-to-br ${categoryColors[update.color]} p-8 flex flex-col items-center justify-center text-center`}>
                    <Calendar className="w-12 h-12 text-white mb-4" />
                    <span className="text-white font-bold text-lg">{update.category}</span>
                    <span className="text-white/80 text-sm mt-2">
                      {new Date(update.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {update.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {update.description}
                    </p>
                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group-hover:translate-x-2 transition-all">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News & Announcements */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              News & Announcements
            </h2>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Featured Stories
            </h2>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stories.map((story, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <BookOpen className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{story}</h3>
                <p className="text-sm text-gray-600 mb-4">Highlights from field programs showing real impact</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                  View Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...fadeInUp} className="text-center mt-8">
            <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center text-lg">
              View All Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Reports & Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <Award className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-purple-700 to-amber-600 bg-clip-text text-transparent">
              Reports & Insights
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We publish research-based insights to support fair, inclusive, and informed decision-making.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Human rights research summaries', 'Equality & inclusion reports', 'Social justice analysis', 'Youth & community insights', 'Impact assessments'].map((item, index) => (
                <span key={index} className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <Link
              to={createPageUrl('Research')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Research
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="bg-gradient-to-br from-teal-900 via-teal-900 to-teal-900 rounded-3xl p-12 text-center text-white shadow-2xl">
            <Award className="w-16 h-16 text-amber-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to our newsletter to receive the latest updates on our programs, research, and impact stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-amber-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}