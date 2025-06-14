'use client';

import '@/app/globals.css';
import { useState } from 'react';
import { About, Header, Hero, Menu, Modal, RSVP } from '../components';
import { ModalType } from './types';

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modalType: ModalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(null);

  return (
    <main
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right,rgb(199, 103, 255),rgb(128, 226, 229))',
      }}
    >
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

        <Modal isOpen={activeModal === 'rsvp'} onClose={closeModal} title="RSVP">
          <RSVP />
        </Modal>
      </div>
    </main>
  );
}
