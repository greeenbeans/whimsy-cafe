'use client';

import '@/app/globals.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface HeroProps {
  onExplore: () => void;
}

function Hero({ onExplore }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavender-200 rounded-full opacity-30 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-rose-200 rounded-full opacity-40 blur-lg"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-sage-200 rounded-full opacity-25 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-light text-gray-800 mb-6">
            Bloom
            <span className="block text-4xl md:text-5xl text-lavender-600 font-normal">Cafe</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Where every cup tells a story and every moment blooms with flavor
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={onExplore}
              className="bg-lavender-500 hover:bg-lavender-600 text-white px-8 py-3 rounded-full font-medium"
            >
              Explore Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
