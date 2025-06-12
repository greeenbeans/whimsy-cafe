'use client';

import '@/app/globals.css';
import { useState } from 'react';
import { About, Contact, Header, Hero, Menu, Modal } from '../components';
import { ModalType } from './types';

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modalType: ModalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-lavender-50 to-sage-50">
      <Header onNavigate={openModal} />

      <div className="relative">
        <Hero onExplore={() => openModal('menu')} />

        {/* Modals */}
        <Modal isOpen={activeModal === 'about'} onClose={closeModal} title="About Us">
          <About />
        </Modal>

        <Modal isOpen={activeModal === 'menu'} onClose={closeModal} title="Our Menu">
          <Menu />
        </Modal>

        <Modal isOpen={activeModal === 'contact'} onClose={closeModal} title="Contact">
          <Contact />
        </Modal>
      </div>
    </main>
  );
}
