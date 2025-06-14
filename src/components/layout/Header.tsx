'use client';

import '@/app/globals.css';
import { ModalType } from '@/app/types';
import Button from '@/components/ui/Button';
import { Flower, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (modal: ModalType) => void;
}

function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavigate = (modal: ModalType) => {
    onNavigate(modal);
    setIsMobileMenuOpen(false); // Close menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Flower className="w-8 h-8 text-forest-green" />
            <h1 className="text-2xl font-serif font-bold text-forest-green">Whimsy Cafe</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('about')}
              className="text-forest-green hover:text-lavender transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="text-forest-green hover:text-lavender transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => onNavigate('rsvp')}
              className="text-forest-green hover:text-lavender transition-colors font-medium"
            >
              RSVP
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-forest-green/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => handleMobileNavigate('about')}
                className="text-left text-forest-green hover:text-lavender transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => handleMobileNavigate('menu')}
                className="text-left text-forest-green hover:text-lavender transition-colors font-medium py-2"
              >
                Menu
              </button>
              <button
                onClick={() => handleMobileNavigate('rsvp')}
                className="text-left text-forest-green hover:text-lavender transition-colors font-medium py-2"
              >
                RSVP
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const handleLinkClick = (): void => {
//     setIsOpen(false);
//   };

//   return (
//     <header className="bg-gradient-to-br from-lavender to-soft-pink sticky top-0 z-50 backdrop-blur-sm">
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold text-charcoal">
//             Bloom Cafe
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex space-x-8">
//             <li>
//               <a href="#home" className="text-charcoal hover:text-forest-green transition-colors">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="text-charcoal hover:text-forest-green transition-colors">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#menu" className="text-charcoal hover:text-forest-green transition-colors">
//                 Menu
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="text-charcoal hover:text-forest-green transition-colors"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-charcoal"
//             aria-label="Toggle mobile menu"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <ul className="md:hidden mt-4 space-y-2">
//             <li>
//               <a href="#home" onClick={handleLinkClick} className="block py-2 text-charcoal">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" onClick={handleLinkClick} className="block py-2 text-charcoal">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#menu" onClick={handleLinkClick} className="block py-2 text-charcoal">
//                 Menu
//               </a>
//             </li>
//             <li>
//               <a href="#contact" onClick={handleLinkClick} className="block py-2 text-charcoal">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// }
