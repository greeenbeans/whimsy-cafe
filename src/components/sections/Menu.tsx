// 'use client';

// import '@/app/globals.css';
// import { MenuItem } from '@/app/types';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// const menuItems: MenuItem[] = [
//   //example
//   {
//     id: '1',
//     name: 'Lavender Cold Foam Matcha',
//     description: 'purple floral goodness',
//     price: '$0.00',
//     category: 'seasonal',
//     featured: true,
//   },
//   {
//     id: '2',
//     name: 'Cold Foam Matcha',
//     description: 'purple floral goodness',
//     price: '$0.00',
//     category: 'default',
//     featured: true,
//   },
//   {
//     id: '3',
//     name: 'Matcha',
//     description: 'purple floral goodness',
//     price: '$0.00',
//     category: 'default',
//     featured: true,
//   },
// ];

// const categories = [
//   { id: 'all', name: 'All Items', color: 'lavender' },
//   { id: 'default', name: 'Default', color: 'lavender' },
//   { id: 'seasonal', name: 'Seasonal', color: 'sage' },
//   { id: 'pastries', name: 'Pastries', color: 'rose' },
// ];

// function Menu() {
//   const [activeCategory, setActiveCategory] = useState('all');

//   const filteredItems =
//     activeCategory === 'all'
//       ? menuItems
//       : menuItems.filter(item => item.category === activeCategory);

//   const featuredItems = menuItems.filter(item => item.featured);

//   return (
//     <div className="section-container">
//       {/* Category Filter */}
//       <div className="flex flex-wrap gap-2 mb-6 justify-center">
//         {categories.map(category => (
//           <button
//             key={category.id}
//             onClick={() => setActiveCategory(category.id)}
//             className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
//               activeCategory === category.id
//                 ? 'bg-lavender-500 text-white shadow-lavender'
//                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//             }`}
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>

//       {/* Menu Grid */}
//       <motion.div
//         key={activeCategory}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
//       >
//         {filteredItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//             className="menu-item"
//           >
//             <div className="menu-item-header">
//               <h4 className="menu-item-name">{item.name}</h4>
//               <span className="menu-item-price">{item.price}</span>
//             </div>
//             <p className="menu-item-description">{item.description}</p>
//             <span className={`menu-category-badge menu-category-${item.category} mt-2`}>
//               {item.category}
//             </span>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className="mt-8 text-center bg-sage-50 rounded-xl p-6"
//       >
//         <p className="text-gray-600">
//           <strong className="text-sage-700">
//             Ask about our seasonal specials and daily fresh selections!
//           </strong>
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// export default Menu;

'use client';

import '@/app/globals.css';
import { motion } from 'framer-motion';
function Menu() {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 text-center bg-sage-50 rounded-xl p-6"
      >
        <p className="text-dark-lavender">
          <strong className="text-dark-lavender">
            Each pop up event has a brand new menu! <br></br>Menu archives will eventually be posted
            here
          </strong>
        </p>
      </motion.div>
    </div>
  );
}

export default Menu;
