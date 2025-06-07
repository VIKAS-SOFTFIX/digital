'use client';

import Header from '@/components/Header/Header';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import SolutionsGrid from '@/components/PortfolioMotion/PortfolioMotion';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <About />
      <Services />
      <SolutionsGrid />
      <Testimonials />
      <Footer />
    </main>
  );
}
