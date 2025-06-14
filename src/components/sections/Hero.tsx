'use client';

import '@/app/globals.css';
import { motion } from 'framer-motion';

interface HeroProps {
  onExplore: () => void;
}

function Hero({}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavender rounded-full opacity-30 blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-rose rounded-full opacity-40 blur-lg"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-sage rounded-full opacity-25 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-light text-muted-pink mb-6">
            Whimsy
            <span className="block text-4xl md:text-5xl text-muted-pink font-normal">Cafe</span>
          </h1>

          <p className="text-xl md:text-2xl text-forest-green mb-8 max-w-2xl mx-auto font-light">
            Where every cup tells a story and every moment blooms with flavor
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;

// export default function Hero() {
//   return (
//     <section id="home" className="bg-gradient-to-br from-sage-green to-lavender py-24 text-center">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl md:text-6xl font-bold text-charcoal mb-4">Welcome to Bloom Cafe</h1>
//         <p className="text-lg md:text-xl text-forest-green mb-8 max-w-2xl mx-auto">
//           Where every cup tells a story and every bite brings joy. Experience artisan coffee and
//           handcrafted pastries in our cozy, welcoming space.
//         </p>
//         <a
//           href="#menu"
//           className="inline-block bg-muted-pink text-charcoal px-8 py-4 rounded-full font-semibold
//                      transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-muted-pink
//                      hover:-translate-y-1"
//         >
//           Explore Our Menu
//         </a>
//       </div>
//     </section>
//   );
// }
