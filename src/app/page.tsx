'use client';

import { useState } from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import Methodology from '@/components/sections/Methodology';
import Visualizer from '@/components/sections/Visualizer';
import TeamSection from '@/components/sections/TeamSection';
import Footer from '@/components/sections/Footer';
import QualificationModal from '@/components/QualificationModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar onOpenModal={handleOpenModal} />
      <Hero />
      <Ticker />
      <Methodology />
      <Visualizer />
      <TeamSection />
      <Footer onOpenModal={handleOpenModal} />
      <QualificationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
