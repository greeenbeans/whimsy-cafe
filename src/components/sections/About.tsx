// 'use client';
// import '../../app/globals.css';

// import { motion } from 'framer-motion';
// import { Clock, Heart, Users } from 'lucide-react';

// function About() {
//   const features = [
//     {
//       icon: Heart,
//       title: 'Made with Love',
//       description: 'Every item on our menu is crafted with passion and attention to detail.',
//     },
//     {
//       icon: Users,
//       title: 'Community Focus',
//       description:
//         'Whimsy Cafe is more than a cafe shop - we are a gathering place where neighbors become friends and memories are made.',
//     },
//     {
//       icon: Clock,
//       title: 'Fresh Daily',
//       description:
//         'Our pastries are baked fresh every morning, and our tea is brewed to order to ensure peak freshness.',
//     },
//   ];

//   return (
//     <div className="section-container">
//       <div className="text-center mb-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             Whimsy Cafe is more than a cafe - we are a gathering place where neighbors become
//             friends and memories are made.
//           </p>
//         </motion.div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {features.map((feature, index) => (
//           <motion.div
//             key={feature.title}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             className="about-feature"
//           >
//             <feature.icon className="about-feature-icon" />
//             <h3 className="about-feature-title">{feature.title}</h3>
//             <p className="about-feature-description">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default About;
export default function About() {
  return (
    <section id="about" className="p-8 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div>
          <p className="text-dark-lavender mb-6 text-lg">
            Welcome to Whimsy Cafe! We currently host bimonthly events that feature a new menu each
            time. The goal of each event is to create a welcoming space where people can hang out
            and enjoy a nice cup of tea, a delicious pastry, and a conversation with friends. Our
            next event is scheduled for June 29th. If you are interested in attending, please RSVP.
            If you have any questions, text me at +1-909-477-0300
          </p>
        </div>
      </div>
    </section>
  );
}
