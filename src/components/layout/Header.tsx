'use client';

import '@/app/globals.css';
import { ModalType } from '@/app/types';
import Button from '@/components/ui/Button';
import { Coffee, Menu } from 'lucide-react';

interface HeaderProps {
  onNavigate: (modal: ModalType) => void;
}

function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="w-8 h-8 text-lavender-600" />
            <h1 className="text-2xl font-serif font-bold text-gray-800">Whimsy Cafe</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('about')}
              className="text-gray-700 hover:text-lavender-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="text-gray-700 hover:text-lavender-600 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-gray-700 hover:text-lavender-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              /* Add mobile menu logic */
            }}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
