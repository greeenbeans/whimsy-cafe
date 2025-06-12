'use client';
import '../../app/globals.css';

import { motion } from 'framer-motion';
import { Clock, Heart, Users } from 'lucide-react';

function About() {
  const features = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every item on our menu is crafted with passion and attention to detail.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description:
        'Whimsy Cafe is more than a cafe shop - we are a gathering place where neighbors become friends and memories are made.',
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description:
        'Our pastries are baked fresh every morning, and our tea is brewed to order to ensure peak freshness.',
    },
  ];

  return (
    <div className="section-container">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Whimsy Cafe is more than a cafe - we are a gathering place where neighbors become
            friends and memories are made.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="about-feature"
          >
            <feature.icon className="about-feature-icon" />
            <h3 className="about-feature-title">{feature.title}</h3>
            <p className="about-feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
